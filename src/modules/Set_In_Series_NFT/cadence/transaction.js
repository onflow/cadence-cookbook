export const transaction = `
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

`