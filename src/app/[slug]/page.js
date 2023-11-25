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
import StructuredData from "src/components/StructuredData";
import { randomIntFromInterval } from "src/utils/random_interval";

export async function generateStructuredData(params) {
  const recipe = await getSingleRecipe(params);

  if (recipe)
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://cookbook.flow.com/${recipe.slug}/`,
      },
      headline: `${recipe.title} | Cadence Cookbook `,
      description:
        recipe.excerpt !== undefined && recipe.excerpt !== null
          ? recipe.excerpt
          : `Explore Cadence smart contracts and transaction scripts for different use cases on the Flow Blockchain, including ${recipe.title}.`,
      image:
        recipe.coverUrl !== undefined
          ? recipe.coverUrl
          : `/assets/illustrations/flow/bg-dark${randomIntFromInterval(
              1,
              5
            )}.png`,
      author: {
        "@type": "Organization",
        name: "Flow Blockchain", 
        logo: {
          "@type": "ImageObject",
          url: `https://cookbook.flow.com/assets/logo/flow_logo.svg`,
        },
      },
      publisher: {
        "@type": "Organization",
        name: "Flow Blockchain",
        logo: {
          "@type": "ImageObject",
          url: `https://cookbook.flow.com/assets/logo/flow_logo.svg`,
        },
      },
      datePublished: recipe.createdAt,
    };
  return {};
}

// eslint-disable-next-line consistent-return
export async function generateMetadata({ params }) {
  const recipe = await getSingleRecipe(params.slug);

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
    recipe.title,
  ];

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

  const structuredData = await generateStructuredData(params.slug);

  const fetchedRecipe = fetchExternalRecipe(recipe);
  const fetchedModule = await getSingleModuleByTitle(recipe.module);

  const relatedRecipes = await getRelatedRecipes(recipe.module, recipe.slug);
  const nextRecipe = await getNextRecipe(recipe.module, recipe.slug);
  const previousRecipe = await getPreviousRecipe(recipe.module, recipe.slug);

  const progress = await getModuleProgress(recipe.module, recipe.slug);

  return (
    <>
      <StructuredData data={structuredData} />
      <SingleRecipeView
        moduleSlug={fetchedModule.slug}
        recipe={fetchedRecipe}
        relatedRecipes={relatedRecipes}
        nextRecipeTitle={nextRecipe !== null ? nextRecipe.title : null}
        nextRecipeSlug={nextRecipe !== null ? nextRecipe.slug : null}
        previousRecipeSlug={
          previousRecipe !== null ? previousRecipe.slug : null
        }
        progress={progress * 100}
      />
    </>
  );
}
