export const contract = `pub contract FungibleTokenSwitchboard {

    .....

    // FungibleTokenSwitchboard
    // A resource that stores the multiple fungible token receiver
    // capabilities, allowing the owner to add and remove them and anyone to
    // deposit any fungible token among the available types.
    //
    pub resource Switchboard: FungibleToken.Receiver, SwitchboardPublic {

        // Dictionary holding the fungible token receiver capabilities,
        // indexed by the fungible token vault type.
        access(contract) var receiverCapabilities: {Type: Capability<&{FungibleToken.Receiver}>}

        // Adds a new fungible token receiver capability to the switchboard
        // resource.
        pub fun addNewVault(capability: Capability<&{FungibleToken.Receiver}>) {
            // Borrow a reference to the vault pointed to by the capability we
            // want to store inside the switchboard
            let vaultRef = capability.borrow()
                ?? panic ("Cannot borrow reference to vault from capability")
            // Check if there is a previous capability for this token, if not
            if (self.receiverCapabilities[vaultRef.getType()] == nil) {
                // use the vault reference type as key for storing the
                // capability and then
                self.receiverCapabilities[vaultRef.getType()] = capability
                // emit the event that indicates that a new capability has been
                // added
                emit VaultCapabilityAdded(type: vaultRef.getType(),
                                    switchboardOwner: self.owner?.address,
                                    capabilityOwner: capability.address)
            } else {
                // If there was already a capability for that token, panic
                panic("There is already a vault in the Switchboard for this token")
            }
        }

        // Adds a number of new fungible token receiver capabilities by using
        // the paths where they are stored.
        pub fun addNewVaultsByPath(paths: [PublicPath], address: Address) {
            // Get the account where the public capabilities are stored
            let owner = getAccount(address)
            // For each path, get the saved capability and store it
            // into the switchboard's receiver capabilities dictionary
            for path in paths {
                let capability = owner.getCapability<&{FungibleToken.Receiver}>(path)
                // Borrow a reference to the vault pointed to by the capability
                // we want to store inside the switchboard
                // If the vault was borrowed successfully...
                if let vaultRef = capability.borrow() {
                    // ...and if there is no previous capability added for that
                    // token
                    if (self.receiverCapabilities[vaultRef!.getType()] == nil) {
                        // Use the vault reference type as key for storing the
                        // capability
                        self.receiverCapabilities[vaultRef!.getType()] = capability
                        // and emit the event that indicates that a new
                        // capability has been added
                        emit VaultCapabilityAdded(type: vaultRef.getType(),
                            switchboardOwner: self.owner?.address, capabilityOwner: address)
                    }
                }
            }
        }

        // Removes a fungible token receiver capability from the switchboard
        // resource.
        pub fun removeVault(capability: Capability<&{FungibleToken.Receiver}>) {
            // Borrow a reference to the vault pointed to by the capability we
            // want to remove from the switchboard
            let vaultRef = capability.borrow()
                ?? panic ("Cannot borrow reference to vault from capability")
            // Use the vault reference to find the capability to remove
            self.receiverCapabilities.remove(key: vaultRef.getType())
            // Emit the event that indicates that a new capability has been
            // removed
            emit VaultCapabilityRemoved(type: vaultRef.getType(),
                                    switchboardOwner: self.owner?.address,
                                    capabilityOwner: capability.address)
        }

        // Takes a fungible token vault and routes it to the proper fungible
        // token receiver capability for depositing it.
        pub fun deposit(from: @FungibleToken.Vault) {
            // Get the capability from the ones stored at the switchboard
            let depositedVaultCapability = self
                .receiverCapabilities[from.getType()]
                ?? panic ("The deposited vault is not available on this switchboard")
            // Borrow the reference to the desired vault
            let vaultRef = depositedVaultCapability.borrow()
                ?? panic ("Can not borrow a reference to the the vault")
            vaultRef.deposit(from: <-from)
        }

        // Takes a fungible token vault and tries to route it to the proper
        // fungible token receiver capability for depositing the funds,
        // avoiding panicking if the vault is not available.
        pub fun safeDeposit(from: @FungibleToken.Vault): @FungibleToken.Vault? {
            // Try to get the proper vault capability from the switchboard
            // If the desired vault is present on the switchboard...
            if let depositedVaultCapability = self
                                        .receiverCapabilities[from.getType()] {
                // We try to borrow a reference to the vault from the capability
                // If we can borrow a reference to the vault...
                if let vaultRef =  depositedVaultCapability.borrow() {
                    // We deposit the funds on said vault
                    vaultRef.deposit(from: <-from
                                                .withdraw(amount: from.balance))
                }
            }
            // if deposit failed for some reason
            if from.balance > 0.0 {
                emit NotCompletedDeposit(type: from.getType(),
                                        amount: from.balance,
                                        switchboardOwner: self.owner?.address)
                return <-from
            }
            destroy from
            return nil
        }

        // A getter function to know which tokens a certain switchboard
        // resource is prepared to receive.
        pub fun getVaultTypes(): [Type] {
            let effectiveTypes: [Type] = []
            for vaultType in self.receiverCapabilities.keys {
                if self.receiverCapabilities[vaultType]!.check() {
                    effectiveTypes.append(vaultType)
                }
            }
            return effectiveTypes
        }

        init() {
            // Initialize the capabilities dictionary
            self.receiverCapabilities = {}
        }

    }

    pub fun createSwitchboard(): @Switchboard {
        return <-create Switchboard()
    }
....
}
`;
