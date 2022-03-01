export const contract = `//Here is where the rest of your NFT resource code will go...
// Below is the metadata functions to include in your NFT resource...
// Checkout the NFT Metadata example to see it all put together

pub fun getViews(): [Type] {
    return [
        Type<MetadataViews.Display>()
    ]
}

pub fun resolveView(_ view: Type): AnyStruct? {
    switch view {
        case Type<MetadataViews.Display>():
            return MetadataViews.Display(
                name: self.name,
                description: self.description,
                thumbnail: self.thumbnail
            )
    }

    return nil
}

// below is where you will have your metadata in your NFT initialzied
.....

//the following code is in your collections resource

pub fun borrowViewResolver(id: UInt64): &AnyResource{MetadataViews.Resolver} {
    let nft = &self.ownedNFTs[id] as auth &NonFungibleToken.NFT
    let exampleNFT = nft as! &NewExampleNFT.NFT
    return exampleNFT as &AnyResource{MetadataViews.Resolver}
}

`