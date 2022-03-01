export const contractExplain = `When setting up a withdraw function in your contract, you can create an interface that's only accessible to your private/storage path in your account so that others aren't able to withdraw funds without you approving.

Here we are making sure that after the withdrawl occurs your balance that was withdrawn was the same as the balance of the withdrawn vault.

`