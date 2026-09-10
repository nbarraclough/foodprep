"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Tick } from "@/lib/types";

export type SyncStatus = "loading" | "live" | "syncing" | "offline";

interface SyncApi {
  me: string;
  status: SyncStatus;
  lastSync: number;
  isOn: (key: string) => boolean;
  tick: (key: string) => Tick | undefined;
  set: (key: string, on: boolean) => void;
  setMany: (changes: { key: string; on: boolean }[]) => void;
  countOn: (keys: string[]) => number;
}

const Ctx = createContext<SyncApi | null>(null);
const CACHE = "foodprep:ticks:v1";
const POLL_MS = 4000;

type Change = { key: string; on: boolean };

export function SyncProvider({ me, children }: { me: string; children: ReactNode }) {
  const [ticks, setTicks] = useState<Map<string, Tick>>(() => new Map());
  const [status, setStatus] = useState<SyncStatus>("loading");
  const [lastSync, setLastSync] = useState(0);
  const maxTs = useRef(0);
  const pending = useRef<Map<string, Change>>(new Map());
  const inflight = useRef(false);
  const hydrated = useRef(false);

  // Paint from the local cache first so the page is usable offline / instantly.
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    try {
      const raw = localStorage.getItem(CACHE);
      if (raw) {
        const arr = JSON.parse(raw) as Tick[];
        const m = new Map<string, Tick>();
        for (const t of arr) {
          m.set(t.key, t);
          if (t.ts > maxTs.current) maxTs.current = t.ts;
        }
        setTicks(m);
      }
    } catch {
      /* cache unavailable; fine */
    }
  }, []);

  const merge = useCallback((incoming: Tick[]) => {
    if (incoming.length === 0) return;
    setTicks((prev) => {
      const next = new Map(prev);
      for (const t of incoming) {
        const cur = next.get(t.key);
        if (!cur || t.ts >= cur.ts) next.set(t.key, t);
        if (t.ts > maxTs.current) maxTs.current = t.ts;
      }
      try {
        localStorage.setItem(CACHE, JSON.stringify([...next.values()].filter((t) => t.on)));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const flush = useCallback(async () => {
    if (inflight.current) return;
    inflight.current = true;
    try {
      if (pending.current.size > 0) {
        setStatus("syncing");
        const batch = [...pending.current.values()].slice(0, 400);
        const res = await fetch("/api/state", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ changes: batch }),
        });
        if (res.status === 401) {
          location.reload();
          return;
        }
        if (!res.ok) throw new Error("save failed");
        const data = (await res.json()) as { ticks: Tick[] };
        for (const c of batch) {
          const still = pending.current.get(c.key);
          if (still && still.on === c.on) pending.current.delete(c.key);
        }
        merge(data.ticks);
      }
      const res = await fetch(`/api/state?since=${maxTs.current}`, { cache: "no-store" });
      if (res.status === 401) {
        location.reload();
        return;
      }
      if (!res.ok) throw new Error("poll failed");
      const data = (await res.json()) as { ticks: Tick[] };
      // Don't let a poll overwrite a change we haven't saved yet.
      merge(data.ticks.filter((t) => !pending.current.has(t.key)));
      setStatus("live");
      setLastSync(Date.now());
    } catch {
      setStatus("offline");
    } finally {
      inflight.current = false;
    }
  }, [merge]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let stopped = false;
    const loop = async () => {
      if (stopped) return;
      if (document.visibilityState === "visible") await flush();
      timer = setTimeout(loop, POLL_MS);
    };
    void loop();
    const wake = () => {
      if (document.visibilityState === "visible") void flush();
    };
    document.addEventListener("visibilitychange", wake);
    window.addEventListener("focus", wake);
    window.addEventListener("online", wake);
    return () => {
      stopped = true;
      if (timer) clearTimeout(timer);
      document.removeEventListener("visibilitychange", wake);
      window.removeEventListener("focus", wake);
      window.removeEventListener("online", wake);
    };
  }, [flush]);

  const setMany = useCallback(
    (changes: Change[]) => {
      const now = Date.now();
      for (const c of changes) pending.current.set(c.key, c);
      merge(changes.map((c) => ({ key: c.key, on: c.on, who: me, ts: now })));
      void flush();
    },
    [flush, me, merge],
  );

  const api = useMemo<SyncApi>(
    () => ({
      me,
      status,
      lastSync,
      isOn: (key) => ticks.get(key)?.on ?? false,
      tick: (key) => ticks.get(key),
      set: (key, on) => setMany([{ key, on }]),
      setMany,
      countOn: (keys) => keys.reduce((n, k) => n + (ticks.get(k)?.on ? 1 : 0), 0),
    }),
    [me, status, lastSync, ticks, setMany],
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useSync(): SyncApi {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSync outside SyncProvider");
  return v;
}
