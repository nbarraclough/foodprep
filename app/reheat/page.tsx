import type { Metadata } from "next";
import Link from "next/link";
import { REHEAT } from "@/lib/data";

export const metadata: Metadata = { title: "Reheat" };

export default function ReheatPage() {
  return (
    <div>
      <div className="page-head">
        <h1>Reheat guide</h1>
        <p>From frozen unless it says thaw. Times are for a 1000–1200 W microwave. Stir, and check it is steaming hot in the middle before you eat it.</p>
      </div>
      <div className="twrap reheat">
        <table className="plain">
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
                <td className="muted">{r[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="reheat-cards">
        {REHEAT.map((r) => (
          <div key={r[0]} className="panel reheat-card">
            <h3>{r[0]}</h3>
            <dl>
              <dt>Microwave</dt>
              <dd>{r[1]}</dd>
              <dt>Air fryer</dt>
              <dd>{r[2]}</dd>
              {r[3] && (
                <>
                  <dt>Notes</dt>
                  <dd>{r[3]}</dd>
                </>
              )}
            </dl>
          </div>
        ))}
      </div>
      <p className="toolbar noprint">
        <Link className="btn" href="/print?sections=reheat">
          Print this guide
        </Link>
      </p>
    </div>
  );
}
