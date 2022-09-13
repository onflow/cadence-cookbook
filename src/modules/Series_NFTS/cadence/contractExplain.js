export const contractExplain = `When creating an NFT that implements Sets and Series, you need to define structures that lay out how the sets and series are to be laid out. In this case we will go through series first.

Here we create first two variable size dictionaries. One contains a dictionary that holds all of our SeriesData structs and the scond is a dictionary of all of our Series resources. This helps us manage and make sure we aren't duplicating Series.

Afterwards we layout the structure of how we want our SeriesData to look. In this case we have a unique ID and some metadata, but you can add whatever type of variables you would like, key to note is to have a unique ID so that you are managing series appropriately.

Once the struct is created, we then create our Series resource that lists all the functions we are able to do when we have a series resource in our account. In this instance we're able to create NFT sets which will then lead to us being able to mint NFTS into sets of a series.

In order to be able to mint NFTS we first have to create a series resource in our account. In this instance we have an admin resource that is store in the deployer of the smart contracts account.

Here we have a function that allows us to addSeries and when that happens we are then able to create sets and mint NFTS.

We also include the ability to borrow a series so that we can access the functions in the series and do what we need to there.

`