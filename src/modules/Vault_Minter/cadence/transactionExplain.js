export const transactionExplain = `When doing the transaction, you first need to check to see if there is a VaultMinter that can be referenced by the signer of the transaction.

If so, then you get an account that has the capability to receive tokens and once you execute the transaction you include the amount of tokens to be minted, as well as the receivers capability in the arguments.

`