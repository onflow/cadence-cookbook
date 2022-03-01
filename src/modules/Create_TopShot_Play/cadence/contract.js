export const contract = `//TopShot Contract Code Above
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
`