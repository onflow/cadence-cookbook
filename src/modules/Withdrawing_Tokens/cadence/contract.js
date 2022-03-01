export const contract = `pub resource interface Provider {

    // withdraw
    //
    // Function that subtracts tokens from the owner's Vault
    // and returns a Vault resource (@Vault) with the removed tokens.
    //
    // The function's access level is public, but this isn't a problem
    // because even the public functions are not fully public at first.
    // anyone in the network can call them, but only if the owner grants
    // them access by publishing a resource that exposes the withdraw
    // function.
    //
    pub fun withdraw(amount: UFix64): @Vault {
        post {
            // 'result' refers to the return value of the function
            result.balance == UFix64(amount):
                "Withdrawal amount must be the same as the balance of the withdrawn Vault"
        }
    }
}
`