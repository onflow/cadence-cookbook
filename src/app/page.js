import { getAllRecipes } from '../data/recipeUtils';
import { featuredRecipes } from '../data/recipes';
import { HomePageView } from '../sections/blog/view';

export const metadata = {
  title: 'Cadence Cookbook | Home',
};

export default async function HomePage() {
  const recipes = await getAllRecipes();

  return <HomePageView recipes={recipes} featuredRecipes={featuredRecipes}/>;
}
