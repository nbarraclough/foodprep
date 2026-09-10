"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { DAYS, kind, linearize, PLAN, RECIPES, REHEAT, RULES, SALADS, SHOP, shopKey, stepKey, TAG_LABEL } from "@/lib/data";
import type { Recipe } from "@/lib/types";
import { Grid } from "./RecipeCard";
import { useSync } from "./SyncProvider";

const SECTIONS = [
  ["plan", "Rules and freezer map"],
  ["recipes", "Recipe cards"],
  ["salads", "Bean salads"],
  ["days", "Cook day schedules"],
  ["shopping", "Shopping list"],
  ["reheat", "Reheat guide"],
] as const;
type Section = (typeof SECTIONS)[number][0];

const PARTS = [
  ["ings", "Ingredients"],
  ["method", "Method"],
  ["after", "Freeze and reheat"],
  ["notes", "Notes and source"],
] as const;
type Part = (typeof PARTS)[number][0];

function list(sp: URLSearchParams, k: string): string[] {
  return (sp.get(k) ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function PrintBuilder() {
  const sp = useSearchParams();
  const router = useRouter();
  const { isOn } = useSync();

  const sections = useMemo(() => {
    const s = list(sp, "sections") as Section[];
    return new Set<Section>(s.length ? s : ["shopping"]);
  }, [sp]);
  const recipes = useMemo(() => new Set(list(sp, "recipes")), [sp]);
  const parts = useMemo(() => {
    const p = list(sp, "parts") as Part[];
    return new Set<Part>(p.length ? p : ["ings", "method", "after", "notes"]);
  }, [sp]);
  const days = useMemo(() => {
    const d = list(sp, "days").map(Number);
    return new Set(d.length ? d : DAYS.map((x) => x.n));
  }, [sp]);
  const stores = useMemo(() => {
    const s = list(sp, "stores");
    return new Set(s.length ? s : SHOP.map((x) => x.store));
  }, [sp]);
  const method = sp.get("method") === "steps" ? "steps" : "grid";
  const unboughtOnly = sp.get("unbought") === "1";
  const hideDoneSteps = sp.get("hidedone") === "1";

  const update = useCallback(
    (patch: Record<string, string | null>) => {
      const next = new URLSearchParams(sp.toString());
      for (const [k, v] of Object.entries(patch)) {
        if (v === null || v === "") next.delete(k);
        else next.set(k, v);
      }
      router.replace(`/print?${next.toString()}`, { scroll: false });
    },
    [router, sp],
  );
  const toggleIn = (key: string, set: Set<string>, value: string, all: string[]) => {
    const n = new Set(set);
    if (n.has(value)) n.delete(value);
    else n.add(value);
    // Store the explicit list; an empty list means "none" for recipes but "all" for others, so keep at least one.
    update({ [key]: [...n].filter((v) => all.includes(v)).join(",") || (key === "recipes" ? null : all[0]) });
  };

  const chosenRecipes = RECIPES.filter((r) => recipes.has(r.id));

  return (
    <div>
      <div className="panel print-options noprint">
        <fieldset>
          <legend>What to print</legend>
          <div className="optgrid">
            {SECTIONS.map(([id, label]) => (
              <label key={id} className="opt">
                <input
                  type="checkbox"
                  checked={sections.has(id)}
                  onChange={() =>
                    toggleIn(
                      "sections",
                      sections,
                      id,
                      SECTIONS.map((s) => s[0]),
                    )
                  }
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        {sections.has("recipes") && (
          <>
            <fieldset>
              <legend>Which recipes</legend>
              <div className="chips" style={{ marginBottom: 8 }}>
                <button type="button" className="chip" onClick={() => update({ recipes: RECIPES.map((r) => r.id).join(",") })}>
                  All
                </button>
                <button type="button" className="chip" onClick={() => update({ recipes: RECIPES.filter((r) => kind(r) === "snack").map((r) => r.id).join(",") })}>
                  Snacks
                </button>
                <button type="button" className="chip" onClick={() => update({ recipes: RECIPES.filter((r) => kind(r) === "meal").map((r) => r.id).join(",") })}>
                  Meals
                </button>
                {[1, 2, 3].map((d) => (
                  <button key={d} type="button" className="chip" onClick={() => update({ recipes: RECIPES.filter((r) => r.day === d).map((r) => r.id).join(",") })}>
                    Day {d}
                  </button>
                ))}
                <button type="button" className="chip" onClick={() => update({ recipes: null })}>
                  None
                </button>
              </div>
              <div className="optgrid">
                {RECIPES.map((r) => (
                  <label key={r.id} className="opt">
                    <input
                      type="checkbox"
                      checked={recipes.has(r.id)}
                      onChange={() =>
                        toggleIn(
                          "recipes",
                          recipes,
                          r.id,
                          RECIPES.map((x) => x.id),
                        )
                      }
                    />
                    {r.name}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Which parts of each card</legend>
              <div className="optgrid">
                {PARTS.map(([id, label]) => (
                  <label key={id} className="opt">
                    <input
                      type="checkbox"
                      checked={parts.has(id)}
                      onChange={() =>
                        toggleIn(
                          "parts",
                          parts,
                          id,
                          PARTS.map((p) => p[0]),
                        )
                      }
                    />
                    {label}
                  </label>
                ))}
              </div>
              {parts.has("method") && (
                <div className="chips" style={{ marginTop: 8 }}>
                  <button type="button" className="chip" aria-pressed={method === "grid"} onClick={() => update({ method: null })}>
                    Method as grid
                  </button>
                  <button type="button" className="chip" aria-pressed={method === "steps"} onClick={() => update({ method: "steps" })}>
                    Method as numbered steps
                  </button>
                </div>
              )}
            </fieldset>
          </>
        )}

        {sections.has("days") && (
          <fieldset>
            <legend>Which cook days</legend>
            <div className="optgrid">
              {DAYS.map((d) => (
                <label key={d.n} className="opt">
                  <input
                    type="checkbox"
                    checked={days.has(d.n)}
                    onChange={() =>
                      toggleIn(
                        "days",
                        new Set([...days].map(String)),
                        String(d.n),
                        DAYS.map((x) => String(x.n)),
                      )
                    }
                  />
                  Day {d.n}: {d.title}
                </label>
              ))}
              <label className="opt">
                <input type="checkbox" checked={hideDoneSteps} onChange={(e) => update({ hidedone: e.target.checked ? "1" : null })} />
                Leave out steps already ticked
              </label>
            </div>
          </fieldset>
        )}

        {sections.has("shopping") && (
          <fieldset>
            <legend>Which stores</legend>
            <div className="optgrid">
              {SHOP.map((s) => (
                <label key={s.store} className="opt">
                  <input
                    type="checkbox"
                    checked={stores.has(s.store)}
                    onChange={() =>
                      toggleIn(
                        "stores",
                        stores,
                        s.store,
                        SHOP.map((x) => x.store),
                      )
                    }
                  />
                  {s.store}
                </label>
              ))}
              <label className="opt">
                <input type="checkbox" checked={unboughtOnly} onChange={(e) => update({ unbought: e.target.checked ? "1" : null })} />
                Only what is not bought yet
              </label>
            </div>
          </fieldset>
        )}

        <div className="toolbar" style={{ margin: 0 }}>
          <button type="button" className="btn primary" onClick={() => window.print()}>
            Print
          </button>
          <span className="muted small">The preview below is what comes out of the printer. Ticked boxes print as filled.</span>
        </div>
      </div>

      <div className="preview">
        {sections.has("plan") && (
          <section>
            <h2>{PLAN.title}</h2>
            <p>{PLAN.lede}</p>
            <h3 style={{ marginTop: 12 }}>Rules</h3>
            <ul className="plain">
              {RULES.map((r, i) => (
                <li key={i}>
                  <b>{r[0]}</b> {r[1]}
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: 12 }}>Where things go</h3>
            <ul className="plain">
              {PLAN.freezer.map(([k, v]) => (
                <li key={k}>
                  <b>{k}:</b> {v}
                </li>
              ))}
            </ul>
          </section>
        )}

        {sections.has("recipes") &&
          (chosenRecipes.length === 0 ? (
            <p className="muted noprint">Pick at least one recipe above.</p>
          ) : (
            <section className={sections.has("plan") ? "pagebreak" : ""}>
              <h2>Recipe cards</h2>
              {chosenRecipes.map((r) => (
                <PrintCard key={r.id} r={r} parts={parts} method={method} />
              ))}
            </section>
          ))}

        {sections.has("salads") && (
          <section className="pagebreak">
            <h2>Bean salads</h2>
            <p>
              2 cans beans (two kinds, rinsed) + 1 protein + 3 crunchy vegetables cut bean-sized + 1 pickled or briny thing + a bunch of herbs + dressing (3 parts oil to 1 part acid, plus mustard, garlic, salt). Keeps 3–4 days.
            </p>
            {SALADS.map((s) => (
              <div key={s.name} className="pcard">
                <h3>{s.name}</h3>
                <ul className="plain">
                  <li>
                    <b>Beans:</b> {s.beans}
                  </li>
                  <li>
                    <b>Protein:</b> {s.protein}
                  </li>
                  <li>
                    <b>Crunch:</b> {s.veg}
                  </li>
                  <li>
                    <b>Briny:</b> {s.briny}
                  </li>
                  <li>
                    <b>Herbs:</b> {s.herbs}
                  </li>
                  <li>
                    <b>Dressing:</b> {s.dressing}
                  </li>
                  <li>
                    <b>Cheese:</b> {s.cheese}
                  </li>
                </ul>
              </div>
            ))}
          </section>
        )}

        {sections.has("days") &&
          DAYS.filter((d) => days.has(d.n)).map((d) => (
            <section key={d.n} className="pagebreak">
              <h2>
                Day {d.n}: {d.title}
              </h2>
              <p>
                <b>{d.when}.</b> {d.goal}
              </p>
              <div style={{ marginTop: 8 }}>
                {d.steps
                  .filter((s) => !(hideDoneSteps && isOn(stepKey(d.n, s[0]))))
                  .map((s) => {
                    const on = isOn(stepKey(d.n, s[0]));
                    return (
                      <div key={s[0]} className="pstep">
                        <span className="t num">{s[0]}</span>
                        <span className="pitem">
                          <span className={`box ${on ? "on" : ""}`} />
                          <span>
                            <b>{s[1]}</b>
                            {s[2] && <small>{s[2]}</small>}
                          </span>
                        </span>
                      </div>
                    );
                  })}
              </div>
            </section>
          ))}

        {sections.has("shopping") && (
          <section className="pagebreak">
            <h2>Shopping list</h2>
            {SHOP.filter((st) => stores.has(st.store)).map((st) => (
              <div key={st.store} className="pcard">
                <h3>{st.store}</h3>
                <p className="muted small">{st.where}</p>
                <div className="plist">
                  {st.groups.map((g) => {
                    const items = g.items.filter((it) => !(unboughtOnly && isOn(shopKey(st.store, it[0]))));
                    if (items.length === 0) return null;
                    return (
                      <div key={g.h}>
                        <h4>{g.h}</h4>
                        {items.map((it) => {
                          const on = isOn(shopKey(st.store, it[0]));
                          return (
                            <div key={it[0]} className="pitem">
                              <span className={`box ${on ? "on" : ""}`} />
                              <span>
                                {it[0]}
                                {it[1] && <span className="q">{it[1]}</span>}
                                {it[2] && <small>{it[2]}</small>}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        )}

        {sections.has("reheat") && (
          <section className="pagebreak">
            <h2>Reheat guide</h2>
            <p className="small">From frozen unless it says thaw. Times are for a 1000–1200 W microwave. Stir, and check it is steaming hot in the middle.</p>
            <table className="plain" style={{ marginTop: 8 }}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Microwave</th>
                  <th>Air fryer</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {REHEAT.map((r) => (
                  <tr key={r[0]}>
                    <td>
                      <b>{r[0]}</b>
                    </td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
      </div>
    </div>
  );
}

function PrintCard({ r, parts, method }: { r: Recipe; parts: Set<Part>; method: "grid" | "steps" }) {
  const showIngs = parts.has("ings");
  const showMethod = parts.has("method");
  return (
    <div className="pcard">
      <h3>{r.name}</h3>
      <p className="small muted">
        {r.yield} · Day {r.day}
        {r.tags.length > 0 && ` · ${r.tags.map((t) => TAG_LABEL[t]).join(", ")}`}
      </p>
      {r.pre?.map((p, i) => (
        <p key={i} className="small">
          <b>{p}</b>
        </p>
      ))}
      {showMethod && method === "grid" ? (
        <div style={{ marginTop: 6 }}>
          <Grid r={r} interactive={false} />
        </div>
      ) : (
        <>
          {showIngs && (
            <ul className="plain">
              {r.ings.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          )}
          {showMethod && (
            <ol style={{ margin: "6px 0 0", paddingLeft: 20 }}>
              {linearize(r).map((s, i) => (
                <li key={i}>
                  <b>{s.what}</b>
                  {s.with.length > 0 && <span className="muted small"> — {s.with.join("; ")}</span>}
                </li>
              ))}
            </ol>
          )}
        </>
      )}
      {parts.has("after") && (
        <p className="small" style={{ marginTop: 6 }}>
          <b>Freeze:</b> {r.freeze} <b>Microwave:</b> {r.mw} <b>Air fryer:</b> {r.af}
        </p>
      )}
      {parts.has("notes") && (
        <div className="small" style={{ marginTop: 4 }}>
          {r.notes.map((n, i) => (
            <p key={i}>{n[1]}</p>
          ))}
          {r.source && (
            <p className="muted">
              Adapted from {r.source.name}: {r.source.url}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
