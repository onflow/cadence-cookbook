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
    path: "/",
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: "NFT Fundamentals",
        items: nftFundamentals.slice(0, 5),
      },
      {
        subheader: "Working With Fungible Tokens",
        items: workingWithFungibleTokens.slice(0, 5),
      },
      {
        subheader: "Getting Started With Access Management",
        items: gettingStartedWithAccessManagement.slice(0, 5),
      },
      {
        subheader: "NFT Storefront Essentials",
        items: nftStorefrontEssentials.slice(0, 5),
      },
    ],
  },
];
