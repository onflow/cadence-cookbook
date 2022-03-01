export const transaction = `import NonFungibleToken from 0x03
import NewExampleNFT from 0x02
import MetadataViews from 0x01

// This transaction is what an account would run
// to set itself up to receive NFTs

transaction {

    prepare(signer: AuthAccount) {
        // Return early if the account already has a collection
        if signer.borrow<&NewExampleNFT.Collection>(from: NewExampleNFT.CollectionStoragePath) != nil {
            return
        }

        // Create a new empty collection
        let collection <- NewExampleNFT.createEmptyCollection()

        // save it to the account
        signer.save(<-collection, to: NewExampleNFT.CollectionStoragePath)

        // create a public capability for the collection
        signer.link<&{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(
            NewExampleNFT.CollectionPublicPath,
            target: NewExampleNFT.CollectionStoragePath
        )
    }

    execute {
      log("Setup account")
    }
}

`