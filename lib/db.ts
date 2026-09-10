import { neon } from "@neondatabase/serverless";
import type { Tick } from "./types";

function conn() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  return neon(url);
}

let ready: Promise<void> | null = null;

/** Create tables on first use. Idempotent. */
function ensureSchema(): Promise<void> {
  if (!ready) {
    const sql = conn();
    ready = (async () => {
      await sql`CREATE TABLE IF NOT EXISTS ticks (
        key text PRIMARY KEY,
        "on" boolean NOT NULL,
        who text,
        ts bigint NOT NULL
      )`;
      await sql`CREATE INDEX IF NOT EXISTS ticks_ts ON ticks (ts)`;
      await sql`CREATE TABLE IF NOT EXISTS login_attempts (
        ip text NOT NULL,
        ts bigint NOT NULL
      )`;
      await sql`CREATE INDEX IF NOT EXISTS login_attempts_ip_ts ON login_attempts (ip, ts)`;
    })().catch((e) => {
      ready = null;
      throw e;
    });
  }
  return ready;
}

type Row = { key: string; on: boolean; who: string | null; ts: string | number };
const toTick = (r: Row): Tick => ({ key: r.key, on: r.on, who: r.who, ts: Number(r.ts) });

/** All ticks changed after `since` (ms epoch). since=0 returns everything that is on or recently changed. */
export async function ticksSince(since: number): Promise<Tick[]> {
  await ensureSchema();
  const sql = conn();
  const rows = (await sql`SELECT key, "on", who, ts FROM ticks WHERE ts > ${since} ORDER BY ts ASC`) as Row[];
  return rows.map(toTick);
}

export async function setTicks(changes: { key: string; on: boolean }[], who: string | null): Promise<Tick[]> {
  await ensureSchema();
  const sql = conn();
  const ts = Date.now();
  const out: Tick[] = [];
  // Small batches only (capped by the route); sequential is fine for a household.
  for (const c of changes) {
    const rows = (await sql`
      INSERT INTO ticks (key, "on", who, ts) VALUES (${c.key}, ${c.on}, ${who}, ${ts})
      ON CONFLICT (key) DO UPDATE SET "on" = EXCLUDED."on", who = EXCLUDED.who, ts = EXCLUDED.ts
      RETURNING key, "on", who, ts`) as Row[];
    out.push(toTick(rows[0]));
  }
  return out;
}

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;

/** Returns true if this IP may attempt a login right now. Records the attempt. */
export async function recordLoginAttempt(ip: string): Promise<boolean> {
  await ensureSchema();
  const sql = conn();
  const now = Date.now();
  await sql`DELETE FROM login_attempts WHERE ts < ${now - WINDOW_MS}`;
  const rows = (await sql`SELECT count(*)::int AS n FROM login_attempts WHERE ip = ${ip} AND ts > ${now - WINDOW_MS}`) as {
    n: number;
  }[];
  if (rows[0].n >= MAX_ATTEMPTS) return false;
  await sql`INSERT INTO login_attempts (ip, ts) VALUES (${ip}, ${now})`;
  return true;
}

export async function clearLoginAttempts(ip: string): Promise<void> {
  const sql = conn();
  await sql`DELETE FROM login_attempts WHERE ip = ${ip}`;
}
