export const contractExplain = `Similarly to how you had created and assigned variables for a Series and SeriesData, you do the same for setData so that each set is managed correctly and you don't create the same set.

Afterwards you would create a struct for the NFT Set Data that would lay out all the variables you need for a set and what you need to do to initialize it.

Then you would have your series resource that would only exist in your account if you had used the admin account to create a new series. Once that series is created you have the availability to access the addNftSet function to create a new set.

Here you would enter in all the necessary parameters that go into creating an NFT Set. Once that's taken in you first check to make sure that the series doesn't already contain that setId.

If that is true then you establish the new NFTSetData struct. Afterwards you add the setId to the setId's array. Then you initialize the number of NFT's minted to 0 based on your setID # in the series because you are creating a brand new set.

Afterwards you store the setId and the NFTSetData struct in the setData dictionary where all the sets are able to be tracked.

`