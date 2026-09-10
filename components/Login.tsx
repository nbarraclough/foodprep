"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";

const LEN = 4;

export function Login() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [shake, setShake] = useState(false);
  const pinInput = useRef<HTMLInputElement>(null);

  async function submit(code: string) {
    if (busy) return;
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: code }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErr(data.error ?? "Could not sign in.");
        setPin("");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }
      router.refresh();
    } catch {
      setErr("No connection. Try again.");
      setPin("");
    } finally {
      setBusy(false);
    }
  }

  function press(d: string) {
    if (busy) return;
    setErr(null);
    const next = (pin + d).slice(0, LEN);
    setPin(next);
    if (next.length === LEN) void submit(next);
  }
  function back() {
    if (busy) return;
    setPin((p) => p.slice(0, -1));
  }
  function onType(v: string) {
    const digits = v.replace(/\D/g, "").slice(0, LEN);
    setPin(digits);
    if (digits.length === LEN) void submit(digits);
  }
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (pin.length === LEN) void submit(pin);
    else pinInput.current?.focus();
  }

  return (
    <div className="login">
      <form className="panel" onSubmit={onSubmit}>
        <div>
          <h1>The October Freezer</h1>
          <p className="muted" style={{ marginTop: 6 }}>
            Enter your PIN once on each device. Ticks sync between them and show who made them.
          </p>
        </div>


        <div className="pinblock">
          <div className="pinhead">
            <span>Your PIN</span>
            <button type="button" className="linkbtn small" onClick={() => pinInput.current?.focus()}>
              Use the keyboard
            </button>
          </div>
          <div className={`pindots ${shake ? "shake" : ""}`} aria-hidden onClick={() => pinInput.current?.focus()}>
            {Array.from({ length: LEN }, (_, i) => (
              <span key={i} className={`pindot ${i < pin.length ? "on" : ""} ${i === pin.length ? "next" : ""}`} />
            ))}
          </div>
          <input
            ref={pinInput}
            className="pinhidden"
            name="pin"
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="one-time-code"
            aria-label={`${LEN}-digit PIN`}
            value={pin}
            onChange={(e) => onType(e.target.value)}
            maxLength={LEN}
          />
          <div className="keypad" role="group" aria-label="PIN keypad">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
              <button key={d} type="button" onClick={() => press(d)} disabled={busy}>
                {d}
              </button>
            ))}
            <span />
            <button type="button" onClick={() => press("0")} disabled={busy}>
              0
            </button>
            <button type="button" onClick={back} disabled={busy || pin.length === 0} aria-label="Delete last digit" className="keyback">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6" />
              </svg>
            </button>
          </div>
        </div>

        <p className="err" role="alert" aria-live="polite" style={{ minHeight: "1.3em" }}>
          {busy ? <span className="muted">Signing in…</span> : err}
        </p>
      </form>
    </div>
  );
}
