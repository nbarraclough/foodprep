"use client";

import type { ReactNode } from "react";
import { useSync } from "./SyncProvider";

function ago(ts: number): string {
  const s = Math.max(0, Math.round((Date.now() - ts) / 1000));
  if (s < 60) return "just now";
  const m = Math.round(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  if (h < 48) return `${h} h ago`;
  return new Date(ts).toLocaleDateString();
}

/** Who ticked it: small initial chip. Shown only for other people's ticks. */
export function By({ id }: { id: string }) {
  const { tick, me } = useSync();
  const t = tick(id);
  if (!t?.on || !t.who || t.who === me) return null;
  return (
    <span className="by" title={`Ticked by ${t.who}, ${ago(t.ts)}`}>
      <span className="avatar" aria-hidden>
        {t.who[0]?.toUpperCase()}
      </span>
      <span className="visually-hidden">Ticked by {t.who}</span>
    </span>
  );
}

interface Props {
  id: string;
  label: ReactNode;
  /** plain-text label for screen readers when `label` is rich */
  aria?: string;
  detail?: ReactNode;
  className?: string;
  children?: ReactNode;
}

/** A synced checkbox row. Layout: [box] [label + optional detail]. */
export function Check({ id, label, aria, detail, className, children }: Props) {
  const { isOn, set } = useSync();
  const on = isOn(id);
  const dom = `c-${id}`;
  return (
    <div className={`check ${on ? "done" : ""} ${className ?? ""}`}>
      <input type="checkbox" id={dom} checked={on} onChange={(e) => set(id, e.target.checked)} aria-label={aria} />
      {children ?? (
        <label htmlFor={dom}>
          <span className="txt">{label}</span>
          <By id={id} />
          {detail && <small>{detail}</small>}
        </label>
      )}
    </div>
  );
}
