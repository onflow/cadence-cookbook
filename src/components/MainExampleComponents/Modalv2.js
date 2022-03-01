import React, {useEffect, useState} from 'react';
import { atomOneDark, CopyBlock, github } from 'react-code-blocks';
import { InformationCircleIcon } from '@heroicons/react/outline'


function Modalv2({ 
    contractExplainer,
    contract,
    transaction,
    transactionExplainer, 
    category,
    playgroundLink,
    description,
    icon,
    bgColor,
    name,
    script,
    setToggle,
}) {

const [ boo, setBoo ] = useState(true)

useEffect(() =>{
    setToggle(boo)
})
return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setBoo(false)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-[96%] md:w-5/6 sm:max-h-fit">
                {/* this is the top part of the modal */}
                
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-auto divide-y-[1px] divide-gray-200" style={{maxHeight: '93vh'}}>
                    <div className="max-w-lg lg:mx-auto ml-0 mb-5 flex flex-col "> 
                        
                        <div className="w-full flex items-center flex-wrap">
                            <div className=' w-14 h-14 rounded-md' style={{background: `${bgColor}`}}>
                                {/* icon for image will go here */}
                                <div className='flex flex-col h-full justify-center items-center'>
                                {icon}
                                </div>
                            </div>
                            <div className="ml-3 mr-auto md:mr-0'">
                                <h3 className="text-2xl leading-6 font-medium text-gray-900 ml-3 mt-0" id="modal-title">{name}</h3>
                                <div className='ml-3 border-2 p-[1px] pl-1 w-fit pr-1 mt-[5px] border-gray-200 text-gray-400 text-sm rounded-[5px]'>
                                    {category}
                                </div>
                            </div>
                            <div className='md:ml-auto mt-5 md:mt-0 text-right'>
                                    <button className='bg-green-500 text-white font-xs py-1 px-3 rounded-[5px] mt-1 right hover:bg-green-600'
                                    onClick={() => window.open(playgroundLink, "_blank")}
                                    >
                                        Open In Playground*
                                    </button>
                                </div>
                            </div>
                        <div className="">
                            
                            <div className="text-[12px] text-gray-500 mt-5">
                                *Please deploy contracts on all necessary accounts before starting transactions and scripts
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="pt-6 grid grid-cols-1">
                        <div className='w-full lg:max-w-[680px]'>
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Description</h3>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">{description}</p>
                            </div>
                        </div>

                        <div className='col-span-2'>
                            <div className='flex flex-col xl:flex-row'>
                                {/* 1st div flexed */}
                                <div className='xl:min-w-[780px] xl:max-w-[780px]' >
                                    <div className="mt-8">
                                        <p className="text-md text-black-500 mb-4 font-medium">Cadence Code</p>
                                    </div>
                                    <div className="text-xs border-2 rounded-[4px]">
                                        <CopyBlock
                                            text={contract}
                                            codeblock
                                            theme={github}
                                            showLineNumbers={false}
                                            language="jsx"
                                        />
                                    </div>
                                </div>
                                <div>
                                {/* second div flexed */}
                                <div className="mt-0 sm:mt-0 xl:ml-10 text-left flex-none">
                                    <div className='p-3 whitespace-pre-line mt-10 xl:mt-[70px] bg-indigo-50 rounded-md'>
                                            <h3 className="text-lg leading-6 font-medium text-indigo-900 flex" id="modal-title"><InformationCircleIcon className="h-5 w-5 mt-[1px] mr-1"/> Cadence Code Explanation</h3>
                                            <div className="mt-6">
                                            <p className="text-[14px] text-slate-800">{contractExplainer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 mt-4'>
                            <div className='flex flex flex-col xl:flex-row'>
                                <div className="mt-4 sm:mt-0 sm:text-left xl:min-w-[780px] xl:max-w-[780px]">
                                    {/* Cadence code div */}
                                    <div className="mt-6">
                                        <p className="text-md text-black-500 mb-4 font-medium">{script === true ? "Script Code" : "Transaction Code"}</p>
                                    </div>
                                    <div className="text-xs">
                                        <CopyBlock
                                            text={transaction}
                                            codeblock
                                            theme={atomOneDark}
                                            showLineNumbers={false}
                                            language="jsx"
                                        />
                                    </div>
                                </div>
                                <div className='mt-[62px]'>
                                    <div className="mt-0 sm:mt-0 xl:ml-10">
                                        <div className='p-3 whitespace-pre-line bg-green-50 rounded-[5px]'>
                                            <h3 className="text-lg leading-6 font-medium text-green-900 flex" id="modal-title"><InformationCircleIcon className="h-5 w-5 mt-[1px] mr-1"/>{script === true ? "Script Explained" : "Transaction Explained"}</h3>
                                            <div className="mt-6">
                                            <p className="text-[14px] text-gray-800">{transactionExplainer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
    
}

export default Modalv2;