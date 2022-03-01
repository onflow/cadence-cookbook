export const contractExplain = `Once you have a set created and you've created some plays, you can then add a play to your set by calling the addPlay function in your set.

You would need to pass in the playId's to have them available in the set. Before the function goes through it will check to see if the playID actually exists. If not you'll need to use another one, or create on.

It will also check if the Set has been locked, meaning no more plays can be added, or if the play has already been added to the set.

Once that check is complete, it will add the play to the array of play ID's in the set. The function will also include the play ID in a retired dictionary and set the boolean as false. The number minted per play ID will also be included in a dictionary and initialized as 0.

Finally you would emit an event that the play has been added to the set.

`