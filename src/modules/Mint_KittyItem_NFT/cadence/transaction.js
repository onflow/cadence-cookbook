export const transaction = `import KittyItems from 0x01
import NonFungibleToken from 0x02

transaction {

    let minter: &KittyItems.NFTMinter

    let recipient: &{NonFungibleToken.CollectionPublic}
    
	prepare(acct: AuthAccount) {

    self.minter = acct.borrow<&KittyItems.NFTMinter>(from: KittyItems.MinterStoragePath) ?? panic("Can't borrow minter")

    self.recipient = acct.getCapability<&{NonFungibleToken.CollectionPublic}>(KittyItems.CollectionPublicPath).borrow() ?? panic("can't get capability")
    
    }

    
	execute {
    
    self.minter.mintNFT(recipient: self.recipient, kind: KittyItems.Kind.fishbowl, rarity: KittyItems.Rarity.gold)
    log("Kitty Item Minted")

	}
}

`