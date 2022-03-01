export const contract = `
// Admin is a special authorization resource that 
// allows the owner to perform important NFT 
// functions
//
pub resource Admin {

.....

    pub fun createNewAdmin(): @Admin {
        return <-create Admin()
    }

}
`