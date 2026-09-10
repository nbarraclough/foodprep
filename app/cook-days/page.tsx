import type { Metadata } from "next";
import { CookDays } from "@/components/CookDays";
import { KitchenToggle } from "@/components/Kitchen";

export const metadata: Metadata = { title: "Cook days" };

export default function CookDaysPage() {
  return (
    <div>
      <div className="page-head" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 260px" }}>
          <h1>Cook days</h1>
          <p>Ordered so the oven changes temperature as few times as possible. Times are for two people; add an hour for one. Tap a time to start a timer.</p>
        </div>
        <KitchenToggle />
      </div>
      <CookDays />
    </div>
  );
}
