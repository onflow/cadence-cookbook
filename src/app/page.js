import { getAllRecipes } from 'src/data/recipes';
import { HomePageView } from 'src/sections/blog/view';

export const metadata = {
  title: 'Cadence Cookbook | Home',
};

export default async function HomePage() {
  const recipes = await getAllRecipes();

  return <HomePageView recipes={recipes} />;
}
