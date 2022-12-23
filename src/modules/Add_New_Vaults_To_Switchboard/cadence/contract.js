export const contract = `
// The resource that stores the multiple fungible token receiver
// capabilities, allowing the owner to add and remove them and anyone to
// deposit any fungible token among the available types.
//
pub resource Switchboard: FungibleToken.Receiver, SwitchboardPublic {

.....

    // Adds a number of new fungible token receiver capabilities by using
    // the paths where they are stored.
    //
    // @param paths: The paths where the public capabilities are stored.
    // @param address: The address of the owner of the capabilities.
    //
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

}
`;
