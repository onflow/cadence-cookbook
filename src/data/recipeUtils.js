import * as fs from "node:fs";
import { recipes } from "./recipes";

const recipesByModule = recipes;

export function fetchExternalRecipe(recipe) {
  const contractPath = recipe.smartContractCode;
  const transactionPath = recipe.transactionCode;
  const testPath = recipe.testCasesCode;

  const contractExplanationPath = recipe.smartContractExplanation;
  const transactionExplanationPath = recipe.transactionExplanation;
  const testExplanationPath = recipe.testCasesExplanation;

  const contractCode =
    contractPath !== undefined && contractPath !== null
      ? fs.readFileSync(`./src/data/recipes/${contractPath}`, "utf8")
      : null;
  const transactionCode =
    transactionPath !== undefined && transactionPath !== null
      ? fs.readFileSync(`./src/data/recipes/${transactionPath}`, "utf8")
      : null;
  const testCasesCode =
    testPath !== undefined && testPath !== null
      ? fs.readFileSync(`./src/data/recipes/${testPath}`, "utf8")
      : null;

  const contractExplanation =
    contractExplanationPath !== undefined && contractExplanationPath !== null
      ? fs.readFileSync(`./src/data/recipes/${contractExplanationPath}`, "utf8")
      : null;
  const transactionExplanation =
    transactionExplanationPath !== undefined &&
    transactionExplanationPath !== null
      ? fs.readFileSync(
          `./src/data/recipes/${transactionExplanationPath}`,
          "utf8"
        )
      : null;
  const testCasesExplanation =
    testExplanationPath !== undefined && testExplanationPath !== null
      ? fs.readFileSync(`./src/data/recipes/${testExplanationPath}`, "utf8")
      : null;

  recipe.smartContractCode = contractCode;
  recipe.transactionCode = transactionCode;
  recipe.testCasesCode = testCasesCode;

  recipe.smartContractExplanation = contractExplanation;
  recipe.transactionExplanation = transactionExplanation;
  recipe.testCasesExplanation = testCasesExplanation;

  return recipe;
}


const flattenRecipes = arr => arr.flatMap(({ recipes, ...rest }) => 
recipes.map(o => ({
    ...rest,
    ...o
  }))
)

export async function getAllRecipes() {

  const recipes = flattenRecipes(recipesByModule);

  return recipes;
}

export async function getSingleRecipe(slug) {

  const recipes = flattenRecipes(recipesByModule);

  return recipes.filter((i) => i.slug === slug)[0];
}

export async function getRecipesByParentModule(module) {

  const recipes = flattenRecipes(recipesByModule);

  return recipes.filter((i) => i.module === module);
}

export async function getRelatedRecipes(module, slug) {
  // Implement a filter based on recipe tags or module

  const recipes = flattenRecipes(recipesByModule);

  return recipes.filter((i) => i.module === module && i.slug !== slug);
}

export async function getNextRecipe(module, slug) {
  
  const recipes = flattenRecipes(recipesByModule).filter((i) => i.module === module);

  const thisRecipeIndex = recipes.map(function(e) { return e.slug; }).indexOf(slug);

  const nextRecipe = (recipes.length > thisRecipeIndex+1) ? recipes[thisRecipeIndex+1] : null

  return nextRecipe;
}
