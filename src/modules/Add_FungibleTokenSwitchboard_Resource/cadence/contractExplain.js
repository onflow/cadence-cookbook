export const contractExplain = `The FungibleTokenSwitchboard contract is used to allow users to receive payments in different fungible tokens using a single &{FungibleToken.Receiver} placed in a standard receiver path /public/GenericFTReceiver.

Before doing any of this, you need to create a FungibleTokenSwitchboard resource from the FungibleTokenSwitchboard contract and save it to your FungibleTokenSwitchboard.StoragePath path. Once that resource is saved it will create the needed public capabilities to access it.
In order to make it support receiving a certain token, users will need to add the desired token's receiver capability to their switchboard resource

The createSwitchboard function allows anyone to create a FungibleTokenSwitchboard and save it to their account.

`;
