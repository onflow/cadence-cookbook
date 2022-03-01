export const contractExplain = `In the TopShot contract when you are creating a Play that will be included in sets as a moment you first have to start your contract off by creating a dictionary that stores all of the plays you create. Also you would create a variable called nextPlayID to make sure you aren't overlapping on ID's.

Then you would create a structure that would be stored in the playDatas dictionary. Here, all that is needed for the Play struct is to input a parameter for metadata which is an object containing strings.

Once these are established, you would have an admin resource that would hold the ability to create a new play. For more information on Admin resources check out the Admin resource example.

Here you would call the createPlay function that takes in a metadata argument. You would then create the new play by passing in the metadata. You would also take the newPlay's ID so that you can use it to assign the struct to the dictionary.

Then you would increment the ID so that it can't be used again, emit a PlayCreated event, and store the newPlay in the dictionary.


`