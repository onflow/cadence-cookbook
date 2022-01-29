
export const TXexamples = [
    {Tx: `import NonFungibleToken from 0x03
    import NewExampleNFT from 0x02
    
    // This script uses the NFTMinter resource to mint a new NFT
    // It must be run with the account that has the minter resource
    // stored in /storage/NFTMinter
    
    transaction{
    
        // local variable for storing the minter reference
        let minter: &NewExampleNFT.NFTMinter
    
        prepare(signer: AuthAccount) {
            // borrow a reference to the NFTMinter resource in storage
            self.minter = signer.borrow<&NewExampleNFT.NFTMinter>(from: NewExampleNFT.MinterStoragePath)
                ?? panic("Could not borrow a reference to the NFT minter")
        }
    
        execute {
            // Borrow the recipient's public NFT collection reference
            let receiver = getAccount(0x02)
                .getCapability(NewExampleNFT.CollectionPublicPath)
                .borrow<&{NonFungibleToken.CollectionPublic}>()
                ?? panic("Could not get receiver reference to the NFT Collection")
    
            // Mint the NFT and deposit it to the recipient's collection
            self.minter.mintNFT(
                recipient: receiver,
                name: "Second NFT",
                description: "The Best NFT",
                thumbnail: "NFT: Thumbnail",
                power: "The best",
                will: "The strongest",
                determination: "unbeatable"
            )
    
            log("Minted an NFT")
        }
    }`},
{Tx: `import NonFungibleToken from 0x03
import NewExampleNFT from 0x02
import MetadataViews from 0x01

// This transaction is what an account would run
// to set itself up to receive NFTs

transaction {

    prepare(signer: AuthAccount) {
        // Return early if the account already has a collection
        if signer.borrow<&NewExampleNFT.Collection>(from: NewExampleNFT.CollectionStoragePath) != nil {
            return
        }

        // Create a new empty collection
        let collection <- NewExampleNFT.createEmptyCollection()

        // save it to the account
        signer.save(<-collection, to: NewExampleNFT.CollectionStoragePath)

        // create a public capability for the collection
        signer.link<&{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(
            NewExampleNFT.CollectionPublicPath,
            target: NewExampleNFT.CollectionStoragePath
        )
    }

    execute {
      log("Setup account")
    }
}
`},
{Tx: `
import NonFungibleToken from 0x03
import NewExampleNFT from 0x02
import MetadataViews from 0x01

// This transaction is what an account would run
// to set itself up to receive NFTs

transaction {

    prepare(signer: AuthAccount) {
        // Return early if the account already has a collection
        if signer.borrow<&NewExampleNFT.Collection>(from: NewExampleNFT.CollectionStoragePath) != nil {
            return
        }

        // Create a new empty collection
        let collection <- NewExampleNFT.createEmptyCollection()

        // save it to the account
        signer.save(<-collection, to: NewExampleNFT.CollectionStoragePath)

        // create a public capability for the collection
        signer.link<&{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(
            NewExampleNFT.CollectionPublicPath,
            target: NewExampleNFT.CollectionStoragePath
        )
    }

    execute {
      log("Setup account")
    }
}
`},
{Tx: `
import NonFungibleToken from 0x03
import NewExampleNFT from 0x02

// This transaction uses the NFTMinter resource to mint a new NFT
// It must be run with the account that has the minter resource
// stored in /storage/NFTMinter

transaction{

    // local variable for storing the minter reference
    let minter: &NewExampleNFT.NFTMinter

    prepare(signer: AuthAccount) {
        // borrow a reference to the NFTMinter resource in storage
        self.minter = signer.borrow<&NewExampleNFT.NFTMinter>(from: NewExampleNFT.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")
    }

    execute {
        // Borrow the recipient's public NFT collection reference
        let receiver = getAccount(0x02)
            .getCapability(NewExampleNFT.CollectionPublicPath)
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        // Mint the NFT and deposit it to the recipient's collection
        self.minter.mintNFT(
            recipient: receiver,
            name: "Second NFT",
            description: "The Best NFT",
            thumbnail: "NFT: Thumbnail",
            power: "The best",
            will: "The strongest",
            determination: "unbeatable"
        )

        log("Minted an NFT")
    }
}
`},
{Tx: `import MetadataViews from 0x01

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
    
    let display = nft.resolveView(Type<MetadataViews.Display>())

    return display
}
`},
{Tx: `
import MetadataViews from 0x01
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

`},
{Tx: `
// Setup Account

import ExampleToken from 0x01

// This transaction configures an account to store and receive tokens defined by
// the ExampleToken contract.
transaction {
	prepare(acct: AuthAccount) {
		// Create a new empty Vault object
		let vaultA <- ExampleToken.createEmptyVault()
			
		// Store the vault in the account storage
		acct.save<@ExampleToken.Vault>(<-vaultA, to: /storage/MainVault)

    log("Empty Vault stored")

    // Create a public Receiver capability to the Vault
		let ReceiverRef = acct.link<&ExampleToken.Vault{ExampleToken.Receiver, ExampleToken.Balance}>(/public/MainReceiver, target: /storage/MainVault)

    log("References created")
	}

    post {
        // Check that the capabilities were created correctly
        getAccount(0x02).getCapability<&ExampleToken.Vault{ExampleToken.Receiver}>(/public/MainReceiver)
                        .check():  
                        "Vault Receiver Reference was not created correctly"
    }
}
 
`},
{Tx: `

import ExampleToken from 0x01

// This transaction is a template for a transaction that
// could be used by anyone to send tokens to another account
// that owns a Vault
transaction {

  // Temporary Vault object that holds the balance that is being transferred
  var temporaryVault: @ExampleToken.Vault

  prepare(acct: AuthAccount) {
    // withdraw tokens from your vault by borrowing a reference to it
    // and calling the withdraw function with that reference
    let vaultRef = acct.borrow<&ExampleToken.Vault>(from: /storage/MainVault)
        ?? panic("Could not borrow a reference to the owner's vault")
      
    self.temporaryVault <- vaultRef.withdraw(amount: 10.0)
  }

  execute {
    // get the recipient's public account object
    let recipient = getAccount(0x01)

    // get the recipient's Receiver reference to their Vault
    // by borrowing the reference from the public capability
    let receiverRef = recipient.getCapability(/public/MainReceiver)
                      .borrow<&ExampleToken.Vault{ExampleToken.Receiver}>()
                      ?? panic("Could not borrow a reference to the receiver")

    // deposit your tokens to their Vault
    receiverRef.deposit(from: <-self.temporaryVault)

    log("Transfer succeeded!")
  }
}
 
`},
{Tx: `// Setup Account

import ExampleToken from 0x01

// This transaction configures an account to store and receive tokens defined by
// the ExampleToken contract.
transaction {
	prepare(acct: AuthAccount) {
		// Create a new empty Vault object
		let vaultA <- ExampleToken.createEmptyVault()
			
		// Store the vault in the account storage
		acct.save<@ExampleToken.Vault>(<-vaultA, to: /storage/MainVault)

    log("Empty Vault stored")

    // Create a public Receiver capability to the Vault
		let ReceiverRef = acct.link<&ExampleToken.Vault{ExampleToken.Receiver, ExampleToken.Balance}>(/public/MainReceiver, target: /storage/MainVault)

    log("References created")
	}

    post {
        // Check that the capabilities were created correctly
        getAccount(0x02).getCapability<&ExampleToken.Vault{ExampleToken.Receiver}>(/public/MainReceiver)
                        .check():  
                        "Vault Receiver Reference was not created correctly"
    }
}
 
`},
{Tx: `
// Mint Tokens

import ExampleToken from 0x01

// This transaction mints tokens and deposits them into account 2's vault
transaction {

    // Local variable for storing the reference to the minter resource
    let mintingRef: &ExampleToken.VaultMinter

    // Local variable for storing the reference to the Vault of
    // the account that will receive the newly minted tokens
    var receiver: Capability<&ExampleToken.Vault{ExampleToken.Receiver}>

	prepare(acct: AuthAccount) {
        // Borrow a reference to the stored, private minter resource
        self.mintingRef = acct.borrow<&ExampleToken.VaultMinter>(from: /storage/MainMinter)
            ?? panic("Could not borrow a reference to the minter")
        
        // Get the public account object for account 0x02
        let recipient = getAccount(0x02)

        // Get their public receiver capability
        self.receiver = recipient.getCapability<&ExampleToken.Vault{ExampleToken.Receiver}>
(/public/MainReceiver)

	}

    execute {
        // Mint 30 tokens and deposit them into the recipient's Vault
        self.mintingRef.mintTokens(amount: 30.0, recipient: self.receiver)

        log("30 tokens minted and deposited to account 0x02")
    }
}
 
`},
{Tx: `
import SetAndSeries from 0x01

transaction {

let adminCheck: &SetAndSeries.Admin

  prepare(acct: AuthAccount) {
   self.adminCheck = acct.borrow<&SetAndSeries.Admin>(from: SetAndSeries.AdminStoragePath)
  ?? panic("could not borrow admin reference")
  }

  execute {
    self.adminCheck.addSeries(seriesId: 1, metadata: {"Series": "1"})
    log("series added")
  }
}

`},
{Tx: `
import SetAndSeries from 0x01

transaction {

let adminCheck: &SetAndSeries.Admin

let seriesRef: &SetAndSeries.Series

  prepare(acct: AuthAccount) {
   self.adminCheck = acct.borrow<&SetAndSeries.Admin>(from: SetAndSeries.AdminStoragePath)
  ?? panic("could not borrow admin reference")

  self.seriesRef = self.adminCheck.borrowSeries(seriesId: 1)
  }

  execute {
    self.seriesRef.addNftSet(setId: 1, maxEditions: 5, ipfsMetadataHashes: {}, metadata: {"Rookie": "2004"})
    log("set added")
  }
}

`},
{Tx: `
import SetAndSeries from 0x01
import NonFungibleToken from 0x02

transaction {

let adminCheck: &SetAndSeries.Admin

let seriesRef: &SetAndSeries.Series

let receiver: &{NonFungibleToken.CollectionPublic}

  prepare(acct: AuthAccount) {
   self.adminCheck = acct.borrow<&SetAndSeries.Admin>(from: SetAndSeries.AdminStoragePath)
  ?? panic("could not borrow admin reference")

  self.seriesRef = self.adminCheck.borrowSeries(seriesId: 1)

  self.receiver = acct.getCapability<&SetAndSeries.Collection{NonFungibleToken.CollectionPublic}>(SetAndSeries.CollectionPublicPath).borrow()
  ?? panic("could not borrow capability")

  }

  execute {
    self.seriesRef.mintSetAndSeriesNFT(recipient: self.receiver , tokenId: 1, setId: 1)
    log("minted NFT in account 1")
  }

}

`},
{Tx: `
import SetAndSeries from 0x01

transaction {

let adminCheck: &SetAndSeries.Admin

  prepare(acct: AuthAccount) {
   self.adminCheck = acct.borrow<&SetAndSeries.Admin>(from: SetAndSeries.AdminStoragePath)
  ?? panic("could not borrow admin reference")
  }

  execute {
    self.adminCheck.addSeries(seriesId: 1, metadata: {"Series": "1"})
    log("series added")
  }
}
`},
{Tx: `
import SetAndSeries from 0x01

transaction {

let adminCheck: &SetAndSeries.Admin

  prepare(acct: AuthAccount, acct2: AuthAccount) {
   self.adminCheck = acct.borrow<&SetAndSeries.Admin>(from: SetAndSeries.AdminStoragePath)
  ?? panic("could not borrow admin reference")


  acct2.save(<- self.adminCheck.createNewAdmin(), to: SetAndSeries.AdminStoragePath)

  }

  execute {
  log("New Admin Resource Created")
  }
}

`},
{Tx: `
import TopShot from 0x01


transaction {

    let admin: &TopShot.Admin

	prepare(acct: AuthAccount) {
    
    self.admin = acct.borrow<&TopShot.Admin>(from: /storage/TopShotAdmin)
    ?? panic("Cant borrow admin resource")

    }

   
	execute {
    self.admin.createPlay(metadata: {"Rookie": "2004", "Player Name": "Dwight Howard"})
    self.admin.createPlay(metadata: {"Rookie": "2003", "Player Name": "Dwayne Wade"})
    log("play created")
	}
}
`},
{Tx: `
import TopShot from 0x01


transaction {
    
    let admin: &TopShot.Admin

	prepare(acct: AuthAccount) {
    
        self.admin = acct.borrow<&TopShot.Admin>(from: /storage/TopShotAdmin)
        ?? panic("Cant borrow admin resource")

    }

    execute{
        self.admin.createSet(name: "Rookies")
        log("set created")
    }
}

`},
{Tx: `
import TopShot from 0x01


transaction {
    
    let admin: &TopShot.Admin

    let borrowedSet: &TopShot.Set

	prepare(acct: AuthAccount) {
    
        self.admin = acct.borrow<&TopShot.Admin>(from: /storage/TopShotAdmin)
        ?? panic("Cant borrow admin resource")

        self.borrowedSet = self.admin.borrowSet(setID: 1)

    }

    execute{
        self.borrowedSet.addPlay(playID: 1)
        self.borrowedSet.addPlay(playID: 2)
        self.borrowedSet.addPlay(playID: 3)
        log("play added")
    }
}

`},
{Tx: `
import TopShot from 0x01


transaction {
    
    let admin: &TopShot.Admin

    let borrowedSet: &TopShot.Set

	prepare(acct: AuthAccount) {
    
        self.admin = acct.borrow<&TopShot.Admin>(from: /storage/TopShotAdmin)
        ?? panic("Cant borrow admin resource")

        self.borrowedSet = self.admin.borrowSet(setID: 1)

        let recieverRef = acct.getCapability<&{TopShot.MomentCollectionPublic}>(/public/MomentCollection).borrow() ?? panic("Can't borrow collection ref")

        let collection <- self.borrowedSet.batchMintMoment(playID: 3, quantity: 3)

        recieverRef.batchDeposit(tokens: <- collection)
    }

    execute{
        log("plays minted")
    }
}

`},
{Tx: `
import NFTStorefront from 0x03

// This transaction sets up account 0x01 for the marketplace tutorial
// by publishing a Vault reference and creating an empty NFT Collection.
transaction {
  prepare(acct: AuthAccount) {
    
    acct.save<@NFTStorefront.Storefront>(<- NFTStorefront.createStorefront() , to: NFTStorefront.StorefrontStoragePath)

    log("storefront created")
  }
}

`},
{Tx: `
import NFTStorefront from 0x03
import NonFungibleToken from 0x02
import ExampleNFT from 0x04
import FungibleToken from 0x01

// This transaction sets up account 0x01 for the marketplace tutorial
// by publishing a Vault reference and creating an empty NFT Collection.
transaction {

    let storefront: &NFTStorefront.Storefront 

    let exampleNFTProvider: Capability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>

    let tokenReceiver: Capability<&FungibleToken.Vault{FungibleToken.Receiver}>
    
    prepare(acct: AuthAccount) {
    
        self.storefront = acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) ?? panic("can't borrow storefront")

        if acct.getCapability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPrivatePath).check() == false {
            acct.link<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPrivatePath, target: ExampleNFT.CollectionStoragePath)
        }

        self.exampleNFTProvider = acct.getCapability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPrivatePath)!
        assert(self.exampleNFTProvider.borrow() != nil, message: "Missing or mis-typed ExampleNFT.Collection provider")


        self.tokenReceiver = acct.getCapability<&FungibleToken.Vault{FungibleToken.Receiver}>(/public/MainReceiver)!
        assert(self.tokenReceiver.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

        let saleCut = NFTStorefront.SaleCut(
            receiver: self.tokenReceiver,
            amount: 10.0
        )

        self.storefront.createListing(
            nftProviderCapability: self.exampleNFTProvider, 
            nftType: Type<@NonFungibleToken.NFT>(), 
            nftID: 0, 
            salePaymentVaultType: Type<@FungibleToken.Vault>(), 
            saleCuts: [saleCut]
            )

        log("storefront listing created")
    }
}

`},
{Tx: `
import FungibleToken from 0x01
import NonFungibleToken from 0x02
import ExampleNFT from 0x04
import NFTStorefront from 0x03

transaction {
    let paymentVault: @FungibleToken.Vault
    let exampleNFTCollection: &ExampleNFT.Collection{NonFungibleToken.Receiver}
    let storefront: &NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}
    let listing: &NFTStorefront.Listing{NFTStorefront.ListingPublic}

    prepare(acct: AuthAccount) {
        self.storefront = getAccount(0x04)
            .getCapability<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(
                NFTStorefront.StorefrontPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow Storefront from provided address")

        self.listing = self.storefront.borrowListing(listingResourceID: 10)
                  ?? panic("No Offer with that ID in Storefront")
        let price = self.listing.getDetails().salePrice

        let mainFlowVault = acct.borrow<&FungibleToken.Vault>(from: /storage/MainVault)
            ?? panic("Cannot borrow FlowToken vault from acct storage")
        self.paymentVault <- mainFlowVault.withdraw(amount: price)

        self.exampleNFTCollection = acct.borrow<&ExampleNFT.Collection{NonFungibleToken.Receiver}>(
            from: ExampleNFT.CollectionStoragePath) ?? panic("Cannot borrow NFT collection receiver from account")
    }

    execute {
     let item <- self.listing.purchase(
     payment: <-self.paymentVault
     )

       self.exampleNFTCollection.deposit(token: <-item)

        /* //-
        error: Execution failed:
        computation limited exceeded: 100
        */
        // Be kind and recycle
        self.storefront.cleanup(listingResourceID: 10)
        log("transaction done")
    }

    //- Post to check item is in collection?
}

`},
{Tx: `

`},
{Tx: `

`},
{Tx: `

`},
]