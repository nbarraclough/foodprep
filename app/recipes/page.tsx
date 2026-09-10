import type { Metadata } from "next";
import { RecipeIndex } from "@/components/RecipeIndex";

export const metadata: Metadata = { title: "Recipes" };

export default function RecipesPage() {
  return (
    <div>
      <div className="page-head">
        <h1>Recipes</h1>
        <p>Tick the box on each ingredient as you set it out. Tick the recipe name when it is in the freezer.</p>
      </div>
      <RecipeIndex />
    </div>
  );
}
