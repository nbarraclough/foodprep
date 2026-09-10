"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ingKey, kind, linearize, madeKey, TAG_LABEL } from "@/lib/data";
import type { Recipe } from "@/lib/types";
import { Check, By } from "./Check";
import { useSync } from "./SyncProvider";
import { KitchenToggle, TimerButton } from "./Kitchen";

type View = "grid" | "steps";
const VIEW_KEY = "foodprep:view";

function useView(): [View, (v: View) => void] {
  const [view, setView] = useState<View>("grid");
  useEffect(() => {
    try {
      const saved = localStorage.getItem(VIEW_KEY) as View | null;
      if (saved === "grid" || saved === "steps") setView(saved);
      else if (window.matchMedia("(max-width: 640px)").matches) setView("steps");
    } catch {
      /* ignore */
    }
  }, []);
  return [
    view,
    (v) => {
      setView(v);
      try {
        localStorage.setItem(VIEW_KEY, v);
      } catch {
        /* ignore */
      }
    },
  ];
}

export function Tags({ r }: { r: Recipe }) {
  return (
    <span className="tags">
      <span className="tag day">Day {r.day}</span>
      {r.tags.map((t) => (
        <span key={t} className={`tag ${t}`}>
          {TAG_LABEL[t]}
        </span>
      ))}
    </span>
  );
}

/** The operations grid: ingredients down the left, steps across, cells spanning the rows they use. */
export function Grid({ r, interactive = true }: { r: Recipe; interactive?: boolean }) {
  const n = r.ings.length;
  const C = r.cols.length;
  const occ = r.cols.map((col) => {
    const a: (Recipe["cols"][number][number] | null)[] = new Array(n).fill(null);
    for (const op of col) for (let i = op.r[0]; i <= op.r[1]; i++) a[i] = op;
    return a;
  });
  const rows = [];
  for (let i = 0; i < n; i++) {
    const cells = [
      <td className="ing" key="ing">
        {interactive ? (
          <Check id={ingKey(r.id, i)} label={r.ings[i]} />
        ) : (
          <span>{r.ings[i]}</span>
        )}
      </td>,
    ];
    for (let c = 0; c < C; c++) {
      const op = occ[c][i];
      if (op) {
        if (op.r[0] === i)
          cells.push(
            <td className="op" key={c} rowSpan={op.r[1] - op.r[0] + 1}>
              {op.t}
              {interactive && <TimerButton text={op.t} name={r.name} />}
            </td>,
          );
      } else if (i === 0 || occ[c][i - 1] !== null) {
        let j = i;
        while (j + 1 < n && occ[c][j + 1] === null) j++;
        cells.push(<td className="empty" key={c} rowSpan={j - i + 1} />);
      }
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }
  return (
    <div className="gridwrap">
      <table className="rc">
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

/** Same recipe as a checklist of ingredients and a numbered list of steps. */
export function Steps({ r, interactive = true }: { r: Recipe; interactive?: boolean }) {
  const steps = linearize(r);
  return (
    <div className="steps">
      <div className="panel ings">
        <h4>Ingredients</h4>
        {r.ings.map((ing, i) =>
          interactive ? <Check key={i} id={ingKey(r.id, i)} label={ing} /> : <div key={i}>{ing}</div>,
        )}
      </div>
      <div className="panel">
        <ol>
          {steps.map((s, i) => (
            <li key={i}>
              <div>
                <div className="what">{s.what}</div>
                {s.with.length > 0 && <div className="with">{s.with.join(" · ")}</div>}
                {interactive && <TimerButton text={s.what} name={r.name} />}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function After({ r }: { r: Recipe }) {
  return (
    <div className="after">
      <div>
        <b>Freeze</b>
        {r.freeze}
      </div>
      <div>
        <b>Microwave</b>
        {r.mw}
      </div>
      <div>
        <b>Air fryer</b>
        {r.af}
      </div>
      {r.notes.map((nt, i) => (
        <div key={i} className={`note ${nt[0]}`}>
          {nt[1]}
        </div>
      ))}
      {r.audit && r.audit.length > 0 && (
        <div className="note audit">
          <b>Checked in the audit</b>
          <ul>
            {r.audit.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function SourceLine({ r }: { r: Recipe }) {
  if (!r.source) return <span className="muted">House recipe</span>;
  const s = r.source;
  return (
    <span className="source">
      {s.url ? (
        <>
          Adapted from{" "}
          <a href={s.url} target="_blank" rel="noopener noreferrer">
            {s.name}
          </a>
        </>
      ) : (
        <>Based on {s.name}</>
      )}
      {s.also && (
        <>
          {" "}
          and{" "}
          <a href={s.also.url} target="_blank" rel="noopener noreferrer">
            {s.also.name}
          </a>
        </>
      )}
      {s.note ? <span className="muted"> ({s.note})</span> : null}
    </span>
  );
}

/** Full card body (everything under the title). */
export function CardBody({ r, showTitle = false }: { r: Recipe; showTitle?: boolean }) {
  const [view, setView] = useView();
  const { isOn, set } = useSync();
  const made = madeKey(r.id);
  return (
    <div>
      {showTitle && (
        <div className="card-head">
          <div className="check" style={{ alignItems: "center" }}>
            <input
              type="checkbox"
              id={`c-${made}`}
              checked={isOn(made)}
              onChange={(e) => set(made, e.target.checked)}
              aria-label={`Made: ${r.name}`}
            />
            <label htmlFor={`c-${made}`}>
              <h2 style={{ display: "inline" }}>{r.name}</h2>
              <By id={made} />
            </label>
          </div>
          <span className="yield">{r.yield}</span>
        </div>
      )}
      <div className="card-meta">
        <Tags r={r} />
        <span>{kind(r) === "snack" ? "Snack" : "Meal"}</span>
        <SourceLine r={r} />
        <span className="viewtoggle noprint" role="group" aria-label="Method layout" style={{ marginLeft: "auto" }}>
          <button type="button" aria-pressed={view === "grid"} onClick={() => setView("grid")}>
            Grid
          </button>
          <button type="button" aria-pressed={view === "steps"} onClick={() => setView("steps")}>
            Steps
          </button>
        </span>
      </div>
      {r.pre?.map((p, i) => (
        <div key={i} className="pre">
          {p}
        </div>
      ))}
      {view === "grid" ? <Grid r={r} /> : <Steps r={r} />}
      <After r={r} />
      <div className="card-foot noprint">
        <Link className="btn" href={`/print?sections=recipes&recipes=${r.id}`}>
          Print this card
        </Link>
        <Link className="btn quiet" href={`/recipes/${r.id}`}>
          Open on its own page
        </Link>
        <KitchenToggle />
      </div>
    </div>
  );
}
