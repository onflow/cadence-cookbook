import NFTStorefront from 0x03
import NonFungibleToken from 0x02
import ExampleNFT from 0x04
import FungibleToken from 0x01
    
// This transaction sets up account 0x01 for the marketplace tutorial
// by publishing a Vault reference and creating an empty NFT Collection.
transaction {

    let storefront: &NFTStorefront.Storefront 

    let exampleNFTProvider: Capability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>

    let tokenReceiver: Capability<&FungibleToken.Vault{FungibleToken.Receiver}>
    
    prepare(acct: AuthAccount) {
    
        self.storefront = acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) ?? panic("can't borrow storefront")

        if acct.getCapability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPrivatePath).check() == false {
            acct.link<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPrivatePath, target: ExampleNFT.CollectionStoragePath)
        }

        self.exampleNFTProvider = acct.getCapability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPrivatePath)!
        assert(self.exampleNFTProvider.borrow() != nil, message: "Missing or mis-typed ExampleNFT.Collection provider")


        self.tokenReceiver = acct.getCapability<&FungibleToken.Vault{FungibleToken.Receiver}>(/public/MainReceiver)!
        assert(self.tokenReceiver.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

        let saleCut = NFTStorefront.SaleCut(
            receiver: self.tokenReceiver,
            amount: 10.0
        )

        self.storefront.createListing(
            nftProviderCapability: self.exampleNFTProvider, 
            nftType: Type<@NonFungibleToken.NFT>(), 
            nftID: 0, 
            salePaymentVaultType: Type<@FungibleToken.Vault>(), 
            saleCuts: [saleCut]
            )

        log("storefront listing created")
    }
}
