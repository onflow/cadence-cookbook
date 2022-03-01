export const contract = `//More TopShot Code Above

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
`