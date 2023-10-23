import { paths } from "src/routes/paths";
import { SingleRecipeView } from "src/sections/blog/view";
import { fetchExternalRecipe, getAllRecipes, getModuleProgress, getNextRecipe, getPreviousRecipe, getRelatedRecipes, getSingleModuleByTitle, getSingleRecipe } from "src/data/recipeUtils";
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

  const fetchedRecipe = fetchExternalRecipe(recipe)
  const fetchedModule = await getSingleModuleByTitle(recipe.module)
  
  const relatedRecipes = await getRelatedRecipes(recipe.module, recipe.slug);
  const nextRecipe = await getNextRecipe(recipe.module, recipe.slug);
  const previousRecipe = await getPreviousRecipe(recipe.module, recipe.slug);

  const progress = await getModuleProgress(recipe.module, recipe.slug);

  return <SingleRecipeView moduleSlug={fetchedModule.slug} recipe={fetchedRecipe} relatedRecipes={relatedRecipes} nextRecipeTitle={nextRecipe !== null ? nextRecipe.title : null} nextRecipeSlug={nextRecipe !== null ? nextRecipe.slug : null} previousRecipeSlug={previousRecipe !== null ? previousRecipe.slug : null} progress={progress * 100} />;
}
