export const transactionExplain = `This transaction is showing us how a transfer occurs from one vault to the other. It includes both withdrawing of tokens from an account and depositing into the receiving account.

Before we execute the transfer we create a temporary vault that holds our balance being transfered. Afterwards we borrow a reference to the vault and then call a function that says to withdraw 10 tokens from it.

Afterwards we execute the transaction by getting the account of the receiver, making sure they have the capability to receive, and then depositing the balance into their account.

Note that the withdrawn balance returns a resource, which is why in order for it to be deposited you need to move a resource into the deposit function.

`