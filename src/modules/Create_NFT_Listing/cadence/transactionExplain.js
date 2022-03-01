export const transactionExplain = `Here we are defining initially the types that we are expected to return for each of the listed variables.

Firstly we borrow the storefront from the account that contains a storefront in it. Afterwards we need to get the capability to withdraw NFT's from the account so that the storefront can withdraw the correct NFT of the correct Type.

After that, we'll also get the Vault receiver capability so that it can be included in the sales cut struct. That way when it's time to pay out the earnings from the NFT, this vault will receive its cut.

Once that's all done, we take self.storefront and call the createListing function and pass in all the parameters need. Then we execute the transaction.

`