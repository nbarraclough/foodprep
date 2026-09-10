import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Not here</h1>
      <p className="muted" style={{ marginTop: 8 }}>
        That page does not exist. <Link href="/recipes">Find a recipe</Link> or go to the <Link href="/">plan</Link>.
      </p>
    </div>
  );
}
