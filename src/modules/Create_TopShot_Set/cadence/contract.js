export const contract = `//TopShot Contract Code Above
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
`