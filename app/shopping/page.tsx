import type { Metadata } from "next";
import { Shopping } from "@/components/Shopping";

export const metadata: Metadata = { title: "Shopping" };

export default function ShoppingPage() {
  return (
    <div>
      <div className="page-head">
        <h1>Shopping list</h1>
        <p>Every recipe added up, with a small buffer. One Costco run before Day 1, a grocery top-up before Day 2. Chicago store names are a guide; swap for whatever is close.</p>
      </div>
      <Shopping />
    </div>
  );
}
