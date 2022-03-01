export const transaction = `import SetAndSeries from 0x01

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

`