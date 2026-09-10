"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { kind, madeKey, RECIPES, SALADS, TAG_LABEL } from "@/lib/data";
import type { Recipe, Tag } from "@/lib/types";
import { By } from "./Check";
import { CardBody, Tags } from "./RecipeCard";
import { useSync } from "./SyncProvider";

type Filter = "all" | "snack" | "meal" | "salad" | "day1" | "day2" | "day3" | Tag;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "snack", label: "Snacks" },
  { id: "meal", label: "Meals" },
  { id: "salad", label: "Bean salads" },
  { id: "day1", label: "Day 1" },
  { id: "day2", label: "Day 2" },
  { id: "day3", label: "Day 3" },
  { id: "df", label: TAG_LABEL.df },
  { id: "hand", label: TAG_LABEL.hand },
  { id: "nz", label: TAG_LABEL.nz },
];

function matches(r: Recipe, f: Filter, q: string): boolean {
  if (f === "salad") return false;
  if (f === "snack" || f === "meal") {
    if (kind(r) !== f) return false;
  } else if (f === "day1" || f === "day2" || f === "day3") {
    if (r.day !== Number(f.slice(3))) return false;
  } else if (f !== "all" && !r.tags.includes(f)) return false;
  if (!q) return true;
  const hay = `${r.name} ${r.yield} ${r.ings.join(" ")} ${r.notes.map((n) => n[1]).join(" ")}`.toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((w) => hay.includes(w));
}

function Item({ r, open, onToggle, hideMade }: { r: Recipe; open: boolean; onToggle: () => void; hideMade: boolean }) {
  const { isOn, set } = useSync();
  const made = madeKey(r.id);
  const on = isOn(made);
  if (hideMade && on) return null;
  return (
    <article className={`panel recipe-item ${on ? "made" : ""}`} id={r.id}>
      <div className="rhead">
        <div className="check" style={{ alignItems: "center" }}>
          <input type="checkbox" id={`c-${made}`} checked={on} onChange={(e) => set(made, e.target.checked)} aria-label={`Made: ${r.name}`} />
        </div>
        <div className="ttl">
          <Link href={`/recipes/${r.id}`}>{r.name}</Link>
          <By id={made} />
          <div className="meta">
            {r.yield}
            <span style={{ display: "block", marginTop: 4 }}>
              <Tags r={r} />
            </span>
          </div>
        </div>
        <button type="button" className="expand" aria-expanded={open} aria-controls={`body-${r.id}`} onClick={onToggle} aria-label={open ? "Collapse" : "Expand"}>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 6l5 5 5-5" />
          </svg>
        </button>
      </div>
      <div className="rbody" id={`body-${r.id}`} hidden={!open}>
        {open && <CardBody r={r} />}
      </div>
    </article>
  );
}

export function RecipeIndex({ initialQuery = "" }: { initialQuery?: string }) {
  const [q, setQ] = useState(initialQuery);
  const [f, setF] = useState<Filter>("all");
  const [open, setOpen] = useState<Set<string>>(() => new Set());
  const [hideMade, setHideMade] = useState(false);
  const { countOn } = useSync();

  // Deep link: /recipes#id opens that card.
  useEffect(() => {
    const id = location.hash.slice(1);
    if (id && RECIPES.some((r) => r.id === id)) {
      setOpen(new Set([id]));
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: "start" }), 50);
    }
  }, []);

  const list = useMemo(() => RECIPES.filter((r) => matches(r, f, q)), [f, q]);
  const showSalads = f === "salad" || (f === "all" && !q);
  const madeCount = countOn(RECIPES.map((r) => madeKey(r.id)));
  const toggle = (id: string) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  return (
    <div>
      <div className="toolbar">
        <input
          className="search"
          type="search"
          placeholder="Find a recipe or an ingredient"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search recipes"
        />
        <button type="button" className="btn quiet" onClick={() => setOpen(new Set(list.map((r) => r.id)))}>
          Expand all
        </button>
        <button type="button" className="btn quiet" onClick={() => setOpen(new Set())}>
          Collapse all
        </button>
        <button type="button" className="chip" aria-pressed={hideMade} onClick={() => setHideMade((v) => !v)}>
          Hide made ({madeCount})
        </button>
      </div>
      <div className="chips" role="group" aria-label="Filter">
        {FILTERS.map((x) => (
          <button key={x.id} type="button" className="chip" aria-pressed={f === x.id} onClick={() => setF(x.id)}>
            {x.label}
          </button>
        ))}
      </div>

      {f !== "salad" && (
        <div className={`recipe-list ${open.size === 0 ? "two" : ""}`} style={{ marginTop: 14 }}>
          {list.map((r) => (
            <Item key={r.id} r={r} open={open.has(r.id)} onToggle={() => toggle(r.id)} hideMade={hideMade} />
          ))}
          {list.length === 0 && <p className="muted">Nothing matches. Try a shorter word.</p>}
        </div>
      )}

      {showSalads && (
        <section className="section" id="salads">
          <h2>Bean salads, one a week</h2>
          <p className="section-sub">
            Not for the freezer. Make one on Sunday night; it keeps 3–4 days in the fridge and tastes better on day 2. No lettuce, so it does not go soggy. Eat from the tub or in a warm tortilla. Method is{" "}
            <a href="https://violetcooks.substack.com/" target="_blank" rel="noopener noreferrer">
              Violet Witchel's
            </a>
            .
          </p>
          <div className="panel formula">
            <b>Formula:</b> 2 cans beans (two kinds, rinsed) + 1 protein + 3 crunchy vegetables cut bean-sized + 1 pickled or briny thing + a whole bunch of herbs + dressing (3 parts oil to 1 part acid, plus mustard, garlic, salt). Mix, taste, fridge.
            <br />
            <span className="small muted">
              Chicken for salads: 800 g thighs or breasts in a single layer no thicker than 3 cm, salt, garlic powder, lemon zest, sealed. Sous vide 63 °C / 145 °F for 2 h (breast) or 74 °C / 165 °F for 2 h (thigh). Chill in the bag, dice cold. Or use a Costco rotisserie chicken.
            </span>
          </div>
          <div className="salads">
            {SALADS.map((s) => (
              <div className="panel salad" key={s.name}>
                <h3>{s.name}</h3>
                <dl>
                  <dt>Beans</dt>
                  <dd>{s.beans}</dd>
                  <dt>Protein</dt>
                  <dd>{s.protein}</dd>
                  <dt>Crunch</dt>
                  <dd>{s.veg}</dd>
                  <dt>Briny</dt>
                  <dd>{s.briny}</dd>
                  <dt>Herbs</dt>
                  <dd>{s.herbs}</dd>
                  <dt>Dressing</dt>
                  <dd>{s.dressing}</dd>
                  <dt>Cheese</dt>
                  <dd>{s.cheese}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
