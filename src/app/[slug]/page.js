import { paths } from "src/routes/paths";
import { SingleRecipeView } from "src/sections/blog/view";
import { getAllRecipes, getRelatedRecipes, getSingleRecipe } from "src/data/recipes";
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Cadence Cookbook | Recipe View",
};

export async function generateStaticParams() {
  const recipes = await getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({params}) {
  const recipe = await getSingleRecipe(params.slug);

  if (!recipe) {
    redirect(paths.page404);
  }
  
  const relatedRecipes = await getRelatedRecipes(params.slug);
  return <SingleRecipeView recipe={recipe} relatedRecipes={relatedRecipes} />;
}
