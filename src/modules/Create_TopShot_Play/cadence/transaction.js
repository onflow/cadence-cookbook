export const transaction = `import TopShot from 0x01


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

`