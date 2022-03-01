export const transaction = `
import NFTStorefront from 0x03

// This transaction sets up account 0x01 for the marketplace tutorial
// by publishing a Vault reference and creating an empty NFT Collection.
transaction {
  prepare(acct: AuthAccount) {
    
    acct.save<@NFTStorefront.Storefront>(<- NFTStorefront.createStorefront() , to: NFTStorefront.StorefrontStoragePath)

    log("storefront created")
  }
}


`