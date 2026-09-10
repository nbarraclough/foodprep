import { NextResponse } from "next/server";
import { COOKIE, cookieOptions, makeToken, pinMatches } from "@/lib/auth";
import { clearLoginAttempts, recordLoginAttempt } from "@/lib/db";

export const runtime = "nodejs";

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  const ip = (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip")) ?? "unknown";
  return ip.trim().slice(0, 64);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const { pin } = (body ?? {}) as { pin?: unknown };
  if (typeof pin !== "string" || pin.length === 0 || pin.length > 128) {
    return NextResponse.json({ error: "Enter the household PIN." }, { status: 400 });
  }

  const ip = clientIp(req);
  const allowed = await recordLoginAttempt(ip);
  if (!allowed) {
    return NextResponse.json({ error: "Too many attempts. Try again in 15 minutes." }, { status: 429 });
  }

  if (!pinMatches(pin)) {
    return NextResponse.json({ error: "That PIN is not right." }, { status: 401 });
  }

  await clearLoginAttempts(ip);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, makeToken({ name: "", iat: Date.now() }), cookieOptions());
  res.headers.set("Cache-Control", "no-store");
  return res;
}
