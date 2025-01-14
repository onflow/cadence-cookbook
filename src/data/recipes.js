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
import { adminResource } from "./recipes/admin-resource";
import { addAdminResourceToAccount } from "./recipes/add-admin-resource-to-account";
import { createAMarketplace } from "./recipes/create-a-marketplace";
import { createAnNFTListing } from "./recipes/create-an-nft-listing";
import { purchaseNftOnMarketplace } from "./recipes/purchase-nft-on-marketplace";

// Recipes featured on the Cadence Cookbook homepage
export const featuredRecipes = [
  mintNFT,
  tokenVault,
  adminResource,
  createAMarketplace,
];

export const recipes = [
  {
    module: "NFT Fundamentals",
    slug: "nft-fundamentals",
    fallBackImage: "", // Module cover image if none provided
    recipes: [
      mintNFT,
      collectionForHoldingNfts,
      creatingCollectionForAccount,
      nftWithMetdata,
      metadataViews,
      multipleMetadataViews
    ],
  },
  {
    module: "Working With Fungible Tokens",
    slug: "working-with-fungible-tokens",
    fallBackImage: "", // Module cover image if none provided
    recipes: [tokenVault, withdrawingTokens, creatingAVault, vaultMinter],
  },
  {
    module: "Getting Started With Access Management",
    slug: "getting-started-with-access-management",
    fallBackImage: "", // Module cover image if none provided
    recipes: [adminResource, addAdminResourceToAccount],
  },
  {
    module: "NFT Storefront Essentials",
    slug: "nft-storefront-essentials",
    fallBackImage: "", // Module cover image if none provided
    recipes: [createAMarketplace, createAnNFTListing, purchaseNftOnMarketplace],
  },
];
