import { faAddressCard, faBuilding, faUser } from "@fortawesome/free-regular-svg-icons"
import { faAddressBook, faCoffee, faAward, faBarcode, faDatabase, faDice, faDiceD6, faDiceSix, faGlasses, faMoneyCheck, faSimCard, faUserEdit, faVrCardboard, faBasketballBall } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CadenceCode } from "./SmartContractExamples"
import { TXexamples } from "./TransactionExamples"



export const flowExamples = [
    {
        ExampleName: "NFT Minter", 
        ExampleDescription: "This is for minting NFT's. It includes the minting resource that you can use in your smart contract, as well as the transaction to mint from the deployed account. It can be included in your smart contract along with the NFT Standard", 
        ExampleCode: CadenceCode[0].Code, 
        TransactionCode: TXexamples[0].Tx, 
        Category:"Minting", 
        CadenceExplainer: `This resource should be implemented in your contract if you would like to mint NFT's. 
        
        It also requires other items to be implemented into the contract such as a 'NFT' resource that has metadata defined and conforms to the NFT Standard, as well as a recepient account which has the capability to deposit NFT's into their collection. 
        
        To see how to link a Collection Interface to an account, check out the linking collections example.
        
        `,
        TransactionExplainer: `This transaction is used to mint an NFT from the account that has the minting resource saved to it. You are able to give other users minting rights, check out the Admin Minting example for that.
        
        In this case you are defining who is the person that will be receiving the NFT and checking if they actually have the capability to store the NFT in their collection before moving forward. As well as borrowing the Minting resource to mint new NFT's that should be in the account that has the minter saved.

        At the end you are executing the transaction and minting the NFT.
        
        `,
        PlaygroundLink:"https://play.onflow.org/e5aa9cbb-e7c3-4b69-8b1b-259893584e00?type=tx&id=bed0ca24-965d-480f-ba97-314073e9d120",
        Icon:<FontAwesomeIcon icon={faVrCardboard} color='white' size='lg'/>, 
        BgColor:"#6a5acd"
    },
    {
        ExampleName: "Collection's for holding NFT's", 
        ExampleDescription: "This resource holds your NFT's in a collection in your account", 
        ExampleCode: CadenceCode[1].Code, 
        TransactionCode:TXexamples[1].Tx, 
        Category:"Minting", 
        CadenceExplainer: `This Collection Resource is used to hold all of your NFT resources. It is one of the first instances you will see where a resource owns another resource. 
        
        Within the collection there are also functions that lay out how to withdraw, deposit, check if an NFT exists, return all NFT's, and destory NFT's. 
        
        You usually include a interface (NFTReceiver) to your collection so that others may deposit, check if NFT's exist, and get their ID's from an account.
        
        `,
        TransactionExplainer: `This transaction is showing us how we would create a new empty collection and save that resource into a users account. 
        
        We then create a public capability to this resource by linking the interface that contains functions the public can use on this resource for this account.
        
        `,
        PlaygroundLink:"https://play.onflow.org/5f7fb413-2dda-44dd-ab9d-429e1dece6d7?type=tx&id=4840ed82-4fe0-4560-a222-07b8fa8f72ac",
        Icon:<FontAwesomeIcon icon={faAddressBook} color='white' size='lg'/>, 
        BgColor:"#6c8d7d"
    },
    {
        ExampleName: "Creating Collection For Account", 
        ExampleDescription: "Create a new collection for an existing Flow account that doesn't have one so that it can store your NFT's in it.", 
        ExampleCode: CadenceCode[2].Code, 
        TransactionCode:TXexamples[2].Tx, 
        Category:"Minting", 
        CadenceExplainer: `This is a function you would include in your smart contract to create collections for accounts without them.

        A collection resource is returned which you then save into your account with a transaction.
        
        `,
        TransactionExplainer: `This transaction is showing us how we would create a new empty collection and save that resource into a users account. 
        
        We then create a public capability to this resource by linking the interface that contains functions the public can use on this resource for this account.
        
        `,
        PlaygroundLink:"https://play.onflow.org/e5aa9cbb-e7c3-4b69-8b1b-259893584e00?type=tx&id=dd997d02-ffcc-4b37-91ea-a4e571a46624",
        Icon:<FontAwesomeIcon icon={faAddressCard} color='white' size='lg'/>, 
        BgColor:"#f4a460"
    },
    {
        ExampleName: "NFT with Metadata", 
        ExampleDescription: "An NFT with metadata in it. This NFT also uses the metadata contract to establish easy views for displaying the NFT's metadata", 
        ExampleCode: CadenceCode[3].Code, 
        TransactionCode:TXexamples[3].Tx, 
        Category:"Metadata", 
        CadenceExplainer: `This is a NFT resource that abides by the NFT standard and the Metadata standard. It imports both interfaces into the resource.

        From there, metadata such as id, name, thumbnail, and description are defined and initialized. The functions to resolveView and getViews are also included to make viewing the metadata easy. 
        
        `,
        TransactionExplainer: `Because the above smart contract has metadata in the NFT that is initialized, when minting the NFT you will need to send in those parameters in your transaction.

        Here we borrow the minter from the account that holds the NFT Minter. We then take the address of the recepient and make sure they have the capability to store the NFT. Afterwards we mint the NFT with the parameters specified.
        
        `,
        PlaygroundLink:"https://play.onflow.org/41befd2d-31f3-47f0-ae30-aad776961e31?type=account&id=2a2a417e-5860-419a-b42e-61f540d28a39",
        Icon:<FontAwesomeIcon icon={faSimCard} color='white' size='lg'/>, 
        BgColor:"#f7b1b6"
    },
    {
        ExampleName: "Metadata Views", 
        ExampleDescription: "This is how you use the metadata contract to actually access the views to show your metadata", 
        ExampleCode: CadenceCode[4].Code, 
        TransactionCode:TXexamples[4].Tx, 
        Category:"Metadata", 
        CadenceExplainer: `The following functions are to be included in your NFT resource when creating a contract.

        getViews tells someone all the views your NFT has, while resolveView returns the metadata from that view.

        In your Collection resource you will have the borrowViewResolver function that is available in the Metadata Contract. You will need to import the MetadataViews.ResolverCollection interface into your collection.
        
        This returns the capability for the NFT to use the above functions.
        
        `,
        TransactionExplainer: `Here we borrow the capability to use the borrowViewResolver function. 
        
        When that is done, we then have the ability to use the functions resolveView and getViews if they are in our NFT resource.

        After that we return the display.
        
        `,
        PlaygroundLink:"https://play.onflow.org/41befd2d-31f3-47f0-ae30-aad776961e31?type=script&id=60b68d62-f15e-402e-9048-ef3f27e224af",
        Icon:<FontAwesomeIcon icon={faGlasses} color='white' size='lg'/>, 
        BgColor:"#a3d9c9",
        Script: true
    },
    {
        ExampleName: "Multiple Metadata Views", 
        ExampleDescription: "Have more views you want to create for metadata? This is how you create new views in your smart contract and how you execute a transaction to display them all", 
        ExampleCode: CadenceCode[5].Code, 
        TransactionCode:TXexamples[5].Tx, 
        Category:"Metadata", 
        CadenceExplainer: `To have more than just the display view, you can create your own Struct in your contract so that it may be used as a view in your NFT.

        Here we create a Traits structure. We then include the Traits view in the getViews function as well as include it as an option in the resolve view function.
        
        `,
        TransactionExplainer: `Now, just as we did with the Display view, we resolve the view for the Traits view and can return it as a dictionary, or however you choose.
        
        Now we have both views and metadata available with very little code needed.
        
        `,
        PlaygroundLink:"https://play.onflow.org/41befd2d-31f3-47f0-ae30-aad776961e31?type=script&id=baf002e4-7124-4ffb-894e-5c04e95629de",
        Icon:<FontAwesomeIcon icon={faDatabase} color='white' size='lg'/>, 
        BgColor:"#757575",
        Script: true
    },
    {
        ExampleName: "Token Vault", 
        ExampleDescription: "This explains the vault resource that can be created in order for you to handle fungible tokens.", 
        ExampleCode: CadenceCode[6].Code, 
        TransactionCode:TXexamples[6].Tx, 
        Category:"Fungible Token", 
        CadenceExplainer: `This is a vault resource in a smart contract that can be stored in a users account. 
        
        It keeps track of the total balance of tokens as well as the functions to withdraw and deposit tokens.

        Interfaces such as Provider, Receiver, and Balance are included that allow users to send you money when executing a transaction.
        
        `,
        TransactionExplainer: `Here we are creating a new Vault resource into an account. 

        When that is created and stored into their private storage, we then create public capabilities that others can use to check balance, or deposit tokens.

        Once we do that, we check to make sure that the capabilities were indeed created and then we are done with the transaction.
        
        `,
        PlaygroundLink:"https://play.onflow.org/ef2fe054-148b-4c75-94f1-95bd33b6ce00?type=tx&id=1629c020-d908-475e-87db-c81d1c496964",
        Icon:<FontAwesomeIcon icon={faAward} color='white' size='lg'/>, 
        BgColor:"#50bfe6"
    },
    {
        ExampleName: "Withdrawing Tokens", 
        ExampleDescription: "This is included in your smart contract when you would like to implement token withdrawls. Also useful for transferring tokens between accounts.", 
        ExampleCode: CadenceCode[7].Code, 
        TransactionCode:TXexamples[7].Tx, 
        Category:"Fungible Token", 
        CadenceExplainer: `When setting up a withdraw function in your contract, you can create an interface that's only accessible to your private/storage path in your account so that others aren't able to withdraw funds without you approving.

        Here we are making sure that after the withdrawl occurs your balance that was withdrawn was the same as the balance of the withdrawn vault. 
        
        `,
        TransactionExplainer: `This transaction is showing us how a transfer occurs from one vault to the other. It includes both withdrawing of tokens from an account and depositing into the receiving account.

        Before we execute the transfer we create a temporary vault that holds our balance being transfered. Afterwards we borrow a reference to the vault and then call a function that says to withdraw 10 tokens from it.

        Afterwards we execute the transaction by getting the account of the receiver, making sure they have the capability to receive, and then depositing the balance into their account.

        Note that the withdrawn balance returns a resource, which is why in order for it to be deposited you need to move a resource into the deposit function.
        
        `,
        PlaygroundLink:"https://play.onflow.org/ef2fe054-148b-4c75-94f1-95bd33b6ce00?type=tx&id=e849d0d1-4196-432c-b9be-eab08c5595a9",
        Icon:<FontAwesomeIcon icon={faMoneyCheck} color='white' size='lg'/>, 
        BgColor:"#238534"
    },
    {
        ExampleName: "Creating a Vault", 
        ExampleDescription: "This explains the function that would be used for you to create a new vault in others accounts", 
        ExampleCode: CadenceCode[8].Code, 
        TransactionCode:TXexamples[8].Tx, 
        Category:"Fungible Token", 
        CadenceExplainer: `This function is included in the smart contract so that anyone can create a vault resource and then save it to their account.
        
        `,
        TransactionExplainer: `Here we are creating a new Vault resource into an account. 

        When that is created and stored into their private storage, we then create public capabilities that others can use to check balance, or deposit tokens.

        Once we do that, we check to make sure that the capabilities were indeed created and then we are done with the transaction.
        
        `,
        PlaygroundLink:"https://play.onflow.org/ef2fe054-148b-4c75-94f1-95bd33b6ce00?type=tx&id=1629c020-d908-475e-87db-c81d1c496964",
        Icon:<FontAwesomeIcon icon={faBuilding} color='white' size='lg'/>, 
        BgColor:"#f2cda0"
    },
    {
        ExampleName: "Vault Minter", 
        ExampleDescription: "This resource is used by the admin to mint more tokens.", 
        ExampleCode: CadenceCode[9].Code, 
        TransactionCode:TXexamples[9].Tx, 
        Category:"Fungible Token", 
        CadenceExplainer: `This resource is created so that more tokens may be minted. Ideally not many people should have access to this, only admins.

        The VaultMinter resource takes in an amount as well as a capability that implements the Receiver interface as its arguments.

        It checks to make sure the capability exists to receive, and once it does that it adds the amount in the parameters to the total minted supply.

        Afterwards that newly created balance is deposited into the receivers account.
        
        `,
        TransactionExplainer: `When doing the transaction, you first need to check to see if there is a VaultMinter that can be referenced by the signer of the transaction.

        If so, then you get an account that has the capability to receive tokens and once you execute the transaction you include the amount of tokens to be minted, as well as the receivers capability in the arguments.
        
        `,
        PlaygroundLink:"https://play.onflow.org/ef2fe054-148b-4c75-94f1-95bd33b6ce00?type=tx&id=899a81c3-a141-4021-a2b6-0e78ee8a105a",
        Icon:<FontAwesomeIcon icon={faBarcode} color='white' size='lg'/>, 
        BgColor:"#882d17"
    },
    {
        ExampleName: "Implementing Series for NFT's", 
        ExampleDescription: "This cadence code will help you being to understand how to implement series and sets into your NFT project", 
        ExampleCode: CadenceCode[10].Code, 
        TransactionCode:TXexamples[10].Tx, 
        Category:"Sets And Series", 
        CadenceExplainer: `When creating an NFT that implements Sets and Series, you need to define structures that lay out how the sets and series are to be laid out. In this case we will go through series first.

        Here we create first two variable size dictionaries. One contains a dictionary that holds all of our SeriesData structs and the scond is a dictionary of all of our Series resources. This helps us manage and make sure we aren't duplicating Series.

        Afterwards we layout the structure of how we want our SeriesData to look. In this case we have a unique ID and some metadata, but you can add whatever type of variables you would like, key to note is to have a unique ID so that you are managing series appropriately.

        Once the struct is created, we then create our Series resource that lists all the functions we are able to do when we have a series resource in our account. In this instance we're able to create NFT sets which will then lead to us being able to mint NFT's into sets of a series.

        In order to be able to mint NFT's we first have to create a series resource in our account. In this instance we have an admin resource that is store in the deployer of the smart contracts account.

        Here we have a function that allows us to addSeries and when that happens we are then able to create sets and mint NFT's.

        We also include the ability to borrow a series so that we can access the functions in the series and do what we need to there.

        `,
        TransactionExplainer: `Here we take the admin resource from the AuthAccount and make sure that it contains one. 

        Once we are positive it contains the admin resource in its account, we then call the addSeries function in order to add a Series resource to use later.
        
        `,
        PlaygroundLink:"https://play.onflow.org/a7d190b6-e0f1-4acc-b34c-f37b39fbab33?type=tx&id=c252ea40-397c-43b0-acfb-c504a7268175&storage=none",
        Icon:<FontAwesomeIcon icon={faDice} color='white' size='lg'/>, 
        BgColor:"#2e8b57"
    },
    {
        ExampleName: "Creating a Set in Series", 
        ExampleDescription: "Once you've implemented a series for your NFT, you now create Sets so that each NFT is part of a set in a series.", 
        ExampleCode: CadenceCode[11].Code, 
        TransactionCode:TXexamples[11].Tx, 
        Category:"Sets And Series", 
        CadenceExplainer: `Similarly to how you had created and assigned variables for a Series and SeriesData, you do the same for setData so that each set is managed correctly and you don't create the same set.

        Afterwards you would create a struct for the NFT Set Data that would lay out all the variables you need for a set and what you need to do to initialize it.

        Then you would have your series resource that would only exist in your account if you had used the admin account to create a new series. Once that series is created you have the availability to access the addNftSet function to create a new set.

        Here you would enter in all the necessary parameters that go into creating an NFT Set. Once that's taken in you first check to make sure that the series doesn't already contain that setId.

        If that is true then you establish the new NFTSetData struct. Afterwards you add the setId to the setId's array. Then you initialize the number of NFT's minted to 0 based on your setID # in the series because you are creating a brand new set.

        Afterwards you store the setId and the NFTSetData struct in the setData dictionary where all the sets are able to be tracked.

        `,
        TransactionExplainer: `Here you execute a transaction to create a new set. First you borrow a reference to the admin resource from the AuthAccount and afterwards you use the admin account to access the borrowSeries function.

        Once that happens you are able to get access to the series you input in the parameters if it exists. After that you have access the addNftSet function to add as many sets as you would like.

        `,
        PlaygroundLink:"https://play.onflow.org/a7d190b6-e0f1-4acc-b34c-f37b39fbab33?type=tx&id=534c6a6a-e87a-4f10-b134-835deeff96ff&storage=none",
        Icon:<FontAwesomeIcon icon={faDiceSix} color='white' size='lg'/>, 
        BgColor:"#220a00"
    },
    {
        ExampleName: "Minting NFT's in a Set", 
        ExampleDescription: "You've created your set in your series and now you're ready to mint your NFT's. This code shows you how to do that.", 
        ExampleCode: CadenceCode[12].Code, 
        TransactionCode:TXexamples[12].Tx, 
        Category:"Sets And Series", 
        CadenceExplainer: `Once you've created a set in a series, you can now mint as many NFT's as your set allows. The parameters you take in are a recepient with the capability to hold these NFT's in their collection, a tokenID and the setID you will be minting these NFT's into.

        Before you execute the function, you check to see if the set exists and if the set has not exceeded the max # of editions(NFT's) allowed to be minted per set.

        If that all looks good, you then add to the editions minted in the current set. Then you deposit the NFT into the recepients collection.

        Afterwards you increase the totaly supply of the NFT's and you update the minted # of editions in the current set.

        `,
        TransactionExplainer: `Before you execute the transaction to mint an NFT you need to borrow the admin resource from the AuthAccount if it has one. If it does, you then borrow the series you would like access to for minting NFT's.

        You also need to get the capability for the receiver to store the NFT in their collection.

        After that, you're able to access the mint function for NFT's in the contract. Enter in all the parameters needed and then execute your function.

        `,
        PlaygroundLink:"https://play.onflow.org/a7d190b6-e0f1-4acc-b34c-f37b39fbab33?type=tx&id=d6734d42-6a63-40cc-a8f9-529421e9952d&storage=none",
        Icon:<FontAwesomeIcon icon={faDiceD6} color='white' size='lg'/>, 
        BgColor:"#6a5acd"
    },
    {
        ExampleName: "Admin Resource", 
        ExampleDescription: "Using an admin resource to have exclusive access to functions in a smart contract.", 
        ExampleCode: CadenceCode[13].Code, 
        TransactionCode:TXexamples[13].Tx, 
        Category:"Admin", 
        CadenceExplainer: `An admin resource can be created and used as a way to only give access to certain key functions to specific accounts. In this instance our Admin resource contains the ability to create a series and the ability to borrow and return a Series resource.

        Additionaly, this admin resource can create a new admin resource and give somebody else the ability to have access to this resource in their account.

        At the end, when you are initializing your contract you are creating the Admin resource and saving it into the deployer of the smart contracts account. You would also create a private capability to the Admin account for a reference to all of the functions.
        
        `,
        TransactionExplainer: `Here we use the transaction to create a series from the admin account. We borrow a reference to the Admin resource and then use it to execute the addSeries function.

        `,
        PlaygroundLink:"https://play.onflow.org/a7d190b6-e0f1-4acc-b34c-f37b39fbab33?type=tx&id=c252ea40-397c-43b0-acfb-c504a7268175&storage=none",
        Icon:<FontAwesomeIcon icon={faUser} color='white' size='lg'/>, 
        BgColor:"#6c8d7d"
    },
    {
        ExampleName: "Add Admin Resource to Account", 
        ExampleDescription: "When you want to give someone else access to the admin resource.", 
        ExampleCode: CadenceCode[14].Code, 
        TransactionCode:TXexamples[14].Tx, 
        Category:"Admin", 
        CadenceExplainer: `This code is used to create a new Admin resource which can then be saved to another users account

        `,
        TransactionExplainer: `Before executing this transaction you first need to borrow the Admin resource from the 'acct'. Once that is borrowed, you then take 'acct2' and save the resource that is returned when you call the createNewAdmin() funtion to your storage path.

        `,
        PlaygroundLink:"https://play.onflow.org/a7d190b6-e0f1-4acc-b34c-f37b39fbab33?type=tx&id=1e1128cf-b88e-4f10-9877-247b71a62ee4&storage=none",
        Icon:<FontAwesomeIcon icon={faUserEdit} color='white' size='lg'/>, 
        BgColor:"#f4a460"
    },
    {
        ExampleName: "Create a TopShot Play", 
        ExampleDescription: "Using the TopShot contract, this is how you would create a Play to start adding them to your sets and mint moments out of them.", 
        ExampleCode: CadenceCode[15].Code, 
        TransactionCode:TXexamples[15].Tx, 
        Category:"TopShot", 
        CadenceExplainer: `In the TopShot contract when you are creating a Play that will be included in sets as a moment you first have to start your contract off by creating a dictionary that stores all of the plays you create. Also you would create a variable called nextPlayID to make sure you aren't overlapping on ID's.

        Then you would create a structure that would be stored in the playDatas dictionary. Here, all that is needed for the Play struct is to input a parameter for metadata which is an object containing strings.

        Once these are established, you would have an admin resource that would hold the ability to create a new play. For more information on Admin resources check out the Admin resource example.

        Here you would call the createPlay function that takes in a metadata argument. You would then create the new play by passing in the metadata. You would also take the newPlay's ID so that you can use it to assign the struct to the dictionary.

        Then you would increment the ID so that it can't be used again, emit a PlayCreated event, and store the newPlay in the dictionary.

        `,
        TransactionExplainer: `To create a play, you first need to get a reference to the admin resource from the AuthAccount. 
        
        Once you receive that reference you can then create a play that gets stored in the playDatas dictionary.

        `,
        PlaygroundLink:"https://play.onflow.org/15c1e86e-010c-4a7c-bcfd-98a1bddc36a7?type=tx&id=2b1db24f-95fa-44fa-8a7c-149e47c5c226&storage=none",
        Icon:<FontAwesomeIcon icon={faBasketballBall} color='white' size='lg'/>, 
        BgColor:"#f7b1b6"
    },
    {
        ExampleName: "Create a TopShot Set", 
        ExampleDescription: "Using the TopShot contract, this is how you would create a set so that you could add plays to them and mint moments from those plays.", 
        ExampleCode: CadenceCode[16].Code, 
        TransactionCode:TXexamples[16].Tx, 
        Category:"TopShot", 
        CadenceExplainer: `Simlarly to creating a Play, when you're creating a set you want to have dictionaries. The first dictionary would be one for SetData structures and the second dictionary would be for Set Resources. You'd also include a nextSetID that makes sure you don't overlap on sets.

        Your SetData struct would contain information pertaining to the naming of the Set. That's the only parameter you would need to pass in the create a new struct. The SetData would take in nextSetID variable and the currentSeries variable to finishing creating the struct.

        You would also need to define a resource called Set. When this resource is being initialized it will need to have an ID defined, an array that can store plays you have created, a boolean variable that checks what plays have been retired from being created in the current set, a lock variable that determines if you can add more plays to the set, and a dictionary that maps how many moments have been minted per play.

        When you initialize a set, you also take in a name parameter that gets passed into the SetData struct so that it can be added to the contracts storage in the SetData dictionary. Once that is created you have a set resource that you can put minting functions and whole bunch of other things in to deal with creating NFT's and adding Plays.

        To create a set, you would have a function in your admin resource that would allow you to do so. You would call the createSet function and pass in a name for the set. You'd create a Set by calling the create function on a resource and pass in the parameters. You'd then increment your setID so that it's not used again. Then you'd get the ID of the newly created Set resource, emit an event that you created a set and then add the new Set resource to be mapped in the Sets dictionary.

        `,
        TransactionExplainer: `To create a set, you first need to get a reference to the admin resource from the AuthAccount. 
        
        Once you receive that reference you can then create a set that gets stored in the sets and setsData dictionary.

        `,
        PlaygroundLink:"https://play.onflow.org/15c1e86e-010c-4a7c-bcfd-98a1bddc36a7?type=tx&id=9e42f1aa-3f25-4ffc-87f0-b9d109e1d851&storage=none",
        Icon:<FontAwesomeIcon icon={faBasketballBall} color='white' size='lg'/>, 
        BgColor:"#a3d9c9"
    },
    {
        ExampleName: "Add a Play to TopShot Set", 
        ExampleDescription: "Once you have a set created and some plays, you can use this to add a play to a TopShot Set that can later be minted.", 
        ExampleCode: CadenceCode[17].Code, 
        TransactionCode:TXexamples[17].Tx, 
        Category:"TopShot", 
        CadenceExplainer: `Once you have a set created and you've created some plays, you can then add a play to your set by calling the addPlay function in your set.

        You would need to pass in the playId's to have them available in the set. Before the function goes through it will check to see if the playID actually exists. If not you'll need to use another one, or create on.

        It will also check if the Set has been locked, meaning no more plays can be added, or if the play has already been added to the set.

        Once that check is complete, it will add the play to the array of play ID's in the set. The function will also include the play ID in a retired dictionary and set the boolean as false. The number minted per play ID will also be included in a dictionary and initialized as 0.

        Finally you would emit an event that the play has been added to the set.

        `,
        TransactionExplainer: `To add a play to a set you will need to borrow a reference to the admin resource from the Auth Account. 

        Once you do, you will need to borrow the set that you would like access to by calling the borrowSet function. This gets whatever setID is created that you want to have access to.

        When that happens you would just use the addPlay function to add whichever plays you have already created to this set.

        `,
        PlaygroundLink:"https://play.onflow.org/15c1e86e-010c-4a7c-bcfd-98a1bddc36a7?type=tx&id=c6627028-4fbc-416a-b8d7-0c433e6a85f6&storage=none",
        Icon:<FontAwesomeIcon icon={faBasketballBall} color='white' size='lg'/>, 
        BgColor:"#757575"
    },
    {
        ExampleName: "Minting a Moment in TopShot Set", 
        ExampleDescription: "You've added plays in your set, now it's time to mint them. This code will mint moments or plays in your TopShot sets.", 
        ExampleCode: CadenceCode[18].Code, 
        TransactionCode:TXexamples[18].Tx, 
        Category:"TopShot", 
        CadenceExplainer: `You would find the function the mint a moment in your Set resource. To mint a momemnt you would call on this function and input the playID you would like to mint.

        Remember when we added our play to the set we intialized the moments as 0 so when you mint a moment it will add 1 to that minted moment per play. Before we mint however, we check to see if the play exists in the set or if the play is retired.

        If not, we then get the number of momemnts minted for this play and store that number variable in numInPlay. We would then mint a new Moment as an NFT resource type. We would send in all the parameters specified for the NFT and once we mint that new Moment we then increase the number of moments minted for this play by one.

        We then return the moment with is of an NFT resource type, to later be stored in a collection in a receivers account.

        We could also batch mint these moments. This would save a lot of time if you wanted to mint 60,000 moments. When doing this, you would have to create a collection resource that would deposit all of the minted NFT's into it.

        Once that happens you would return the collection resource and then deposit that into the receivers collection.

        `,
        TransactionExplainer: `To mint a moment you will need to borrow a reference to the admin resource from the Auth Account. 

        Once you do, you will need to borrow the set that you would like access to by calling the borrowSet function. This gets whatever setID is created that you want to have access to.

        You will also need to have the capability to receive the NFT or NFT's for the receiving account referenced.

        In this case we use the batchMintMoment to return a collection of minted NFT's that we can store it into the receivers collection.

        Then we specify what playID we would like to mint and how many moments will be minted. After that we deposit the collection that is returned into the receivers account.

        `,
        PlaygroundLink:"https://play.onflow.org/15c1e86e-010c-4a7c-bcfd-98a1bddc36a7?type=tx&id=d24e3b31-7576-4e7e-b27e-2ed422406187&storage=none",
        Icon:<FontAwesomeIcon icon={faBasketballBall} color='white' size='lg'/>, 
        BgColor:"#50bfe6"
    },
    // {
    //     ExampleName: "Admin Resource", 
    //     ExampleDescription: "", 
    //     ExampleCode: "", 
    //     TransactionCode:"", 
    //     Category:"", 
    //     CadenceExplainer: `

    //     `,
    //     TransactionExplainer: `

    //     `,
    //     PlaygroundLink:"https://play.onflow.org/5f7fb413-2dda-44dd-ab9d-429e1dece6d7?type=tx&id=4840ed82-4fe0-4560-a222-07b8fa8f72ac",
    //     Icon:<FontAwesomeIcon icon={faCoffee} color='white' size='lg'/>, 
    //     BgColor:"#220a00"
    // },
    // {
    //     ExampleName: "Admin Resource", 
    //     ExampleDescription: "", 
    //     ExampleCode: "", 
    //     TransactionCode:"", 
    //     Category:"", 
    //     CadenceExplainer: `

    //     `,
    //     TransactionExplainer: `

    //     `,
    //     PlaygroundLink:"https://play.onflow.org/5f7fb413-2dda-44dd-ab9d-429e1dece6d7?type=tx&id=4840ed82-4fe0-4560-a222-07b8fa8f72ac",
    //     Icon:<FontAwesomeIcon icon={faCoffee} color='white' size='lg'/>, 
    //     BgColor:"#220a00"
    // },
    // {
    //     ExampleName: "Admin Resource", 
    //     ExampleDescription: "", 
    //     ExampleCode: "", 
    //     TransactionCode:"", 
    //     Category:"", 
    //     CadenceExplainer: `

    //     `,
    //     TransactionExplainer: `

    //     `,
    //     PlaygroundLink:"https://play.onflow.org/5f7fb413-2dda-44dd-ab9d-429e1dece6d7?type=tx&id=4840ed82-4fe0-4560-a222-07b8fa8f72ac",
    //     Icon:<FontAwesomeIcon icon={faCoffee} color='white' size='lg'/>, 
    //     BgColor:"#220a00"
    // },
    // {
    //     ExampleName: "Admin Resource", 
    //     ExampleDescription: "", 
    //     ExampleCode: "", 
    //     TransactionCode:"", 
    //     Category:"", 
    //     CadenceExplainer: `

    //     `,
    //     TransactionExplainer: `

    //     `,
    //     PlaygroundLink:"https://play.onflow.org/5f7fb413-2dda-44dd-ab9d-429e1dece6d7?type=tx&id=4840ed82-4fe0-4560-a222-07b8fa8f72ac",
    //     Icon:<FontAwesomeIcon icon={faCoffee} color='white' size='lg'/>, 
    //     BgColor:"#220a00"
    // },
]