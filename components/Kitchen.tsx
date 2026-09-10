"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

/* ---------- kitchen mode: bigger type, screen stays on ---------- */

interface KitchenApi {
  on: boolean;
  toggle: () => void;
  wakeSupported: boolean;
}
const KCtx = createContext<KitchenApi | null>(null);
const KKEY = "foodprep:kitchen";

export function KitchenProvider({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false);
  const lock = useRef<WakeLockSentinel | null>(null);
  const wakeSupported = typeof navigator !== "undefined" && "wakeLock" in navigator;

  useEffect(() => {
    try {
      setOn(localStorage.getItem(KKEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.kitchen = on ? "on" : "off";
    let cancelled = false;
    async function acquire() {
      if (!on || !("wakeLock" in navigator)) return;
      try {
        lock.current = await navigator.wakeLock.request("screen");
      } catch {
        /* denied or low battery; fine */
      }
    }
    const onVis = () => {
      if (document.visibilityState === "visible" && on && !cancelled) void acquire();
    };
    void acquire();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVis);
      lock.current?.release().catch(() => {});
      lock.current = null;
    };
  }, [on]);

  const api = useMemo<KitchenApi>(
    () => ({
      on,
      wakeSupported,
      toggle: () => {
        setOn((v) => {
          try {
            localStorage.setItem(KKEY, v ? "0" : "1");
          } catch {
            /* ignore */
          }
          return !v;
        });
      },
    }),
    [on, wakeSupported],
  );
  return <KCtx.Provider value={api}>{children}</KCtx.Provider>;
}

export function useKitchen() {
  const v = useContext(KCtx);
  if (!v) throw new Error("useKitchen outside provider");
  return v;
}

export function KitchenToggle() {
  const { on, toggle, wakeSupported } = useKitchen();
  return (
    <button
      type="button"
      className="btn"
      aria-pressed={on}
      onClick={toggle}
      title={wakeSupported ? "Bigger text and the screen stays on" : "Bigger text"}
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
        <path d="M4 20h16M6 20l6-16 6 16M8.5 14h7" />
      </svg>
      Kitchen mode
    </button>
  );
}

/* ---------- timers ---------- */

export interface Timer {
  id: number;
  label: string;
  endsAt: number;
  total: number;
  done: boolean;
}

interface TimerApi {
  timers: Timer[];
  start: (minutes: number, label: string) => void;
  dismiss: (id: number) => void;
  addMinute: (id: number) => void;
}
const TCtx = createContext<TimerApi | null>(null);

function beep() {
  try {
    const Ctx = window.AudioContext;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, now + i * 0.35);
      g.gain.exponentialRampToValueAtTime(0.4, now + i * 0.35 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.35 + 0.28);
      o.connect(g).connect(ctx.destination);
      o.start(now + i * 0.35);
      o.stop(now + i * 0.35 + 0.3);
    }
    setTimeout(() => ctx.close().catch(() => {}), 2500);
  } catch {
    /* no audio */
  }
  try {
    navigator.vibrate?.([300, 150, 300, 150, 600]);
  } catch {
    /* ignore */
  }
}

export function TimerProvider({ children }: { children: ReactNode }) {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [, tick] = useState(0);
  const seq = useRef(1);

  useEffect(() => {
    if (timers.length === 0) return;
    const iv = setInterval(() => {
      tick((n) => n + 1);
      const now = Date.now();
      setTimers((ts) => {
        let changed = false;
        const next = ts.map((t) => {
          if (!t.done && t.endsAt <= now) {
            changed = true;
            return { ...t, done: true };
          }
          return t;
        });
        if (changed) {
          beep();
          return next;
        }
        return ts;
      });
    }, 500);
    return () => clearInterval(iv);
  }, [timers.length]);

  const start = useCallback((minutes: number, label: string) => {
    const ms = Math.round(minutes * 60000);
    setTimers((ts) => [...ts, { id: seq.current++, label, endsAt: Date.now() + ms, total: ms, done: false }]);
  }, []);
  const dismiss = useCallback((id: number) => setTimers((ts) => ts.filter((t) => t.id !== id)), []);
  const addMinute = useCallback(
    (id: number) => setTimers((ts) => ts.map((t) => (t.id === id ? { ...t, endsAt: Math.max(t.endsAt, Date.now()) + 60000, done: false } : t))),
    [],
  );

  const api = useMemo(() => ({ timers, start, dismiss, addMinute }), [timers, start, dismiss, addMinute]);
  return (
    <TCtx.Provider value={api}>
      {children}
      <TimerBar />
    </TCtx.Provider>
  );
}

export function useTimers() {
  const v = useContext(TCtx);
  if (!v) throw new Error("useTimers outside provider");
  return v;
}

function fmt(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, "0")}`;
}

function TimerBar() {
  const { timers, dismiss, addMinute } = useTimers();
  if (timers.length === 0) return null;
  const now = Date.now();
  return (
    <div className="timerbar noprint" role="status" aria-live="polite">
      {timers.map((t) => (
        <div key={t.id} className={`timer ${t.done ? "ring" : ""}`}>
          <span className="tlabel">{t.label}</span>
          <span className="tleft num">{t.done ? "Done" : fmt(t.endsAt - now)}</span>
          <button type="button" className="btn quiet" onClick={() => addMinute(t.id)}>
            +1 min
          </button>
          <button type="button" className="btn" onClick={() => dismiss(t.id)} aria-label={`Dismiss timer ${t.label}`}>
            {t.done ? "OK" : "Stop"}
          </button>
        </div>
      ))}
    </div>
  );
}

/** Finds "15–18 min", "2 h", "90 s" style durations in a step and offers a timer for the shortest figure. */
export function parseMinutes(text: string): { minutes: number; label: string } | null {
  const m = text.match(/(\d+(?:[.,]\d+)?)(?:\s*[–-]\s*(\d+(?:[.,]\d+)?))?\s*(min|mins|minutes?|h|hr|hours?|s|sec|secs|seconds?)\b/i);
  if (!m) return null;
  const n = parseFloat(m[1].replace(",", "."));
  const unit = m[3].toLowerCase();
  const minutes = unit.startsWith("h") ? n * 60 : unit.startsWith("s") ? n / 60 : n;
  if (!Number.isFinite(minutes) || minutes <= 0 || minutes > 600) return null;
  return { minutes, label: m[0] };
}

export function TimerButton({ text, name }: { text: string; name: string }) {
  const { start } = useTimers();
  const p = parseMinutes(text);
  if (!p) return null;
  return (
    <button type="button" className="chip timerbtn noprint" onClick={() => start(p.minutes, `${name}: ${text}`)} aria-label={`Start a ${p.label} timer`}>
      ⏱ {p.label}
    </button>
  );
}
