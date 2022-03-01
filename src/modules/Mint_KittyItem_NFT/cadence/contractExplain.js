export const contractExplain = `Minting a Kitty Item NFT follows a similar path as the NFT Minting example. Things to note however are the different ways to initialize the NFT for Kitty Items.

With the Kitty Items NFT it operates on what kind of item it is, literally named 'Kind' and what type of rarity it is. The Kind and Rarity are stored in enums in the contract that you can checkout when you open the playground version of this contract.

It will then store the Kind and Rarity as well as the ID to create the NFT that will be minted and deposited into a receivers account.

When you look at the NFTMinter resource you can see how it takes in the recepient, kind, and rarity so that the NFT can be properly minted.

`