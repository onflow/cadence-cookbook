export const transaction = `import TopShot from 0x01


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


`