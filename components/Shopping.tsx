"use client";

import Link from "next/link";
import { useState } from "react";
import { allShopKeys, SHOP, shopKey, storeShopKeys } from "@/lib/data";
import { Check } from "./Check";
import { useSync } from "./SyncProvider";

export function Shopping() {
  const [hideDone, setHideDone] = useState(false);
  const [store, setStore] = useState<string>("all");
  const [confirm, setConfirm] = useState(false);
  const { isOn, countOn, setMany } = useSync();

  const all = allShopKeys();
  const total = all.length;
  const done = countOn(all);

  function clearAll() {
    if (!confirm) {
      setConfirm(true);
      setTimeout(() => setConfirm(false), 4000);
      return;
    }
    setMany(all.filter(isOn).map((key) => ({ key, on: false })));
    setConfirm(false);
  }

  const stores = store === "all" ? SHOP : SHOP.filter((s) => s.store === store);

  return (
    <div>
      <div className="toolbar">
        <div className="chips" role="group" aria-label="Store">
          <button type="button" className="chip" aria-pressed={store === "all"} onClick={() => setStore("all")}>
            All stores
          </button>
          {SHOP.map((s) => (
            <button key={s.store} type="button" className="chip" aria-pressed={store === s.store} onClick={() => setStore(s.store)}>
              {s.store}
            </button>
          ))}
        </div>
        <span className="spacer" />
        <button type="button" className="chip" aria-pressed={hideDone} onClick={() => setHideDone((v) => !v)}>
          Hide bought
        </button>
        <button type="button" className={`btn quiet ${confirm ? "primary" : ""}`} onClick={clearAll} disabled={done === 0}>
          {confirm ? "Tap again to clear all ticks" : "Clear ticks"}
        </button>
        <Link className="btn" href={`/print?sections=shopping&unbought=1${store === "all" ? "" : `&stores=${encodeURIComponent(store)}`}`}>
          Print what is left
        </Link>
      </div>

      <p className="muted small num" style={{ marginBottom: 6 }}>
        {done} of {total} bought
      </p>
      <div className="progress" style={{ marginBottom: 16 }}>
        <span style={{ width: `${(100 * done) / total}%` }} />
      </div>

      <div className="stores">
        {stores.map((st) => {
          const keys = storeShopKeys(st.store);
          const c = countOn(keys);
          return (
            <section key={st.store} aria-labelledby={`store-${st.store}`}>
              <div className="store-head">
                <h2 id={`store-${st.store}`}>{st.store}</h2>
                <span className="count num">
                  {c}/{keys.length}
                </span>
                <div className="where" style={{ flexBasis: "100%" }}>
                  {st.where}
                </div>
              </div>
              <div className="panel list">
                {st.groups.map((g) => {
                  const rows = g.items.filter((it) => !(hideDone && isOn(shopKey(st.store, it[0]))));
                  if (rows.length === 0) return null;
                  return (
                    <div key={g.h} style={{ display: "contents" }}>
                      <div className="group-head">
                        <h4>{g.h}</h4>
                      </div>
                      {rows.map((it) => {
                        const k = shopKey(st.store, it[0]);
                        return (
                          <div key={k} className="row">
                            <Check
                              id={k}
                              aria={`${it[0]} ${it[1]}`}
                              label={
                                <>
                                  {it[0]}
                                  {it[1] && <span className="qty">{it[1]}</span>}
                                </>
                              }
                              detail={it[2]}
                            />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
