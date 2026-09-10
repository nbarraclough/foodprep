import type { Metadata } from "next";
import { Suspense } from "react";
import { PrintBuilder } from "@/components/PrintBuilder";

export const metadata: Metadata = { title: "Print" };

export default function PrintPage() {
  return (
    <div>
      <div className="page-head noprint">
        <h1>Print</h1>
        <p>Choose what goes on paper. The shopping list is the default.</p>
      </div>
      <Suspense fallback={<p className="muted">Loading…</p>}>
        <PrintBuilder />
      </Suspense>
    </div>
  );
}
