import React, {useState} from 'react';
import Modalv2 from '../../components/MainExampleComponents/Modalv2';

import { category, description, icon, name, playgroundLink, bgColor, script } from './description/description';
import { contractExplain } from './cadence/contractExplain';
import { contract } from './cadence/contract';
import { transaction } from './cadence/transaction';
import { transactionExplain } from './cadence/transactionExplain';


function SetInSeriesNFT(){

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
                    {/* name of example will go here */}
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

export default SetInSeriesNFT
