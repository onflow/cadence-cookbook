export const contract = `// VaultMinter
//
// Resource object that an admin can control to mint new tokens
pub resource VaultMinter {

    // Function that mints new tokens and deposits into an account's vault
    // using their 'Receiver' reference.
    // We say '&AnyResource{Receiver}' to say that the recipient can be any resource
    // as long as it implements the Receiver interface
    pub fun mintTokens(amount: UFix64, recipient: Capability<&AnyResource{Receiver}>) {
        let recipientRef = recipient.borrow()
            ?? panic("Could not borrow a receiver reference to the vault")

        ExampleToken.totalSupply = ExampleToken.totalSupply + UFix64(amount)
        recipientRef.deposit(from: <-create Vault(balance: amount))
    }
}
`