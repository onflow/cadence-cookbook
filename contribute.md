# Contributing to the Cadence Cookbook

## How to contribute?

Contributing to the Cadence Cookbook is easy! And we would love for you to share your work with the community so that we can keep on benefiting from each others work and keep creating amazing projects on Flow!

In order to contribute, we have tried to make it as easy as possible to add an recipie to the website. We provide you the format for submitting a pull-request to [this GitHub repo](https://github.com/onflow/cadence-cookbook) so that your recipe can be added. We will go over the format for submitting your recipe in the following section!

## Adding a recipe

In order to submit a recipe to the Cadence Cookbook, you will need to submit a pull request in line with the following format in order to get it merged to the site. The format is as follows:

1. Navigate to the `src/modules` folder in the repository
    - *Here you will see all of the existing recipes, and you can start to get an idea of how you will structure your folders to be approved*
        
        ![Cadence Cookbook Architecture](https://i.ibb.co/FWp6W1T/open-cadence-architecture.png)
        
2. Add a new folder in the `modules` folder with the name of your Cadence recipe
    - *Name it something that identifies what your recipe is about so that it is easy to maintain*
3. In your newly created folder, create an `index.js` file as well as two folders, one named `cadence` and one named `description`
    - *Tip: Just copy the contents inside one of the already existing folders in the modules folder*
4. Within the `cadence` folder you will have four files with the following names:
 - `contract.js`
 - `contractExplain.js`
 - `transaction.js`
 - `transactionExplain.js`
5. In each of these folders, you will input the text for the necessary parts of the contract and explanation that is needed. 
    You can see in the example below how each const is created
    
```jsx
export const contract = `pub resource interface Provider {

    // withdraw
    //
    // Function that subtracts tokens from the owner's Vault
    // and returns a Vault resource (@Vault) with the removed tokens.
    //
    // The function's access level is public, but this isn't a problem
    // because even the public functions are not fully public at first.
    // anyone in the network can call them, but only if the owner grants
    // them access by publishing a resource that exposes the withdraw
    // function.
    //
    pub fun withdraw(amount: UFix64): @Vault {
        post {
            // 'result' refers to the return value of the function
            result.balance == UFix64(amount):
                "Withdrawal amount must be the same as the balance of the withdrawn Vault"
        }
    }
}
`
```

6. In the description folder you will create on file called `description.js`
7. In this file you will have variables that you will assign that will be used for defining the recipe
 - Name - Name of your recipe
 - Description - A brief description of what your recipe is about
 - Playground Link- A Playground Link that shows what your recipe does in real time
 - Category - The category your recipe falls under. Feel free to use an existing one or create your own if needed
  - Icon - The icon for your recipe. The Cadence Cookbook uses the fortAwesome library for Icons, so please use an icon from there
    - bgColor- The bgColor of the thumbnail. Please try to use one that is not similar to the previous ones
    - Script - If the interaction code with your smart contract is a script, please label this as `true`, if it is a transaction label this as `false`
    

```jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons"

export const name = "Withdrawing Tokens"

export const description = "This is included in your smart contract when you would like to implement token withdrawls. Also useful for transferring tokens between accounts."

export const playgroundLink = "https://play.onflow.org/ef2fe054-148b-4c75-94f1-95bd33b6ce00?type=tx&id=e849d0d1-4196-432c-b9be-eab08c5595a9"

export const category = "Fungible Token"

export const icon = <FontAwesomeIcon icon={faMoneyCheck} color='white' size='lg'/>

export const bgColor = '#238534'

export const script = false
```

8. Next we have the index.js file
    - I would copy one of the existing `index.js` files and just paste it into your code to make things easy.
    - *To note, when pasting the code, please change the name of the function so that we are not repeating function names when exporting the component to the index.js file in the modules folder.*

```jsx
import React, {useState} from 'react';
import Modalv2 from '../../components/MainExampleComponents/Modalv2';

import { category, description, icon, name, playgroundLink, bgColor, script } from './description/description';
import { contractExplain } from './cadence/contractExplain';
import { contract } from './cadence/contract';
import { transaction } from './cadence/transaction';
import { transactionExplain } from './cadence/transactionExplain';

function 'YourRecipeNameHere'(){

    const [ toggle, setToggle ] = useState(false)

    return(
        <div 
        className="flex cursor-pointer hover:shadow-md py-5 px-5 border-2 border-gray-100 rounded-xl" 
        // value={index} 
        onClick={() => setToggle(true)} 
        // key={index}
        >
            <div className=' w-14 rounded-md' style={{background: `${bgColor}`}}>
                {/* icon for image will go here */}
                <div className='pt-3'>
                {icon}
                </div>
            </div>
            <div className="text-left pl-4">
                <div>
                    {/* name of recipe will go here */}
                    <p><b>{name}</b></p>
                </div>
                <div>
                    {/* This is where the description of the NFT will go */}
                    {/* truncated text will go here */}
                    <p className='truncate w-64'>
                    {description}
                    </p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{category}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{contractExplain}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{contract}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{transaction}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{transactionExplain}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{playgroundLink}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{icon}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{bgColor}</p>
                </div>
                <div style={{contentVisibility: "hidden"}}>
                        <p>{script}</p>
                </div>
            </div>
            {toggle ? 
            <Modalv2 
                contractExplainer={contractExplain} 
                contract={contract}
                transaction={transaction}
                transactionExplainer={transactionExplain} 
                category={category}
                playgroundLink={playgroundLink}
                description={description}
                setToggle={setToggle} 
                icon={icon}
                bgColor={bgColor}
                name={name}
                script={script}
            /> 
            : 
                <></>
            }
        </div>    
    )
}

export default 'YourRecipeNameHere'
```

9. Lastly, we now have to import your component into the `index.js` file located in the modules folder.
 - To import, just import your component and add it to the bottom of all the other imported components that are to be exported.

```jsx
import AddAdminResource from "./Add_Admin_Resource"
import AddPlayTopShotSet from "./Add_Play_TopShot_Set"
import AdminResource from "./Admin_Resource"
import CollectionCreation from "./Collection_Creation"
import CreateMarketplace from "./Create_Marketplace"
import CreateNFTListing from "./Create_NFT_Listing"
import CreateTopShotPlay from "./Create_TopShot_Play"
import CreateTopShotSet from "./Create_TopShot_Set"
import CreatingVault from "./Creating_Vault"
import GetKittyItemMetadata from "./Get_KittyItem_Metadata"
import MetadataViews from "./Metadata_Views"
import MintKittyItemNFT from "./Mint_KittyItem_NFT"
import MintMomentTopShotSet from "./Mint_Moment_TopShot_Set"
import MintNFT from "./Mint_NFT"
import MintSetNFT from "./Mint_Set_NFT's"
import MultipleMetadataViews from "./Multiple_Metadata_Views"
import NFTWithMetadata from "./NFT_With_Metadata"
import PurchaseMPNFT from "./Purchase_MP_NFT"
import SeriesNFTs from "./Series_NFT's"
import SetupCollection from "./Setup_Collection"
import SetInSeriesNFT from "./Set_In_Series_NFT"
import TokenVault from "./Token_Vault"
import VaultMinter from "./Vault_Minter"
import WithdrawTokens from "./Withdrawing_Tokens"
import 'YourRecipeNameHere' from "./'YourRecipeNameHere'"

export default [
    MintNFT,
    CollectionCreation,
    SetupCollection,
    NFTWithMetadata,
    MetadataViews,
    MultipleMetadataViews,
    TokenVault,
    WithdrawTokens,
    CreatingVault,
    VaultMinter,
    SeriesNFTs,
    SetInSeriesNFT,
    MintSetNFT,
    AdminResource,
    AddAdminResource,
    CreateTopShotPlay,
    CreateTopShotSet,
    AddPlayTopShotSet,
    MintMomentTopShotSet,
    CreateMarketplace,
    CreateNFTListing,
    PurchaseMPNFT,
    MintKittyItemNFT,
    GetKittyItemMetadata
		'YourRecipeNameHere'
]
```

Now with all of this being finished, you should be done with adding your recipe to the Cadence Cookbook. 

Open a pull request on GitHub for the changes you've added and all should be good to go as soon as we merge the request.

Thank you for contributing! Please reach out to tyllen.bicakcic@dapperlabs.com if you have any additional questions 😎
