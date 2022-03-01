export const contract = `pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {
    pub let id: UInt64

    pub let name: String
    pub let thumbnail: String
    pub let description: String
    pub let power: String
    pub let will: String
    pub let determination: String


    pub fun getViews(): [Type] {
        return [
            Type<MetadataViews.Display>(),
            Type<NewExampleNFT.Traits>()
        ]
    }

    pub fun resolveView(_ view: Type): AnyStruct? {
        switch view {
            case Type<MetadataViews.Display>():
                return MetadataViews.Display(
                    name: self.name,
                    description: self.description,
                    thumbnail: MetadataViews.HTTPFile(
                        url: self.thumbnail
                    )
                )
            case Type<NewExampleNFT.Traits>():
                return NewExampleNFT.Traits(
                    power: self.power,
                    will: self.will,
                    determination: self.determination
                )
        }

        return nil
    }

    init(
        id: UInt64,
        name: String,
        description: String,
        thumbnail: String,
        power: String,
        will: String,
        determination: String
    ) {
        self.id = id
        self.name = name
        self.thumbnail = thumbnail
        self.description = description
        self.power = power
        self.will = will
        self.determination= determination
    }
}

`