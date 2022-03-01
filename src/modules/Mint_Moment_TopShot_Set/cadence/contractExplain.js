export const contractExplain = `You would find the function the mint a moment in your Set resource. To mint a moment you would call on this function and input the playID you would like to mint.

Remember when we added our play to the set we intialized the moments as 0 so when you mint a moment it will add 1 to that minted moment per play. Before we mint however, we check to see if the play exists in the set or if the play is retired.

If not, we then get the number of moments minted for this play and store that number variable in numInPlay. We would then mint a new Moment as an NFT resource type. We would send in all the parameters specified for the NFT and once we mint that new Moment we then increase the number of moments minted for this play by one.

We then return the moment with is of an NFT resource type, to later be stored in a collection in a receivers account.

We could also batch mint these moments. This would save a lot of time if you wanted to mint 60,000 moments. When doing this, you would have to create a collection resource that would deposit all of the minted NFT's into it.

Once that happens you would return the collection resource and then deposit that into the receivers collection.

`