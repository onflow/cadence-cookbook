

export const CadenceCode = [
{Code: `pub resource NFTMinter {

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
{Code: `//TopShot Contract Code Above
...

access(self) var playDatas: {UInt32: Play}

pub var nextPlayID: UInt32

.....

// Play is a Struct that holds metadata associated 
// with a specific NBA play, like the legendary moment when 
// Ray Allen hit the 3 to tie the Heat and Spurs in the 2013 finals game 6
// or when Lance Stephenson blew in the ear of Lebron James.
//
// Moment NFTs will all reference a single play as the owner of
// its metadata. The plays are publicly accessible, so anyone can
// read the metadata associated with a specific play ID
//
pub struct Play {

    // The unique ID for the Play
    pub let playID: UInt32

    // Stores all the metadata about the play as a string mapping
    // This is not the long term way NFT metadata will be stored. It's a temporary
    // construct while we figure out a better way to do metadata.
    //
    pub let metadata: {String: String}

    init(metadata: {String: String}) {
        pre {
            metadata.length != 0: "New Play metadata cannot be empty"
        }
        self.playID = TopShot.nextPlayID
        self.metadata = metadata
    }
}

.....

pub resource Admin {

    // createPlay creates a new Play struct 
    // and stores it in the Plays dictionary in the TopShot smart contract
    //
    // Parameters: metadata: A dictionary mapping metadata titles to their data
    //                       example: {"Player Name": "Kevin Durant", "Height": "7 feet"}
    //                               (because we all know Kevin Durant is not 6'9")
    //
    // Returns: the ID of the new Play object
    //
    pub fun createPlay(metadata: {String: String}): UInt32 {
        // Create the new Play
        var newPlay = Play(metadata: metadata)
        let newID = newPlay.playID

        // Increment the ID so that it isn't used again
        TopShot.nextPlayID = TopShot.nextPlayID + UInt32(1)

        emit PlayCreated(id: newPlay.playID, metadata: metadata)

        // Store it in the contract storage
        TopShot.playDatas[newID] = newPlay

        return newID
    }
....
}
//rest of TopShot contract below
`},
{Code: `//TopShot Contract Code Above
...
// Variable size dictionary of SetData structs
access(self) var setDatas: {UInt32: SetData}

// Variable size dictionary of Set resources
access(self) var sets: @{UInt32: Set}

// The ID that is used to create Sets. Every time a Set is created
// setID is assigned to the new set's ID and then is incremented by 1.
pub var nextSetID: UInt32

....

// A Set is a grouping of Plays that have occured in the real world
// that make up a related group of collectibles, like sets of baseball
// or Magic cards. A Play can exist in multiple different sets.
// 
// SetData is a struct that is stored in a field of the contract.
// Anyone can query the constant information
// about a set by calling various getters located 
// at the end of the contract. Only the admin has the ability 
// to modify any data in the private Set resource.
//
pub struct SetData {

    // Unique ID for the Set
    pub let setID: UInt32

    // Name of the Set
    // ex. "Times when the Toronto Raptors choked in the playoffs"
    pub let name: String

    // Series that this Set belongs to.
    // Series is a concept that indicates a group of Sets through time.
    // Many Sets can exist at a time, but only one series.
    pub let series: UInt32

    init(name: String) {
        pre {
            name.length > 0: "New Set name cannot be empty"
        }
        self.setID = TopShot.nextSetID
        self.name = name
        self.series = TopShot.currentSeries
    }
}

....

pub resource Set {

    // Unique ID for the set
    pub let setID: UInt32

    // Array of plays that are a part of this set.
    // When a play is added to the set, its ID gets appended here.
    // The ID does not get removed from this array when a Play is retired.
    access(contract) var plays: [UInt32]

    // Map of Play IDs that Indicates if a Play in this Set can be minted.
    // When a Play is added to a Set, it is mapped to false (not retired).
    // When a Play is retired, this is set to true and cannot be changed.
    access(contract) var retired: {UInt32: Bool}

    // Indicates if the Set is currently locked.
    // When a Set is created, it is unlocked 
    // and Plays are allowed to be added to it.
    // When a set is locked, Plays cannot be added.
    // A Set can never be changed from locked to unlocked,
    // the decision to lock a Set it is final.
    // If a Set is locked, Plays cannot be added, but
    // Moments can still be minted from Plays
    // that exist in the Set.
    pub var locked: Bool

    // Mapping of Play IDs that indicates the number of Moments 
    // that have been minted for specific Plays in this Set.
    // When a Moment is minted, this value is stored in the Moment to
    // show its place in the Set, eg. 13 of 60.
    access(contract) var numberMintedPerPlay: {UInt32: UInt32}

    init(name: String) {
        self.setID = TopShot.nextSetID
        self.plays = []
        self.retired = {}
        self.locked = false
        self.numberMintedPerPlay = {}

        // Create a new SetData for this Set and store it in contract storage
        TopShot.setDatas[self.setID] = SetData(name: name)
    }

    // addPlay adds a play to the set
    //
    // Parameters: playID: The ID of the Play that is being added
    //
    // Pre-Conditions:
    // The Play needs to be an existing play
    // The Set needs to be not locked
    // The Play can't have already been added to the Set
    //
    pub fun addPlay(playID: UInt32) {
        pre {
            TopShot.playDatas[playID] != nil: "Cannot add the Play to Set: Play doesn't exist."
            !self.locked: "Cannot add the play to the Set after the set has been locked."
            self.numberMintedPerPlay[playID] == nil: "The play has already beed added to the set."
        }

        // Add the Play to the array of Plays
        self.plays.append(playID)

        // Open the Play up for minting
        self.retired[playID] = false

        // Initialize the Moment count to zero
        self.numberMintedPerPlay[playID] = 0

        emit PlayAddedToSet(setID: self.setID, playID: playID)
    }

    // addPlays adds multiple Plays to the Set
    //
    // Parameters: playIDs: The IDs of the Plays that are being added
    //                      as an array
    //
    pub fun addPlays(playIDs: [UInt32]) {
        for play in playIDs {
            self.addPlay(playID: play)
        }
    }

    // retirePlay retires a Play from the Set so that it can't mint new Moments
    //
    // Parameters: playID: The ID of the Play that is being retired
    //
    // Pre-Conditions:
    // The Play is part of the Set and not retired (available for minting).
    // 
    pub fun retirePlay(playID: UInt32) {
        pre {
            self.retired[playID] != nil: "Cannot retire the Play: Play doesn't exist in this set!"
        }

        if !self.retired[playID]! {
            self.retired[playID] = true

            emit PlayRetiredFromSet(setID: self.setID, playID: playID, numMoments: self.numberMintedPerPlay[playID]!)
        }
    }

    // retireAll retires all the plays in the Set
    // Afterwards, none of the retired Plays will be able to mint new Moments
    //
    pub fun retireAll() {
        for play in self.plays {
            self.retirePlay(playID: play)
        }
    }

    // lock() locks the Set so that no more Plays can be added to it
    //
    // Pre-Conditions:
    // The Set should not be locked
    pub fun lock() {
        if !self.locked {
            self.locked = true
            emit SetLocked(setID: self.setID)
        }
    }

    // mintMoment mints a new Moment and returns the newly minted Moment
    // 
    // Parameters: playID: The ID of the Play that the Moment references
    //
    // Pre-Conditions:
    // The Play must exist in the Set and be allowed to mint new Moments
    //
    // Returns: The NFT that was minted
    // 
    pub fun mintMoment(playID: UInt32): @NFT {
        pre {
            self.retired[playID] != nil: "Cannot mint the moment: This play doesn't exist."
            !self.retired[playID]!: "Cannot mint the moment from this play: This play has been retired."
        }

        // Gets the number of Moments that have been minted for this Play
        // to use as this Moment's serial number
        let numInPlay = self.numberMintedPerPlay[playID]!

        // Mint the new moment
        let newMoment: @NFT <- create NFT(serialNumber: numInPlay + UInt32(1),
                                          playID: playID,
                                          setID: self.setID)

        // Increment the count of Moments minted for this Play
        self.numberMintedPerPlay[playID] = numInPlay + UInt32(1)

        return <-newMoment
    }

    // batchMintMoment mints an arbitrary quantity of Moments 
    // and returns them as a Collection
    //
    // Parameters: playID: the ID of the Play that the Moments are minted for
    //             quantity: The quantity of Moments to be minted
    //
    // Returns: Collection object that contains all the Moments that were minted
    //
    pub fun batchMintMoment(playID: UInt32, quantity: UInt64): @Collection {
        let newCollection <- create Collection()

        var i: UInt64 = 0
        while i < quantity {
            newCollection.deposit(token: <-self.mintMoment(playID: playID))
            i = i + UInt64(1)
        }

        return <-newCollection
    }

    pub fun getPlays(): [UInt32] {
        return self.plays
    }

    pub fun getRetired(): {UInt32: Bool} {
        return self.retired
    }

    pub fun getNumMintedPerPlay(): {UInt32: UInt32} {
        return self.numberMintedPerPlay
    }
}

....

pub resource Admin {

    ....

    // createSet creates a new Set resource and stores it
    // in the sets mapping in the TopShot contract
    //
    // Parameters: name: The name of the Set
    //
    // Returns: The ID of the created set
    pub fun createSet(name: String): UInt32 {

        // Create the new Set
        var newSet <- create Set(name: name)

        // Increment the setID so that it isn't used again
        TopShot.nextSetID = TopShot.nextSetID + UInt32(1)

        let newID = newSet.setID

        emit SetCreated(setID: newSet.setID, series: TopShot.currentSeries)

        // Store it in the sets mapping field
        TopShot.sets[newID] <-! newSet

        return newID
    }

    ....
}

// More TopShot Code below
`},
{Code: `//More TopShot Code Above

pub resource Set {

    // addPlay adds a play to the set
    //
    // Parameters: playID: The ID of the Play that is being added
    //
    // Pre-Conditions:
    // The Play needs to be an existing play
    // The Set needs to be not locked
    // The Play can't have already been added to the Set
    //
    pub fun addPlay(playID: UInt32) {
        pre {
            TopShot.playDatas[playID] != nil: "Cannot add the Play to Set: Play doesn't exist."
            !self.locked: "Cannot add the play to the Set after the set has been locked."
            self.numberMintedPerPlay[playID] == nil: "The play has already beed added to the set."
        }

        // Add the Play to the array of Plays
        self.plays.append(playID)

        // Open the Play up for minting
        self.retired[playID] = false

        // Initialize the Moment count to zero
        self.numberMintedPerPlay[playID] = 0

        emit PlayAddedToSet(setID: self.setID, playID: playID)
    }
    ....
}
//More TopShot Code Below
`},
{Code: `//More TopShot Code Above

pub resource Set {
    // mintMoment mints a new Moment and returns the newly minted Moment
    // 
    // Parameters: playID: The ID of the Play that the Moment references
    //
    // Pre-Conditions:
    // The Play must exist in the Set and be allowed to mint new Moments
    //
    // Returns: The NFT that was minted
    // 
    pub fun mintMoment(playID: UInt32): @NFT {
        pre {
            self.retired[playID] != nil: "Cannot mint the moment: This play doesn't exist."
            !self.retired[playID]!: "Cannot mint the moment from this play: This play has been retired."
        }

        // Gets the number of Moments that have been minted for this Play
        // to use as this Moment's serial number
        let numInPlay = self.numberMintedPerPlay[playID]!

        // Mint the new moment
        let newMoment: @NFT <- create NFT(serialNumber: numInPlay + UInt32(1),
                                          playID: playID,
                                          setID: self.setID)

        // Increment the count of Moments minted for this Play
        self.numberMintedPerPlay[playID] = numInPlay + UInt32(1)

        return <-newMoment
    }

    // batchMintMoment mints an arbitrary quantity of Moments 
    // and returns them as a Collection
    //
    // Parameters: playID: the ID of the Play that the Moments are minted for
    //             quantity: The quantity of Moments to be minted
    //
    // Returns: Collection object that contains all the Moments that were minted
    //
    pub fun batchMintMoment(playID: UInt32, quantity: UInt64): @Collection {
        let newCollection <- create Collection()

        var i: UInt64 = 0
        while i < quantity {
            newCollection.deposit(token: <-self.mintMoment(playID: playID))
            i = i + UInt64(1)
        }

        return <-newCollection
    }
    ....
}
....

pub struct MomentData {

    // The ID of the Set that the Moment comes from
    pub let setID: UInt32

    // The ID of the Play that the Moment references
    pub let playID: UInt32

    // The place in the edition that this Moment was minted
    // Otherwise know as the serial number
    pub let serialNumber: UInt32

    init(setID: UInt32, playID: UInt32, serialNumber: UInt32) {
        self.setID = setID
        self.playID = playID
        self.serialNumber = serialNumber
    }
}

....

// The resource that represents the Moment NFTs
//
pub resource NFT: NonFungibleToken.INFT {

    // Global unique moment ID
    pub let id: UInt64
    
    // Struct of Moment metadata
    pub let data: MomentData

    init(serialNumber: UInt32, playID: UInt32, setID: UInt32) {
        // Increment the global Moment IDs
        TopShot.totalSupply = TopShot.totalSupply + UInt64(1)

        self.id = TopShot.totalSupply

        // Set the metadata struct
        self.data = MomentData(setID: setID, playID: playID, serialNumber: serialNumber)

        emit MomentMinted(momentID: self.id, playID: playID, setID: self.data.setID, serialNumber: self.data.serialNumber)
    }

    // If the Moment is destroyed, emit an event to indicate 
    // to outside ovbservers that it has been destroyed
    destroy() {
        emit MomentDestroyed(id: self.id)
    }
}

...
//More TopShot Code below

`},
{Code: `pub contract NFTStorefront {

    .....

    // Storefront
    // A resource that allows its owner to manage a list of Listings, and anyone to interact with them
    // in order to query their details and purchase the NFTs that they represent.
    //
    pub resource Storefront : StorefrontManager, StorefrontPublic {
        // The dictionary of Listing uuids to Listing resources.
        access(self) var listings: @{UInt64: Listing}

        // insert
        // Create and publish a Listing for an NFT.
        //
         pub fun createListing(
            nftProviderCapability: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>,
            nftType: Type,
            nftID: UInt64,
            salePaymentVaultType: Type,
            saleCuts: [SaleCut]
         ): UInt64 {
            let listing <- create Listing(
                nftProviderCapability: nftProviderCapability,
                nftType: nftType,
                nftID: nftID,
                salePaymentVaultType: salePaymentVaultType,
                saleCuts: saleCuts,
                storefrontID: self.uuid
            )

            let listingResourceID = listing.uuid
            let listingPrice = listing.getDetails().salePrice

            // Add the new listing to the dictionary.
            let oldListing <- self.listings[listingResourceID] <- listing
            // Note that oldListing will always be nil, but we have to handle it.
            destroy oldListing

            emit ListingAvailable(
                storefrontAddress: self.owner?.address!,
                listingResourceID: listingResourceID,
                nftType: nftType,
                nftID: nftID,
                ftVaultType: salePaymentVaultType,
                price: listingPrice
            )

            return listingResourceID
        }

        // removeListing
        // Remove a Listing that has not yet been purchased from the collection and destroy it.
        //
        pub fun removeListing(listingResourceID: UInt64) {
            let listing <- self.listings.remove(key: listingResourceID)
                ?? panic("missing Listing")
    
            // This will emit a ListingCompleted event.
            destroy listing
        }

        // getListingIDs
        // Returns an array of the Listing resource IDs that are in the collection
        //
        pub fun getListingIDs(): [UInt64] {
            return self.listings.keys
        }

        // borrowSaleItem
        // Returns a read-only view of the SaleItem for the given listingID if it is contained by this collection.
        //
        pub fun borrowListing(listingResourceID: UInt64): &Listing{ListingPublic}? {
            if self.listings[listingResourceID] != nil {
                return &self.listings[listingResourceID] as! &Listing{ListingPublic}
            } else {
                return nil
            }
        }

        // cleanup
        // Remove an listing *if* it has been purchased.
        // Anyone can call, but at present it only benefits the account owner to do so.
        // Kind purchasers can however call it if they like.
        //
        pub fun cleanup(listingResourceID: UInt64) {
            pre {
                self.listings[listingResourceID] != nil: "could not find listing with given id"
            }

            let listing <- self.listings.remove(key: listingResourceID)!
            assert(listing.getDetails().purchased == true, message: "listing is not purchased, only admin can remove")
            destroy listing
        }

        // destructor
        //
        destroy () {
            destroy self.listings

            // Let event consumers know that this storefront will no longer exist
            emit StorefrontDestroyed(storefrontResourceID: self.uuid)
        }

        // constructor
        //
        init () {
            self.listings <- {}

            // Let event consumers know that this storefront exists
            emit StorefrontInitialized(storefrontResourceID: self.uuid)
        }
    }

    pub fun createStorefront(): @Storefront {
        return <-create Storefront()
    }
....
}
`},
{Code: `pub contract NFTStorefront {

    //More NFTStorefront contract code above
    ....

    pub struct SaleCut {
        // The receiver for the payment.
        // Note that we do not store an address to find the Vault that this represents,
        // as the link or resource that we fetch in this way may be manipulated,
        // so to find the address that a cut goes to you must get this struct and then
        // call receiver.borrow()!.owner.address on it.
        // This can be done efficiently in a script.
        pub let receiver: Capability<&{FungibleToken.Receiver}>

        // The amount of the payment FungibleToken that will be paid to the receiver.
        pub let amount: UFix64

        // initializer
        //
        init(receiver: Capability<&{FungibleToken.Receiver}>, amount: UFix64) {
            self.receiver = receiver
            self.amount = amount
        }
    }


    // ListingDetails
    // A struct containing a Listing's data.
    //
    pub struct ListingDetails {
        // The Storefront that the Listing is stored in.
        // Note that this resource cannot be moved to a different Storefront,
        // so this is OK. If we ever make it so that it *can* be moved,
        // this should be revisited.
        pub var storefrontID: UInt64
        // Whether this listing has been purchased or not.
        pub var purchased: Bool
        // The Type of the NonFungibleToken.NFT that is being listed.
        pub let nftType: Type
        // The ID of the NFT within that type.
        pub let nftID: UInt64
        // The Type of the FungibleToken that payments must be made in.
        pub let salePaymentVaultType: Type
        // The amount that must be paid in the specified FungibleToken.
        pub let salePrice: UFix64
        // This specifies the division of payment between recipients.
        pub let saleCuts: [SaleCut]

        // setToPurchased
        // Irreversibly set this listing as purchased.
        //
        access(contract) fun setToPurchased() {
            self.purchased = true
        }

        // initializer
        //
        init (
            nftType: Type,
            nftID: UInt64,
            salePaymentVaultType: Type,
            saleCuts: [SaleCut],
            storefrontID: UInt64
        ) {
            self.storefrontID = storefrontID
            self.purchased = false
            self.nftType = nftType
            self.nftID = nftID
            self.salePaymentVaultType = salePaymentVaultType

            // Store the cuts
            assert(saleCuts.length > 0, message: "Listing must have at least one payment cut recipient")
            self.saleCuts = saleCuts

            // Calculate the total price from the cuts
            var salePrice = 0.0
            // Perform initial check on capabilities, and calculate sale price from cut amounts.
            for cut in self.saleCuts {
                // Make sure we can borrow the receiver.
                // We will check this again when the token is sold.
                cut.receiver.borrow()
                    ?? panic("Cannot borrow receiver")
                // Add the cut amount to the total price
                salePrice = salePrice + cut.amount
            }
            assert(salePrice > 0.0, message: "Listing must have non-zero price")

            // Store the calculated sale price
            self.salePrice = salePrice
        }
    }


    .....

    pub resource Listing: ListingPublic {
        // The simple (non-Capability, non-complex) details of the sale
        access(self) let details: ListingDetails

        // A capability allowing this resource to withdraw the NFT with the given ID from its collection.
        // This capability allows the resource to withdraw *any* NFT, so you should be careful when giving
        // such a capability to a resource and always check its code to make sure it will use it in the
        // way that it claims.
        access(contract) let nftProviderCapability: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>

        // borrowNFT
        // This will assert in the same way as the NFT standard borrowNFT()
        // if the NFT is absent, for example if it has been sold via another listing.
        //
        pub fun borrowNFT(): &NonFungibleToken.NFT {
            let ref = self.nftProviderCapability.borrow()!.borrowNFT(id: self.getDetails().nftID)
            //- CANNOT DO THIS IN PRECONDITION: "member of restricted type is not accessible: isInstance"
            //  result.isInstance(self.getDetails().nftType): "token has wrong type"
            assert(ref.isInstance(self.getDetails().nftType), message: "token has wrong type")
            assert(ref.id == self.getDetails().nftID, message: "token has wrong ID")
            return ref as &NonFungibleToken.NFT
        }

        // getDetails
        // Get the details of the current state of the Listing as a struct.
        // This avoids having more public variables and getter methods for them, and plays
        // nicely with scripts (which cannot return resources).
        //
        pub fun getDetails(): ListingDetails {
            return self.details
        }

        // purchase
        // Purchase the listing, buying the token.
        // This pays the beneficiaries and returns the token to the buyer.
        //
        pub fun purchase(payment: @FungibleToken.Vault): @NonFungibleToken.NFT {
            pre {
                self.details.purchased == false: "listing has already been purchased"
                payment.isInstance(self.details.salePaymentVaultType): "payment vault is not requested fungible token"
                payment.balance == self.details.salePrice: "payment vault does not contain requested price"
            }

            // Make sure the listing cannot be purchased again.
            self.details.setToPurchased()

            // Fetch the token to return to the purchaser.
            let nft <-self.nftProviderCapability.borrow()!.withdraw(withdrawID: self.details.nftID)
            // Neither receivers nor providers are trustworthy, they must implement the correct
            // interface but beyond complying with its pre/post conditions they are not gauranteed
            // to implement the functionality behind the interface in any given way.
            // Therefore we cannot trust the Collection resource behind the interface,
            // and we must check the NFT resource it gives us to make sure that it is the correct one.
            assert(nft.isInstance(self.details.nftType), message: "withdrawn NFT is not of specified type")
            assert(nft.id == self.details.nftID, message: "withdrawn NFT does not have specified ID")

            // Rather than aborting the transaction if any receiver is absent when we try to pay it,
            // we send the cut to the first valid receiver.
            // The first receiver should therefore either be the seller, or an agreed recipient for
            // any unpaid cuts.
            var residualReceiver: &{FungibleToken.Receiver}? = nil

            // Pay each beneficiary their amount of the payment.
            for cut in self.details.saleCuts {
                if let receiver = cut.receiver.borrow() {
                   let paymentCut <- payment.withdraw(amount: cut.amount)
                    receiver.deposit(from: <-paymentCut)
                    if (residualReceiver == nil) {
                        residualReceiver = receiver
                    }
                }
            }

            assert(residualReceiver != nil, message: "No valid payment receivers")

            // At this point, if all recievers were active and availabile, then the payment Vault will have
            // zero tokens left, and this will functionally be a no-op that consumes the empty vault
            residualReceiver!.deposit(from: <-payment)

            // If the listing is purchased, we regard it as completed here.
            // Otherwise we regard it as completed in the destructor.
            emit ListingCompleted(
                listingResourceID: self.uuid,
                storefrontResourceID: self.details.storefrontID,
                purchased: self.details.purchased
            )

            return <-nft
        }

        // destructor
        //
        destroy () {
            // If the listing has not been purchased, we regard it as completed here.
            // Otherwise we regard it as completed in purchase().
            // This is because we destroy the listing in Storefront.removeListing()
            // or Storefront.cleanup() .
            // If we change this destructor, revisit those functions.
            if !self.details.purchased {
                emit ListingCompleted(
                    listingResourceID: self.uuid,
                    storefrontResourceID: self.details.storefrontID,
                    purchased: self.details.purchased
                )
            }
        }

        // initializer
        //
        init (
            nftProviderCapability: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>,
            nftType: Type,
            nftID: UInt64,
            salePaymentVaultType: Type,
            saleCuts: [SaleCut],
            storefrontID: UInt64
        ) {
            // Store the sale information
            self.details = ListingDetails(
                nftType: nftType,
                nftID: nftID,
                salePaymentVaultType: salePaymentVaultType,
                saleCuts: saleCuts,
                storefrontID: storefrontID
            )

            // Store the NFT provider
            self.nftProviderCapability = nftProviderCapability

            // Check that the provider contains the NFT.
            // We will check it again when the token is sold.
            // We cannot move this into a function because initializers cannot call member functions.
            let provider = self.nftProviderCapability.borrow()
            assert(provider != nil, message: "cannot borrow nftProviderCapability")

            // This will precondition assert if the token is not available.
            let nft = provider!.borrowNFT(id: self.details.nftID)
            assert(nft.isInstance(self.details.nftType), message: "token is not of specified type")
            assert(nft.id == self.details.nftID, message: "token does not have specified ID")
        }
    }

    ....

    pub resource Storefront : StorefrontManager, StorefrontPublic {
        // The dictionary of Listing uuids to Listing resources.
        access(self) var listings: @{UInt64: Listing}

        // insert
        // Create and publish a Listing for an NFT.
        //
         pub fun createListing(
            nftProviderCapability: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>,
            nftType: Type,
            nftID: UInt64,
            salePaymentVaultType: Type,
            saleCuts: [SaleCut]
         ): UInt64 {
            let listing <- create Listing(
                nftProviderCapability: nftProviderCapability,
                nftType: nftType,
                nftID: nftID,
                salePaymentVaultType: salePaymentVaultType,
                saleCuts: saleCuts,
                storefrontID: self.uuid
            )

            let listingResourceID = listing.uuid
            let listingPrice = listing.getDetails().salePrice

            // Add the new listing to the dictionary.
            let oldListing <- self.listings[listingResourceID] <- listing
            // Note that oldListing will always be nil, but we have to handle it.
            destroy oldListing

            emit ListingAvailable(
                storefrontAddress: self.owner?.address!,
                listingResourceID: listingResourceID,
                nftType: nftType,
                nftID: nftID,
                ftVaultType: salePaymentVaultType,
                price: listingPrice
            )

            return listingResourceID
        }

        .....
}

    //More NFTStorefront contract code below

}

`},
{Code: `//Rest of NFTStorefront contract above


pub fun purchase(payment: @FungibleToken.Vault): @NonFungibleToken.NFT {
            pre {
                self.details.purchased == false: "listing has already been purchased"
                payment.isInstance(self.details.salePaymentVaultType): "payment vault is not requested fungible token"
                payment.balance == self.details.salePrice: "payment vault does not contain requested price"
            }

            // Make sure the listing cannot be purchased again.
            self.details.setToPurchased()

            // Fetch the token to return to the purchaser.
            let nft <-self.nftProviderCapability.borrow()!.withdraw(withdrawID: self.details.nftID)
            // Neither receivers nor providers are trustworthy, they must implement the correct
            // interface but beyond complying with its pre/post conditions they are not gauranteed
            // to implement the functionality behind the interface in any given way.
            // Therefore we cannot trust the Collection resource behind the interface,
            // and we must check the NFT resource it gives us to make sure that it is the correct one.
            assert(nft.isInstance(self.details.nftType), message: "withdrawn NFT is not of specified type")
            assert(nft.id == self.details.nftID, message: "withdrawn NFT does not have specified ID")

            // Rather than aborting the transaction if any receiver is absent when we try to pay it,
            // we send the cut to the first valid receiver.
            // The first receiver should therefore either be the seller, or an agreed recipient for
            // any unpaid cuts.
            var residualReceiver: &{FungibleToken.Receiver}? = nil

            // Pay each beneficiary their amount of the payment.
            for cut in self.details.saleCuts {
                if let receiver = cut.receiver.borrow() {
                   let paymentCut <- payment.withdraw(amount: cut.amount)
                    receiver.deposit(from: <-paymentCut)
                    if (residualReceiver == nil) {
                        residualReceiver = receiver
                    }
                }
            }

            assert(residualReceiver != nil, message: "No valid payment receivers")

            // At this point, if all recievers were active and availabile, then the payment Vault will have
            // zero tokens left, and this will functionally be a no-op that consumes the empty vault
            residualReceiver!.deposit(from: <-payment)

            // If the listing is purchased, we regard it as completed here.
            // Otherwise we regard it as completed in the destructor.
            emit ListingCompleted(
                listingResourceID: self.uuid,
                storefrontResourceID: self.details.storefrontID,
                purchased: self.details.purchased
            )

            return <-nft
        }

//Rest of NFTStorefront contract below
`},
{Code: `

`},
{Code: `

`},
{Code: `

`},
{Code: `

`},
{Code: `

`},
{Code: `

`},
{Code: `

`},
{Code: `

`},
]