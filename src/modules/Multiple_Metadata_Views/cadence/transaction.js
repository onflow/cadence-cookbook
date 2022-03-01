export const transaction = `import MetadataViews from 0x01
import NewExampleNFT from 0x02

pub fun main(): AnyStruct {
    let address: Address = 0x02
    let id: UInt64 = 0
    
    let account = getAccount(address)

    let collection = account
        .getCapability(/public/exampleNFTCollection)
        .borrow<&{MetadataViews.ResolverCollection}>()
        ?? panic("Could not borrow a reference to the collection")

    let nft = collection.borrowViewResolver(id: id)


    // Get the basic display information for this NFT
    

    let view = nft.resolveView(Type<NewExampleNFT.Traits>())
    let oview = nft.resolveView(Type<MetadataViews.Display>())

    let object = {"Traits": view, "Display": oview}

    return object
}


`