import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { byId, RECIPES } from "@/lib/data";
import { CardBody } from "@/components/RecipeCard";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const r = byId(id);
  return { title: r ? r.name : "Recipe" };
}

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const r = byId(id);
  if (!r) notFound();
  const i = RECIPES.indexOf(r);
  const prev = RECIPES[i - 1];
  const next = RECIPES[i + 1];
  return (
    <article>
      <p className="small noprint" style={{ marginBottom: 10 }}>
        <Link href={`/recipes#${r.id}`}>← All recipes</Link>
      </p>
      <CardBody r={r} showTitle />
      <nav className="pager noprint" aria-label="Other recipes">
        {prev ? (
          <Link className="btn quiet" href={`/recipes/${prev.id}`}>
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link className="btn quiet" href={`/recipes/${next.id}`}>
            {next.name} →
          </Link>
        )}
      </nav>
    </article>
  );
}
