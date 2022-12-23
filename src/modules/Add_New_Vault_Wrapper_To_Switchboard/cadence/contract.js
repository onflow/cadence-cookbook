export const contract = `
// The resource that stores the multiple fungible token receiver
// capabilities, allowing the owner to add and remove them and anyone to
// deposit any fungible token among the available types.
//
pub resource Switchboard: FungibleToken.Receiver, SwitchboardPublic {

.....

    // Adds a new fungible token receiver capability to the switchboard
    // resource specifying which \`Type\`of \`@FungibleToken.Vault\` can be
    // deposited to it. Use it to include in your switchboard "wrapper"
    // receivers such as a \`@TokenForwarding.Forwarder\`. It can also be
    // used to overwrite the type attached to a certain capability without
    // having to remove that capability first.
    //
    // @param capability: The capability to expose a certain fungible
    // token vault deposit function through \`{FungibleToken.Receiver}\` that
    // will be added to the switchboard.
    //
    // @param type: The type of fungible token that can be deposited to that
    // capability, rather than the \`Type\` from the reference borrowed from
    // said capability
    //
    pub fun addNewVaultWrapper(capability: Capability<&{FungibleToken.Receiver}>, type: Type) {
        // Check if the capability is working
        assert(capability.check(), message: "The passed capability is not valid")
        // Use the type parameter as key for the capability
        self.receiverCapabilities[type] = capability
        // emit the event that indicates that a new capability has been
        // added
        emit VaultCapabilityAdded(type: type,
                                switchboardOwner: self.owner?.address,
                                capabilityOwner: capability.address)
    }
`;
