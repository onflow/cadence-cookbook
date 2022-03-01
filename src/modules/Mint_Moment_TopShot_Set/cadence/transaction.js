export const transaction = `import TopShot from 0x01


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


`