export const contractExplain = `The following functions are to be included in your NFT resource when creating a contract.

getViews tells someone all the views your NFT has, while resolveView returns the metadata from that view.

In your Collection resource you will have the borrowViewResolver function that is available in the Metadata Contract. You will need to import the MetadataViews.ResolverCollection interface into your collection.

This returns the capability for the NFT to use the above functions.

`