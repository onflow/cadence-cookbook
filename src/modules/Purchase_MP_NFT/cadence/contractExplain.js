export const contractExplain = `When purchasing an NFT, all that is needed from the purchaser is their payment that comes in the form of their vault resource.

Once that happens, the smart contract checks to make sure the listing hasn't already been purchased, the fungible token is the right type for this transaction, and that the payment is the correct amount.

If this is the case then the purchase can be approved. We change the details of the listing to purchased. We will then withdraw the NFT from the account that listed it.

We check to see if the NFT is of the right type and the right ID to make sure that the NFT being purchased is in fact the correct one.

After that, we take all of the sales cuts and start depositing the amounts into the accounts vault receivers we have capabilities for.

Then we move the remaining payment vault into the residual receiver local variable. The price of the remaining payment vault should be 0 so we are just moving our resource into there.

Lastly we emit that the transaction has completed and we return the NFT which can then be deposited into the purchasers collection.

`