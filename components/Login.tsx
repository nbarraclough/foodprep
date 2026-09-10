"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [pin, setPin] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, pin }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErr(data.error ?? "Could not sign in.");
        return;
      }
      router.refresh();
    } catch {
      setErr("No connection. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="login">
      <form className="panel" onSubmit={submit}>
        <div>
          <h1>The October Freezer</h1>
          <p className="muted" style={{ marginTop: 6 }}>
            Sign in once on each device. Ticks you make show up on the other one.
          </p>
        </div>
        <label>
          Your name
          <input
            name="name"
            autoComplete="given-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={24}
            required
            placeholder="Nick"
          />
        </label>
        <label>
          Household passphrase
          <input
            name="pin"
            type="password"
            autoComplete="current-password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength={128}
            required
          />
        </label>
        {err && (
          <p className="err" role="alert">
            {err}
          </p>
        )}
        <button className="btn primary" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
