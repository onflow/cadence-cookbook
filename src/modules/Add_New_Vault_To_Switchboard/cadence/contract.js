export const contract = `
// The resource that stores the multiple fungible token receiver
// capabilities, allowing the owner to add and remove them and anyone to
// deposit any fungible token among the available types.
//
pub resource Switchboard: FungibleToken.Receiver, SwitchboardPublic {

.....

    // Adds a new fungible token receiver capability to the switchboard
    // resource.
    //
    // @param capability: The capability to expose a certain fungible
    // token vault deposit function through \`{FungibleToken.Receiver}\` that
    // will be added to the switchboard.
    //
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

}
`;
