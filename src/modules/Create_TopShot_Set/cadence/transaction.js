export const transaction = `import TopShot from 0x01


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


`