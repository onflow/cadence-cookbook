export const transactionExplain = `To mint a moment you will need to borrow a reference to the admin resource from the Auth Account.

Once you do, you will need to borrow the set that you would like access to by calling the borrowSet function. This gets whatever setID is created that you want to have access to.

You will also need to have the capability to receive the NFT or NFTS for the receiving account referenced.

In this case we use the batchMintMoment to return a collection of minted NFTS that we can store it into the receivers collection.

Then we specify what playID we would like to mint and how many moments will be minted. After that we deposit the collection that is returned into the receivers account.

`