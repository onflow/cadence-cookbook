export const contract = `//creating an empty vault
pub fun createEmptyVault(): @Vault {
    return <-create Vault(balance: 0.0)
}
`