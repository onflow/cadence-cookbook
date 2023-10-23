import { paths } from "src/routes/paths";
import { ModuleView, SingleRecipeView } from "src/sections/blog/view";
import { fetchExternalRecipe, getAllRecipes, getNextRecipe, getPreviousRecipe, getRelatedRecipes, getSingleModule, getSingleRecipe } from "src/data/recipeUtils";
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Cadence Cookbook | Module View",
};

export async function generateStaticParams() {
  const modules = await getAllRecipes();
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export default async function ModulePage({params}) {
  const module = await getSingleModule(params.slug);

  if (!module) {
    redirect(paths.page404);
  }

  return <ModuleView module={module}  />;
}