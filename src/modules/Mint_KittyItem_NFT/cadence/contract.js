export const contract = `pub contract KittyItems: NonFungibleToken {
    ....
    //Rest of KittyItems Contract code above
    
    pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {
    
        pub let id: UInt64
    
        // The token kind (e.g. Fishbowl)
        pub let kind: Kind
    
        // The token rarity (e.g. Gold)
        pub let rarity: Rarity
    
        init(id: UInt64, kind: Kind, rarity: Rarity) {
            self.id = id
            self.kind = kind
            self.rarity = rarity
        }
    
        pub fun name(): String {
            return KittyItems.rarityToString(self.rarity)
                .concat(" ")
                .concat(KittyItems.kindToString(self.kind))
        }
    
        pub fun description(): String {
            return "A "
                .concat(KittyItems.rarityToString(self.rarity))
                .concat(" ")
                .concat(KittyItems.kindToString(self.kind))
                .concat(" with serial number ")
                .concat(self.id.toString())
        }
    
        pub fun imageCID(): String {
            return KittyItems.images[self.kind]![self.rarity]!
        }
    
        pub fun getViews(): [Type] {
            return [
                Type<MetadataViews.Display>()
            ]
        }
    
        pub fun resolveView(_ view: Type): AnyStruct? {
            switch view {
                case Type<MetadataViews.Display>():
                    return MetadataViews.Display(
                        name: self.name(),
                        description: self.description(),
                        thumbnail: MetadataViews.IPFSFile(
                            cid: self.imageCID(), 
                            path: "sm.png"
                        )
                    )
            }
    
            return nil
        }
    }
    
    .....
    
    pub resource NFTMinter {
    
        // mintNFT
        // Mints a new NFT with a new ID
        // and deposit it in the recipients collection using their collection reference
        //
        pub fun mintNFT(
            recipient: &{NonFungibleToken.CollectionPublic}, 
            kind: Kind, 
            rarity: Rarity,
        ) {
            // deposit it in the recipient's account using their reference
            recipient.deposit(token: <-create KittyItems.NFT(id: KittyItems.totalSupply, kind: kind, rarity: rarity))
    
            emit Minted(
                id: KittyItems.totalSupply,
                kind: kind.rawValue,
                rarity: rarity.rawValue,
            )
    
            KittyItems.totalSupply = KittyItems.totalSupply + (1 as UInt64)
        }
    }
    ...
    
    init(){
    ...
    
    // Create a Minter resource and save it to storage
            let minter <- create NFTMinter()
            self.account.save(<-minter, to: self.MinterStoragePath)
    
    ...
    
    }
    
    }
`