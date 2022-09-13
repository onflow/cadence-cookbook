export const transaction = `import SetAndSeries from 0x01
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


`