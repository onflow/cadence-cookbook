export const contract = `//More TopShot Code Above

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

`