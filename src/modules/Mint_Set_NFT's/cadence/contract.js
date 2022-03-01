export const contract = `//more code from series resource above...

pub fun mintSetAndSeriesNFT(
    recipient: &{NonFungibleToken.CollectionPublic},
    tokenId: UInt64,
    setId: UInt32) {
    
    pre {
        self.numberEditionsMintedPerSet[setId] != nil: "The Set does not exist."
        self.numberEditionsMintedPerSet[setId]! < SetAndSeries.getSetMaxEditions(setId: setId)!:
            "Set has reached maximum NFT edition capacity."
    }

    // Gets the number of editions that have been minted so far in 
    // this set
    let editionNum: UInt32 = self.numberEditionsMintedPerSet[setId]! + (1 as UInt32)

    // deposit it in the recipient's account using their reference
    recipient.deposit(token: <-create SetAndSeries.NFT(
        tokenId: tokenId,
        setId: setId,
        editionNum: editionNum
    ))

    // Increment the count of global NFTs 
    SetAndSeries.totalSupply = SetAndSeries.totalSupply + (1 as UInt64)

    // Update the count of Editions minted in the set
    self.numberEditionsMintedPerSet[setId] = editionNum
}

//more code from series resource below...
`