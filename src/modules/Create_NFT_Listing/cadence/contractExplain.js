export const contractExplain = `When creating an NFT listing it will need a few parameters passed in, in order to make the listing go through.

First you will need to pass in a capability to the NFT that allows us to withdraw the NFT when it is being sold to the purchaser. Remember to link the capability in your private storage path as you do not want anyone to be able to withdraw any NFT from your account!

You'll also need to pass in the type of NFT that is being sold, as well as the NFT ID that is being sold. Afterwards you pass in the payment vault type for whichever crypto currency users will be purchasing the listing in.

You'll also include a struct called SaleCut. These Sales Cuts will determine the total price of your item. Let's say you want to have a marketplace fee implemented in your transaction. You would include a sales cut struct that would be passed in, as well as a sales cut that will go to the seller of the item. You can check out the example for multiple sales cuts to see how this would be implemented.

Lastly you would pass in the storefrontID which is the ID of your storefront containing the listing. Once all of this information is passed in, you have created a listing in your Storefront.

Afterwards you would link the public capability to the ListingPublic interface so that anyone can call the purchase function and buy your NFT.

`