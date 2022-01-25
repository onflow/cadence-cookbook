

export const CadenceCode = [
{Code: `pub resource NFTMinter:{

    // mintNFT mints a new NFT with a new ID
    // and deposit it in the recipients collection using their collection reference
    pub fun mintNFT(
        recipient: &{NonFungibleToken.CollectionPublic},
        name: String,
        description: String,
        thumbnail: String,
    ) {

        // create a new NFT
        var newNFT <- create NFT(
            id: ExampleNFT.totalSupply,
            name: name,
            description: description,
            thumbnail: thumbnail,
        )

        // deposit it in the recipient's account using their reference
        recipient.deposit(token: <-newNFT)

        ExampleNFT.totalSupply = ExampleNFT.totalSupply + UInt64(1)
    }
}`},
{Code: `pub resource Collection: NFTReceiver {
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
}`},
{Code: `
    // creates a new empty Collection resource and returns it 
    pub fun createEmptyCollection(): @Collection {
        return <- create Collection()
    }
`},
{Code: `pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {
    pub let id: UInt64

    pub let name: String
    pub let thumbnail: String
    pub let description: String

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

    init(
        id: UInt64,
        name: String,
        description: String,
        thumbnail: String,
    ) {
        self.id = id
        self.name = name
        self.thumbnail = thumbnail
        self.description = description
    }
}
`},
{Code: `//Here is where the rest of your NFT resource code will go...
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

`},
{Code: `//Structure created so that a traits view can be displayed
pub struct Traits{
    pub let power: String
    pub let will: String
    pub let determination: String


    init(
        power: String
        will: String
        determination: String
    ){
        self.power=power
        self.will=will
        self.determination=determination
    }
}

//NFT resources
pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {
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
                    thumbnail: self.thumbnail
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

`},
{Code: `//A vault resource to be stored in an account that tracks your balance of tokens
pub resource Vault: Provider, Receiver, Balance {
        
    // keeps track of the total balance of the account's tokens
    pub var balance: UFix64

    // initialize the balance at resource creation time
    init(balance: UFix64) {
        self.balance = balance
    }

    // withdraw
    //
    // Function that takes an integer amount as an argument
    // and withdraws that amount from the Vault.
    //
    // It creates a new temporary Vault that is used to hold
    // the money that is being transferred. It returns the newly
    // created Vault to the context that called so it can be deposited
    // elsewhere.
    //
    pub fun withdraw(amount: UFix64): @Vault {
        self.balance = self.balance - amount
        return <-create Vault(balance: amount)
    }
    
    // deposit
    //
    // Function that takes a Vault object as an argument and adds
    // its balance to the balance of the owners Vault.
    //
    // It is allowed to destroy the sent Vault because the Vault
    // was a temporary holder of the tokens. The Vault's balance has
    // been consumed and therefore can be destroyed.
    pub fun deposit(from: @Vault) {
        self.balance = self.balance + from.balance
        destroy from
    }
}
`},
{Code: `
pub resource interface Provider {

    // withdraw
    //
    // Function that subtracts tokens from the owner's Vault
    // and returns a Vault resource (@Vault) with the removed tokens.
    //
    // The function's access level is public, but this isn't a problem
    // because even the public functions are not fully public at first.
    // anyone in the network can call them, but only if the owner grants
    // them access by publishing a resource that exposes the withdraw
    // function.
    //
    pub fun withdraw(amount: UFix64): @Vault {
        post {
            // 'result' refers to the return value of the function
            result.balance == UFix64(amount):
                "Withdrawal amount must be the same as the balance of the withdrawn Vault"
        }
    }
}
`},
{Code: `//creating an empty vault
pub fun createEmptyVault(): @Vault {
    return <-create Vault(balance: 0.0)
}
`},
{Code: `// VaultMinter
//
// Resource object that an admin can control to mint new tokens
pub resource VaultMinter {

    // Function that mints new tokens and deposits into an account's vault
    // using their 'Receiver' reference.
    // We say '&AnyResource{Receiver}' to say that the recipient can be any resource
    // as long as it implements the Receiver interface
    pub fun mintTokens(amount: UFix64, recipient: Capability<&AnyResource{Receiver}>) {
        let recipientRef = recipient.borrow()
            ?? panic("Could not borrow a receiver reference to the vault")

        ExampleToken.totalSupply = ExampleToken.totalSupply + UFix64(amount)
        recipientRef.deposit(from: <-create Vault(balance: amount))
    }
}
`},
{Code: `// the below is a series structure that lays out how a series is to be created
//
// Variable size dictionary of SeriesData structs
access(self) var seriesData: {UInt32: SeriesData}

// Variable size dictionary of Series resources
access(self) var series: @{UInt32: Series}
....
pub struct SeriesData {

    // Unique ID for the Series
    pub let seriesId: UInt32

    // Dictionary of metadata key value pairs
    access(self) var metadata: {String: String}

    init(
        seriesId: UInt32,
        metadata: {String: String}) {
        self.seriesId = seriesId
        self.metadata = metadata

        emit SeriesCreated(seriesId: self.seriesId)
    }

    pub fun getMetadata(): {String: String} {
        return self.metadata
    }
}
....
//
//
// Resource that allows an admin to mint new NFTs
    //
	pub resource Series {

        // Unique ID for the Series
        pub let seriesId: UInt32

        // Array of NFTSets that belong to this Series
        access(self) var setIds: [UInt32]

        // Series sealed state
        pub var seriesSealedState: Bool;

        // Set sealed state
        access(self) var setSealedState: {UInt32: Bool};

        // Current number of editions minted per Set
        access(self) var numberEditionsMintedPerSet: {UInt32: UInt32}

        init(
            seriesId: UInt32,
            metadata: {String: String}) {

            self.seriesId = seriesId
            self.seriesSealedState = false
            self.numberEditionsMintedPerSet = {}
            self.setIds = []
            self.setSealedState = {}

            SetAndSeries.seriesData[seriesId] = SeriesData(
                    seriesId: seriesId,
                    metadata: metadata
            )      
        }

        pub fun addNftSet(
            setId: UInt32,
            maxEditions: UInt32,
            ipfsMetadataHashes: {UInt32: String},
            metadata: {String: String}) {
            pre {
                self.setIds.contains(setId) == false: "The Set has already been added to the Series."
            }

            // Create the new Set struct
            var newNFTSet = NFTSetData(
                setId: setId,
                seriesId: self.seriesId,
                maxEditions: maxEditions,
                ipfsMetadataHashes: ipfsMetadataHashes,
                metadata: metadata
            )

            // Add the NFTSet to the array of Sets
            self.setIds.append(setId)

            // Initialize the NFT edition count to zero
            self.numberEditionsMintedPerSet[setId] = 0

            // Store it in the sets mapping field
            SetAndSeries.setData[setId] = newNFTSet

            emit SetCreated(seriesId: self.seriesId, setId: setId)
        }


.....

		// mintSetAndSeries
        // Mints a new NFT with a new ID
		// and deposits it in the recipients collection using their collection reference
        //
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
....

// Admin is a special authorization resource that 
// allows the owner to perform important NFT 
// functions
//
pub resource Admin {

    pub fun addSeries(seriesId: UInt32, metadata: {String: String}) {
        pre {
            SetAndSeries.series[seriesId] == nil:
                "Cannot add Series: The Series already exists"
        }

        // Create the new Series
        var newSeries <- create Series(
            seriesId: seriesId,
            metadata: metadata
        )

        // Add the new Series resource to the Series dictionary in the contract
        SetAndSeries.series[seriesId] <-! newSeries
    }

    pub fun borrowSeries(seriesId: UInt32): &Series  {
        pre {
            SetAndSeries.series[seriesId] != nil:
                "Cannot borrow Series: The Series does not exist"
        }

        // Get a reference to the Series and return it
        return &SetAndSeries.series[seriesId] as &Series
    }

    pub fun createNewAdmin(): @Admin {
        return <-create Admin()
    }

}

`},
{Code: `// Variable size dictionary of SetData structs
access(self) var setData: {UInt32: NFTSetData}

pub struct NFTSetData {

    // Unique ID for the Set
    pub let setId: UInt32

    // Series ID the Set belongs to
    pub let seriesId: UInt32

    // Maximum number of editions that can be minted in this Set
    pub let maxEditions: UInt32
              
    // The JSON metadata for each NFT edition can be stored off-chain on IPFS.
    // This is an optional dictionary of IPFS hashes, which will allow marketplaces
    // to pull the metadata for each NFT edition
    access(self) var ipfsMetadataHashes: {UInt32: String}

    // Set level metadata
    // Dictionary of metadata key value pairs
    access(self) var metadata: {String: String}
    
    init(
        setId: UInt32,
        seriesId: UInt32,
        maxEditions: UInt32,
        ipfsMetadataHashes: {UInt32: String},
        metadata: {String: String}) {

        self.setId = setId
        self.seriesId = seriesId
        self.maxEditions = maxEditions
        self.metadata = metadata
        self.ipfsMetadataHashes = ipfsMetadataHashes

        emit SetCreated(seriesId: self.seriesId, setId: self.setId)
    }

    pub fun getIpfsMetadataHash(editionNum: UInt32): String? {
        return self.ipfsMetadataHashes[editionNum]
    }

    pub fun getMetadata(): {String: String} {
        return self.metadata
    }

    pub fun getMetadataField(field: String): String? {
        return self.metadata[field]
    }
}

....

// Resource that allows an admin to mint new NFTs
//
pub resource Series {

    // Unique ID for the Series
    pub let seriesId: UInt32

    // Array of NFTSets that belong to this Series
    access(self) var setIds: [UInt32]

    // Series sealed state
    pub var seriesSealedState: Bool;

    // Set sealed state
    access(self) var setSealedState: {UInt32: Bool};

    // Current number of editions minted per Set
    access(self) var numberEditionsMintedPerSet: {UInt32: UInt32}

    init(
        seriesId: UInt32,
        metadata: {String: String}) {

        self.seriesId = seriesId
        self.seriesSealedState = false
        self.numberEditionsMintedPerSet = {}
        self.setIds = []
        self.setSealedState = {}

        SetAndSeries.seriesData[seriesId] = SeriesData(
                seriesId: seriesId,
                metadata: metadata
        )      
    }

    pub fun addNftSet(
        setId: UInt32,
        maxEditions: UInt32,
        ipfsMetadataHashes: {UInt32: String},
        metadata: {String: String}) {
        pre {
            self.setIds.contains(setId) == false: "The Set has already been added to the Series."
        }

        // Create the new Set struct
        var newNFTSet = NFTSetData(
            setId: setId,
            seriesId: self.seriesId,
            maxEditions: maxEditions,
            ipfsMetadataHashes: ipfsMetadataHashes,
            metadata: metadata
        )

        // Add the NFTSet to the array of Sets
        self.setIds.append(setId)

        // Initialize the NFT edition count to zero
        self.numberEditionsMintedPerSet[setId] = 0

        // Store it in the sets mapping field
        SetAndSeries.setData[setId] = newNFTSet

        emit SetCreated(seriesId: self.seriesId, setId: setId)
    }
....
//rest of code below

}
`},
{Code: `//more code from series resource above...

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
`},
{Code: `//above is more code from the SetAndSeries Contract...

pub resource Admin {

    pub fun addSeries(seriesId: UInt32, metadata: {String: String}) {
        pre {
            SetAndSeries.series[seriesId] == nil:
                "Cannot add Series: The Series already exists"
        }

        // Create the new Series
        var newSeries <- create Series(
            seriesId: seriesId,
            metadata: metadata
        )

        // Add the new Series resource to the Series dictionary in the contract
        SetAndSeries.series[seriesId] <-! newSeries
    }

    pub fun borrowSeries(seriesId: UInt32): &Series  {
        pre {
            SetAndSeries.series[seriesId] != nil:
                "Cannot borrow Series: The Series does not exist"
        }

        // Get a reference to the Series and return it
        return &SetAndSeries.series[seriesId] as &Series
    }

    pub fun createNewAdmin(): @Admin {
        return <-create Admin()
    }

}

//below is more from the SetAndSeries Contract


.....
//the following code is used in init() at the end of the contract

// Put Admin in storage
self.account.save(<-create Admin(), to: self.AdminStoragePath)

self.account.link<&SetAndSeries.Admin>(
    self.AdminPrivatePath,
    target: self.AdminStoragePath
) ?? panic("Could not get a capability to the admin")
`},
{Code: `
// Admin is a special authorization resource that 
// allows the owner to perform important NFT 
// functions
//
pub resource Admin {
    
.....

    pub fun createNewAdmin(): @Admin {
        return <-create Admin()
    }

}
`},
{Code: ``},
]