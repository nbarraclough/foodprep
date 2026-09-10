"use client";

import { useEffect, useState } from "react";
import { DAYS, stepKey } from "@/lib/data";
import { Check } from "./Check";
import { TimerButton } from "./Kitchen";
import { useSync } from "./SyncProvider";

export function CookDays() {
  const [day, setDay] = useState(1);
  const [hideDone, setHideDone] = useState(false);
  const { isOn, countOn } = useSync();

  // Remember which day you were on.
  useEffect(() => {
    try {
      const d = Number(localStorage.getItem("foodprep:day"));
      if (d >= 1 && d <= DAYS.length) setDay(d);
    } catch {
      /* ignore */
    }
  }, []);
  const pick = (n: number) => {
    setDay(n);
    try {
      localStorage.setItem("foodprep:day", String(n));
    } catch {
      /* ignore */
    }
  };

  const d = DAYS.find((x) => x.n === day) ?? DAYS[0];
  const keys = d.steps.map((s) => stepKey(d.n, s[0]));
  const done = countOn(keys);
  const nowIdx = d.steps.findIndex((s) => !isOn(stepKey(d.n, s[0])));

  return (
    <div>
      <div className="daytabs" role="tablist" aria-label="Cook day">
        {DAYS.map((x) => {
          const k = x.steps.map((s) => stepKey(x.n, s[0]));
          const c = countOn(k);
          return (
            <button key={x.n} type="button" role="tab" className="chip" aria-selected={x.n === day} aria-pressed={x.n === day} onClick={() => pick(x.n)}>
              Day {x.n}
              {c > 0 && (
                <span className="muted">
                  {" "}
                  {c}/{k.length}
                </span>
              )}
            </button>
          );
        })}
        <span className="spacer" style={{ flex: 1 }} />
        <button type="button" className="chip" aria-pressed={hideDone} onClick={() => setHideDone((v) => !v)}>
          Hide done
        </button>
      </div>

      <div className="day-head">
        <h2>
          Day {d.n}: {d.title}
        </h2>
        <div className="when">{d.when}</div>
        <p className="goal">{d.goal}</p>
      </div>

      <div className="progress" aria-label={`${done} of ${keys.length} steps done`} style={{ marginBottom: 12 }}>
        <span style={{ width: `${(100 * done) / keys.length}%` }} />
      </div>

      <div className="panel list">
        {d.steps.map((s, i) => {
          const k = stepKey(d.n, s[0]);
          const on = isOn(k);
          if (hideDone && on) return null;
          const isNow = i === nowIdx;
          return (
            <div key={k} className={`row ${isNow ? "now" : ""}`}>
              <Check id={k} aria={`${s[0]} ${s[1]}`} label={s[1]} className="step-row">
                <div className="t num">{s[0]}</div>
                <div className="w">
                  <label htmlFor={`c-${k}`}>
                    <b>{s[1]}</b>
                    {isNow && <span className="nowtag">Now</span>}
                  </label>
                  {s[2] && <small>{s[2]}</small>}
                  <TimerButton text={s[1]} name={`Day ${d.n} ${s[0]}`} />
                </div>
              </Check>
            </div>
          );
        })}
      </div>
    </div>
  );
}
