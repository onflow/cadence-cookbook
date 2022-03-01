export const contract = `pub resource Collection: NFTReceiver {
    // dictionary of NFT conforming tokens
    // NFT is a resource type with an UInt64 ID field
    pub var ownedNFTs: @{UInt64: NFT}

    // Initialize the NFTs field to an empty collection
    init () {
        self.ownedNFTs <- {}
    }

    // withdraw 
    //
    // Function that removes an NFT from the collection 
    // and moves it to the calling context
    pub fun withdraw(withdrawID: UInt64): @NFT {
        // If the NFT isn't found, the transaction panics and reverts
        let token <- self.ownedNFTs.remove(key: withdrawID)!

        return <-token
    }

    // deposit 
    //
    // Function that takes a NFT as an argument and 
    // adds it to the collections dictionary
    pub fun deposit(token: @NFT) {
        // add the new token to the dictionary with a force assignment
        // if there is already a value at that key, it will fail and revert
        self.ownedNFTs[token.id] <-! token
    }

    // idExists checks to see if a NFT 
    // with the given ID exists in the collection
    pub fun idExists(id: UInt64): Bool {
        return self.ownedNFTs[id] != nil
    }

    // getIDs returns an array of the IDs that are in the collection
    pub fun getIDs(): [UInt64] {
        return self.ownedNFTs.keys
    }

    destroy() {
        destroy self.ownedNFTs
    }
}
`