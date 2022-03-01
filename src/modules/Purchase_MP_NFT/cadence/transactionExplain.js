export const transactionExplain = `Here we are defining initially the types that we are expected to return for each of the listed variables.

First we need to get the storefront of the account that the listing is under. You will have linked a public capability to this store front so that others can access it and purchase your listing.

Once we borrow that storefront, we then want to borrow the listing that we are interested in buying. We assign that to the listing variable.

We'll then fetch the price of that listing so that in the next step when we take our Vault resource and withdraw tokens from it, we pass in the price of the NFT because that is how much we would like to withdraw.

We'll also get our Receiver capability so that we can deposit the NFT into our collection.

When we're ready to execute, we call the purchase function on our listing and pass in the payment vault we'll be paying for this with. This will return and NFT resource for us that we temporarily store in our item variable.

We'll then deposit that NFT into our collection, and then we'll cleanup the storefront by deleting our listing, and with that you have created a purchase on an NFT marketplace.

`