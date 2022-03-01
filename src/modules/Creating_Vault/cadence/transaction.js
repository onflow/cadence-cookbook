export const transaction = `// Setup Account

import ExampleToken from 0x01

// This transaction configures an account to store and receive tokens defined by
// the ExampleToken contract.
transaction {
	prepare(acct: AuthAccount) {
		// Create a new empty Vault object
		let vaultA <- ExampleToken.createEmptyVault()
			
		// Store the vault in the account storage
		acct.save<@ExampleToken.Vault>(<-vaultA, to: /storage/MainVault)

    log("Empty Vault stored")

    // Create a public Receiver capability to the Vault
		let ReceiverRef = acct.link<&ExampleToken.Vault{ExampleToken.Receiver, ExampleToken.Balance}>(/public/MainReceiver, target: /storage/MainVault)

    log("References created")
	}

    post {
        // Check that the capabilities were created correctly
        getAccount(0x02).getCapability<&ExampleToken.Vault{ExampleToken.Receiver}>(/public/MainReceiver)
                        .check():  
                        "Vault Receiver Reference was not created correctly"
    }
}
 
`