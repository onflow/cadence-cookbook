export const transactionExplain = `Before you execute the transaction to mint an NFT you need to borrow the admin resource from the AuthAccount if it has one. If it does, you then borrow the series you would like access to for minting NFTS.

You also need to get the capability for the receiver to store the NFT in their collection.

After that, you're able to access the mint function for NFTS in the contract. Enter in all the parameters needed and then execute your function.

`