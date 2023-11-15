import { getAllRecipes } from "../data/recipeUtils";
import { featuredRecipes } from "../data/recipes";
import { HomePageView } from "../sections/blog/view";

const keywords = [
  "Cadence Cookbook",
  "Flow blockchain",
  "Flow",
  "Blockchain development",
  "Cadence",
  "Cadence programming",
  "Blockchain development",
  "Cadence examples",
  "Cadence use cases",
  "Flow blockchain examples",
  "Flow blockchain use cases",
];

export const metadata = {
  title: `Home | Cadence Cookbook `,
  description: `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain in the Cadence Cookbook.`,
  keywords: keywords,
  alternates: {
    canonical: `https://cookbook.flow.com/`,
  },
  openGraph: {
    title: `Home | Cadence Cookbook `,
    description: `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain in the Cadence Cookbook.`,
    url: `https://cookbook.flow.com/`,
    keywords: keywords,
    images: [
      {
        url: `https://cookbook.flow.com/assets/logo/flow_logo.svg`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function HomePage() {
  const recipes = await getAllRecipes();

  return <HomePageView recipes={recipes} featuredRecipes={featuredRecipes} />;
}
