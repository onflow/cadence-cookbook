export const contractExplain = `This resource is created so that more tokens may be minted. Ideally not many people should have access to this, only admins.

The VaultMinter resource takes in an amount as well as a capability that implements the Receiver interface as its arguments.

It checks to make sure the capability exists to receive, and once it does that it adds the amount in the parameters to the total minted supply.

Afterwards that newly created balance is deposited into the receivers account.

`