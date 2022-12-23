export const transaction = `
transaction {
    let exampleTokenVaultCapabilty: Capability<&{FungibleToken.Receiver}>
    let switchboardRef:  &FungibleTokenSwitchboard.Switchboard

    prepare(signer: AuthAccount) {
        // Get the example token vault capability from the signer's account
        self.exampleTokenVaultCapability =
            signer.getCapability<&{FungibleToken.Receiver}>
                                (ExampleToken.ReceiverPublicPath)
        // Get a reference to the signers switchboard
        self.switchboardRef = signer.borrow<&FungibleTokenSwitchboard.Switchboard>
            (from: FungibleTokenSwitchboard.StoragePath)
                ?? panic("Could not borrow reference to switchboard")
    }

    execute {
        // Add the capability to the switchboard using addNewVault method
        self.switchboardRef.addNewVault(capability: self.exampleTokenVaultCapability)
    }
}
`;
