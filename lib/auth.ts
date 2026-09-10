import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE = "fp_session";
const MAX_AGE_S = 60 * 60 * 24 * 365; // a year

export interface Session {
  name: string;
  iat: number;
}

function secret(): Buffer {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("SESSION_SECRET must be set (32+ chars)");
  return Buffer.from(s, "utf8");
}

const b64 = (b: Buffer) => b.toString("base64url");
const sign = (payload: string) => b64(createHmac("sha256", secret()).update(payload).digest());

export function makeToken(session: Session): string {
  const payload = b64(Buffer.from(JSON.stringify(session), "utf8"));
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token: string | undefined): Session | null {
  if (!token) return null;
  const dot = token.indexOf(".");
  if (dot < 1) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = sign(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const s = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Session;
    if (typeof s.name !== "string" || typeof s.iat !== "number") return null;
    if (Date.now() - s.iat > MAX_AGE_S * 1000) return null;
    return s;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<Session | null> {
  const jar = await cookies();
  return verifyToken(jar.get(COOKIE)?.value);
}

export function cookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_S,
  };
}

/**
 * PINs come from `PINS` as `Name=1234,Other=5678`. `HOUSEHOLD_PIN` (no name) still works as a fallback.
 * Returns the matching name, "" for the shared PIN, or null. Every candidate is compared so timing
 * does not reveal which one matched.
 */
export function pinMatches(submitted: string): string | null {
  const candidates: { name: string; pin: string }[] = [];
  for (const entry of (process.env.PINS ?? "").split(",")) {
    const eq = entry.indexOf("=");
    if (eq < 1) continue;
    const name = entry.slice(0, eq).trim();
    const pin = entry.slice(eq + 1).trim();
    if (name && pin) candidates.push({ name, pin });
  }
  if (process.env.HOUSEHOLD_PIN) candidates.push({ name: "", pin: process.env.HOUSEHOLD_PIN });
  const a = Buffer.from(submitted.normalize("NFKC"), "utf8");
  let matched: string | null = null;
  for (const c of candidates) {
    const b = Buffer.from(c.pin.normalize("NFKC"), "utf8");
    const ok = a.length === b.length ? timingSafeEqual(a, b) : (timingSafeEqual(b, b), false);
    if (ok && matched === null) matched = c.name;
  }
  return matched;
}

export const KEY_RE = /^[a-z0-9][a-z0-9:-]{0,79}$/;
