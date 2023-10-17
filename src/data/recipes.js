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

// Recipes featured on the Cadence Cookbook homepage
export const featuredRecipes = [mintNFT, tokenVault, adminResource, createAMarketplace]

export const recipes = [
    {
      module: "NFT Fundamentals",
      fallBackImage:  "", // Module cover image if none provided
      recipes: [
        mintNFT,
        collectionForHoldingNfts,
        creatingCollectionForAccount,
        nftWithMetdata,
        metadataViews,
        multipleMetadataViews,
        implementingSeriesForNFTs,
        creatingASetInSeries,
        mintingNftsInASet,
        createATopShotPlay,
        createATopShotSet,
        addAPlayToTopShotSet,
        mintingAMomentInTopShotSet,
      ]
    },
    {
      module: "Working With Fungible Tokens",
      fallBackImage:  "", // Module cover image if none provided
      recipes: [
        tokenVault,
        withdrawingTokens,
        creatingAVault,
        vaultMinter,
      ]
    },
    {
      module: "Getting Started With Access Management",
      fallBackImage:  "", // Module cover image if none provided
      recipes: [
        adminResource,
        addAdminResourceToAccount,
      ]
    },
    {
      module: "NFT Storefront Essentials",
      fallBackImage:  "", // Module cover image if none provided
      recipes: [
        createAMarketplace,
        createAnNFTListing,
        purchaseNftOnMarketplace,
      ]
    }
  ]
  