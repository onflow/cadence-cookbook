export const contract = `pub resource NFTMinter {

    // mintNFT mints a new NFT with a new ID
    // and deposit it in the recipients collection using their collection reference
    pub fun mintNFT(
        recipient: &{NonFungibleToken.CollectionPublic},
        name: String,
        description: String,
        thumbnail: String,
        power: String,
        will: String,
        determination: String
    ) {
        // create a new NFT
        var newNFT <- create NFT(
            id: NewExampleNFT.totalSupply,
            name: name,
            description: description,
            thumbnail: thumbnail,
            power: power,
            will: will,
            determination: determination
        )

        // deposit it in the recipient's account using their reference
        recipient.deposit(token: <-newNFT)

        NewExampleNFT.totalSupply = NewExampleNFT.totalSupply + (1 as UInt64)
    }
}
`