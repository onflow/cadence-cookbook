/* eslint-disable no-restricted-syntax */
import { getAllRecipes, getSingleModule, getSingleModuleByTitle } from 'src/data/recipeUtils';

const URL = 'https://cadence-cookbook.vercel.app';

export default async function sitemap() {
  // Dynamic recipes
  const recipes = await getAllRecipes();

  const recipeOptions = recipes?.map((recipe) => ({
    url: `${URL}/recipes/${recipe.slug}/`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic modules
  const modules = await getAllRecipes()
  const uniqueModules = []

  for await (const i of modules) {
    const parentModule = await getSingleModuleByTitle(i.module)
    if (!uniqueModules.includes(parentModule.slug)) {
      uniqueModules.push(parentModule.slug);
    }
  }

  const modulesOptions = uniqueModules?.map((module) => ({
    url: `${URL}/modules/${module}/`,
    lastModified: new Date().toISOString(),
  }));

  // Static pages
  const routes = [
    '/',
    
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...routes,
    ...recipeOptions,
    ...modulesOptions

  ];
}
