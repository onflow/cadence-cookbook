export const transactionExplain = `Before starting our script, we create a struct for us that will contain all the metadata we are pulling from our KittyItems NFT and lay it out for us in a nice view.

When starting our script, we borrow a capability to the account we are looking to get the metadata of an NFT from. Once we borrow their public capability, we then borrow a kitty item from that collection by calling the borrowKittyItem function and inputing the paramater for the ID we would like.

Once we have access to that NFT, we then have access to the metadata views functions in the NFT. We then call the resolveView function for the MetadataViews.Display type and we then are able to get back the necessary items in the view to fill out our KittyItem struct that we defined in our script earlier.

Once we have that information we assign the view to the display variable. We have our owner be defined by the address of the NFT holder. We assign the ipfsThumbnail variable from the result we get back from our display.

We then input all the necessary parameters for our KittyItem struct and return the structure. To note, we do take our ipfsThumbnail and call a function on it so that we create an easy path to our ipfs link for easy viewing of the image stored on there.

Once that happens we are done with the script and metadata should be returned.

`