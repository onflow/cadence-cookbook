import * as fs from "node:fs";
import { mintNFT } from "./recipes/mint-nft";
import { collectionForHoldingNfts } from "./recipes/collection-for-holding-nfts";
import { creatingCollectionForAccount } from "./recipes/creating-collection-for-account";
import { nftWithMetdata } from "./recipes/nft-with-metadata";
import { metadataViews } from "./recipes/metadata-views";
import { multipleMetadataViews } from "./recipes/multiple-metadata-views";
import { tokenVault } from "./recipes/token-vault";
import { withdrawingTokens } from "./recipes/withdrawing-tokens";
import { creatingAVault } from "./recipes/creating-a-vault";
import { vaultMinter } from "./recipes/vault-minter";
import { implementingSeriesForNFTs } from "./recipes/implementing-series-for-nfts";
import { creatingASetInSeries } from "./recipes/creating-a-set-in-series";
import { mintingNftsInASet } from "./recipes/minting-nfts-in-a-set";
import { adminResource } from "./recipes/admin-resource";
import { addAdminResourceToAccount } from "./recipes/add-admin-resource-to-account";
import { createATopShotPlay } from "./recipes/create-a-topshot-play";
import { createATopShotSet } from "./recipes/create-a-topshot-set";
import { addAPlayToTopShotSet } from "./recipes/add-a-play-to-topshot-set";
import { mintingAMomentInTopShotSet } from "./recipes/minting-a-moment-in-topshot-set";
import { createAMarketplace } from "./recipes/create-a-marketplace";
import { createAnNFTListing } from "./recipes/create-an-nft-listing";
import { purchaseNftOnMarketplace } from "./recipes/purchase-nft-on-marketplace";

function fetchExternalRecipe(recipe) {
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

const recipes = [
  fetchExternalRecipe(mintNFT),
  fetchExternalRecipe(collectionForHoldingNfts),
  fetchExternalRecipe(creatingCollectionForAccount),
  fetchExternalRecipe(nftWithMetdata),
  fetchExternalRecipe(metadataViews),
  fetchExternalRecipe(multipleMetadataViews),
  fetchExternalRecipe(tokenVault),
  fetchExternalRecipe(withdrawingTokens),
  fetchExternalRecipe(creatingAVault),
  fetchExternalRecipe(vaultMinter),
  fetchExternalRecipe(implementingSeriesForNFTs),
  fetchExternalRecipe(creatingASetInSeries),
  fetchExternalRecipe(mintingNftsInASet),
  fetchExternalRecipe(adminResource),
  fetchExternalRecipe(addAdminResourceToAccount),
  fetchExternalRecipe(createATopShotPlay),
  fetchExternalRecipe(createATopShotSet),
  fetchExternalRecipe(addAPlayToTopShotSet),
  fetchExternalRecipe(mintingAMomentInTopShotSet),
  fetchExternalRecipe(createAMarketplace),
  fetchExternalRecipe(createAnNFTListing),
  fetchExternalRecipe(purchaseNftOnMarketplace),
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
