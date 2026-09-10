import { NextResponse } from "next/server";
import { getSession, KEY_RE } from "@/lib/auth";
import { setTicks, ticksSince } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const noStore = { "Cache-Control": "no-store" };

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Sign in first." }, { status: 401, headers: noStore });

  const url = new URL(req.url);
  const raw = url.searchParams.get("since") ?? "0";
  const since = /^\d{1,16}$/.test(raw) ? Number(raw) : 0;
  const ticks = await ticksSince(since);
  return NextResponse.json({ ticks, now: Date.now() }, { headers: noStore });
}

export async function PATCH(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Sign in first." }, { status: 401, headers: noStore });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400, headers: noStore });
  }
  const list = (body as { changes?: unknown })?.changes;
  if (!Array.isArray(list) || list.length === 0 || list.length > 400) {
    return NextResponse.json({ error: "Bad request" }, { status: 400, headers: noStore });
  }
  const changes: { key: string; on: boolean }[] = [];
  for (const c of list) {
    const key = (c as { key?: unknown })?.key;
    const on = (c as { on?: unknown })?.on;
    if (typeof key !== "string" || !KEY_RE.test(key) || typeof on !== "boolean") {
      return NextResponse.json({ error: "Bad request" }, { status: 400, headers: noStore });
    }
    changes.push({ key, on });
  }
  const ticks = await setTicks(changes, session.name || null);
  return NextResponse.json({ ticks, now: Date.now() }, { headers: noStore });
}
