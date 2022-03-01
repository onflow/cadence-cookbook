export const contractExplain = `Once you've created a set in a series, you can now mint as many NFT's as your set allows. The parameters you take in are a recepient with the capability to hold these NFT's in their collection, a tokenID and the setID you will be minting these NFT's into.

Before you execute the function, you check to see if the set exists and if the set has not exceeded the max # of editions(NFT's) allowed to be minted per set.

If that all looks good, you then add to the editions minted in the current set. Then you deposit the NFT into the recepients collection.

Afterwards you increase the totaly supply of the NFT's and you update the minted # of editions in the current set.

`