import * as fs from "node:fs";
import { createNFTListing } from "./recipes/createNFTListing";
import { sampleRecipe } from "./recipes/sample-recipe/sample-recipe";
import { test1 } from "./recipes/test1";
import { test2 } from "./recipes/test2";
import { test3 } from "./recipes/test3";
import { test4 } from "./recipes/test4";

function fetchExternalRecipe(recipe) {
  const contractPath = recipe.smartContractCode;
  const transactionPath = recipe.transactionCode;
  const testPath = recipe.testCasesCode;

  const contractCode = fs.readFileSync(
    `./src/data/recipes/${contractPath}`,
    "utf8"
  );
  const transactionCode = fs.readFileSync(
    `./src/data/recipes/${transactionPath}`,
    "utf8"
  );
  const testCasesCode = fs.readFileSync(`./src/data/recipes/${testPath}`, "utf8");

  recipe.smartContractCode = contractCode;
  recipe.transactionCode = transactionCode;
  recipe.testCasesCode = testCasesCode;

  return recipe;
}

const recipes = [
  createNFTListing,
  fetchExternalRecipe(sampleRecipe), // recipe sourced from Git submodule
  test1,
  test2,
  test3,
  test4,
];

export async function getAllRecipes() {
  return recipes;
}

export async function getSingleRecipe(slug) {
  return recipes.filter((i) => i.slug === slug)[0];
}

export async function getRecipesByParentModule(module) {
  return recipes.filter((i) => i.module === module);
}

export async function getRelatedRecipes(slug) {
  // Implement a filter based on recipe tags or module
  return recipes;
}
