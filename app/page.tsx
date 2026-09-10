import Link from "next/link";
import { CREDITS, PLAN, RULES, ruleKey } from "@/lib/data";
import { Check } from "@/components/Check";

export default function PlanPage() {
  return (
    <div>
      <div className="hero">
        <div>
          <h1>{PLAN.title}</h1>
          <p className="lede" style={{ marginTop: 8 }}>
            {PLAN.lede}
          </p>
        </div>
        <div className="facts">
          {PLAN.facts.map((f) => (
            <div key={f.k} className="panel fact">
              <div className="k">{f.k}</div>
              <div className="v">{f.v}</div>
              <div className="s">{f.s}</div>
            </div>
          ))}
        </div>
        <div className="toolbar" style={{ margin: 0 }}>
          <Link className="btn primary" href="/shopping">
            Shopping list
          </Link>
          <Link className="btn" href="/cook-days">
            Today's cook day
          </Link>
          <Link className="btn" href="/recipes">
            Find a recipe
          </Link>
          <Link className="btn quiet" href="/print">
            Print
          </Link>
        </div>
      </div>

      <section className="section">
        <h2>Rules</h2>
        <p className="section-sub">Tick each one once you have both read it. They matter more than any single recipe.</p>
        <div className="panel list">
          {RULES.map((r, i) => (
            <div key={i} className="row">
              <Check id={ruleKey(i)} label={<b>{r[0]}</b>} aria={r[0]} detail={r[1]} />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Where things go</h2>
        <div className="freezer">
          {PLAN.freezer.map(([k, v]) => (
            <div key={k} className="panel shelf">
              <b>{k}</b>
              {v}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Words</h2>
        <p className="section-sub">US names are used in the recipes and shopping list.</p>
        <dl className="words">
          {PLAN.words.map(([nz, us]) => (
            <div key={nz}>
              <dt>{nz}</dt>
              <dd>= {us}</dd>
            </div>
          ))}
        </dl>
      </section>


      <footer className="section muted small" style={{ paddingTop: 16, borderTop: "1px solid var(--line)" }}>
        <p>{CREDITS}</p>
      </footer>
    </div>
  );
}
