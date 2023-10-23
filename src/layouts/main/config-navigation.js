import Iconify from "src/components/iconify";
import { recipes } from "src/data/recipes";
import { paths } from "src/routes/paths";

const flattenRecipes = (arr) =>
  arr.flatMap(({ recipes, ...rest }) =>
    recipes.map((o) => ({
      ...rest,
      ...o,
    }))
  );

const nftFundamentals = flattenRecipes(recipes)
  .filter((i) => i.module === "NFT Fundamentals")
  .map((e) => {
    return { title: e.title, path: paths.recipe(e.slug) };
  });
const workingWithFungibleTokens = flattenRecipes(recipes)
  .filter((i) => i.module === "Working With Fungible Tokens")
  .map((e) => {
    return { title: e.title, path: paths.recipe(e.slug) };
  });
const gettingStartedWithAccessManagement = flattenRecipes(recipes)
  .filter((i) => i.module === "Getting Started With Access Management")
  .map((e) => {
    return { title: e.title, path: paths.recipe(e.slug) };
  });
const nftStorefrontEssentials =  flattenRecipes(recipes)
.filter((i) => i.module === "NFT Storefront Essentials")
.map((e) => {
  return { title: e.title, path: paths.recipe(e.slug) };
});

export const navConfig = [
  {
    title: "Recipes",
    path: "/recipes",
    icon: <Iconify icon="mingcute:paper-line" />,
    children: [
      {
        subheader: "NFT Fundamentals",
        slug: "nft-fundamentals",
        items: nftFundamentals,
        position: "1"
      },
      {
        subheader: "Working With Fungible Tokens",
        slug: "working-with-fungible-tokens",
        items: workingWithFungibleTokens,
        position: "2"
      },
      {
        subheader: "Getting Started With Access Management",
        slug: "getting-started-with-access-management",
        items: gettingStartedWithAccessManagement,
        position: "3"
      },
      {
        subheader: "NFT Storefront Essentials",
        slug: "nft-storefront-essentials",
        items: nftStorefrontEssentials,
        position: "4"
      },
    ],
  },
];
