export const transaction = `import SetAndSeries from 0x01

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


`