export const contractExplain = `Simlarly to creating a Play, when you're creating a set you want to have dictionaries. The first dictionary would be one for SetData structures and the second dictionary would be for Set Resources. You'd also include a nextSetID that makes sure you don't overlap on sets.

Your SetData struct would contain information pertaining to the naming of the Set. That's the only parameter you would need to pass in the create a new struct. The SetData would take in nextSetID variable and the currentSeries variable to finishing creating the struct.

You would also need to define a resource called Set. When this resource is being initialized it will need to have an ID defined, an array that can store plays you have created, a boolean variable that checks what plays have been retired from being created in the current set, a lock variable that determines if you can add more plays to the set, and a dictionary that maps how many moments have been minted per play.

When you initialize a set, you also take in a name parameter that gets passed into the SetData struct so that it can be added to the contracts storage in the SetData dictionary. Once that is created you have a set resource that you can put minting functions and whole bunch of other things in to deal with creating NFTS and adding Plays.

To create a set, you would have a function in your admin resource that would allow you to do so. You would call the createSet function and pass in a name for the set. You'd create a Set by calling the create function on a resource and pass in the parameters. You'd then increment your setID so that it's not used again. Then you'd get the ID of the newly created Set resource, emit an event that you created a set and then add the new Set resource to be mapped in the Sets dictionary.

`