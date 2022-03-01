export const contract = `pub contract KittyItems: NonFungibleToken {
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




//Rest of KittyItems Contract code below
}
`