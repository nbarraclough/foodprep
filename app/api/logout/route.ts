import { NextResponse } from "next/server";
import { COOKIE, cookieOptions } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", { ...cookieOptions(), maxAge: 0 });
  res.headers.set("Cache-Control", "no-store");
  return res;
}
