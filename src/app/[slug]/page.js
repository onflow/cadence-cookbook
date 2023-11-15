import { paths } from "src/routes/paths";
import { SingleRecipeView } from "src/sections/blog/view";
import {
  fetchExternalRecipe,
  getAllRecipes,
  getModuleProgress,
  getNextRecipe,
  getPreviousRecipe,
  getRelatedRecipes,
  getSingleModuleByTitle,
  getSingleRecipe,
} from "src/data/recipeUtils";
import { redirect } from "next/navigation";

// eslint-disable-next-line consistent-return
export async function generateMetadata({ params }) {
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

  const recipe = await getSingleRecipe(params.slug);

  if (recipe) {
    return {
      title: `${recipe.title} | Cadence Cookbook `,
      description:
        recipe.excerpt !== undefined && recipe.excerpt !== null
          ? recipe.excerpt
          : `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain, including ${recipe.title}.`,
      keywords: keywords,
      alternates: {
        canonical: `https://cookbook.flow.com/${params.slug}/`,
      },
      openGraph: {
        title: `${recipe.title} | Cadence Cookbook `,
        description:
          recipe.excerpt !== undefined && recipe.excerpt !== null
            ? recipe.excerpt
            : `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain, including ${recipe.title}.`,
        url: `https://cookbook.flow.com/${params.slug}/`,
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
  }
}

export async function generateStaticParams() {
  const recipes = await getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({ params }) {
  const recipe = await getSingleRecipe(params.slug);

  if (!recipe) {
    redirect(paths.page404);
  }

  const fetchedRecipe = fetchExternalRecipe(recipe);
  const fetchedModule = await getSingleModuleByTitle(recipe.module);

  const relatedRecipes = await getRelatedRecipes(recipe.module, recipe.slug);
  const nextRecipe = await getNextRecipe(recipe.module, recipe.slug);
  const previousRecipe = await getPreviousRecipe(recipe.module, recipe.slug);

  const progress = await getModuleProgress(recipe.module, recipe.slug);

  return (
    <SingleRecipeView
      moduleSlug={fetchedModule.slug}
      recipe={fetchedRecipe}
      relatedRecipes={relatedRecipes}
      nextRecipeTitle={nextRecipe !== null ? nextRecipe.title : null}
      nextRecipeSlug={nextRecipe !== null ? nextRecipe.slug : null}
      previousRecipeSlug={previousRecipe !== null ? previousRecipe.slug : null}
      progress={progress * 100}
    />
  );
}
