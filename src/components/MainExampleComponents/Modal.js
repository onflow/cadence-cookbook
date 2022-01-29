import React from 'react';
import { atomOneDark, CopyBlock, github } from 'react-code-blocks';
import { InformationCircleIcon } from '@heroicons/react/outline'


function Modal({data, setToggle}) {
    console.log(data)

return (
    <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setToggle(false)}></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-6xl sm:max-h-fit">
                {/* this is the top part of the modal */}
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 overflow-auto max-w-6xl divide-y-[1px] divide-gray-200" style={{maxHeight:700}}>
                    <div className="ml-0 mb-5 flex ">
                        <div className=' w-14 rounded-md' style={{background: `${data.BgColor}`}}>
                            {/* icon for image will go here */}
                            <div className='p-3 ml-[5px] mt-[5px]'>
                            {data.Icon}
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl leading-6 font-medium text-gray-900 ml-3 mt-0" id="modal-title">{data.ExampleName}</h3>
                            <div className='ml-3 border-2 p-[1px] pl-1 w-fit pr-1 mt-[5px] border-gray-200 text-gray-400 text-sm rounded-[5px]'>
                                {data.Category}
                            </div>
                        </div>
                        <div className="ml-auto">
                            <div className='ml-auto text-right'>
                                <button className='bg-green-500 text-white font-xs py-1 px-3 rounded-[5px] mt-1 right hover:bg-green-600'
                                onClick={() => window.open(`${data.PlaygroundLink}`, "_blank")}
                                >
                                    Open In Playground*
                                </button>
                            </div>
                            <div className="text-[12px] text-gray-500 mt-1">
                                <text>*Please deploy contracts on all necessary accounts before starting transactions and scripts</text>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div class="pt-6 grid grid-cols-2">
                        <div className='w-[680px]'>
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Description</h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">{data.ExampleDescription}</p>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className='col-span-2'>
                            <div className='flex'>
                                {/* 1st div flexed */}
                                <div className='min-w-[780px] max-w-[780px]' >
                                    <div class="mt-8">
                                        <p class="text-md text-black-500 mb-4 font-medium">Cadence Code</p>
                                    </div>
                                    <div className="text-xs border-2 rounded-[4px]">
                                        <CopyBlock
                                            text={data?.ExampleCode}
                                            codeblock
                                            theme={github}
                                            showLineNumbers={false}
                                            language="jsx"
                                        />
                                    </div>
                                </div>
                                <div>
                                {/* second div flexed */}
                                <div class="mt-0 text-center sm:mt-0 sm:ml-10 sm:text-left flex-none ">
                                    <div className='p-3 whitespace-pre-line mt-[70px] bg-indigo-50 rounded-md'>
                                            <h3 class="text-lg leading-6 font-medium text-indigo-900 flex" id="modal-title"><InformationCircleIcon className="h-5 w-5 mt-[1px] mr-1"/> Cadence Code Explanation</h3>
                                            <div class="mt-6">
                                            <p class="text-[14px] text-slate-800">{data.CadenceExplainer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 mt-4'>
                            <div className='flex'>
                                <div class="mt-4 text-center sm:mt-0 sm:text-left min-w-[780px] max-w-[780px]">
                                    {/* Cadence code div */}
                                    <div class="mt-6">
                                        <p class="text-md text-black-500 mb-4 font-medium">{data?.Script === true ? "Script Code" : "Transaction Code"}</p>
                                    </div>
                                    <div className="text-xs">
                                        <CopyBlock
                                            text={data?.TransactionCode}
                                            codeblock
                                            theme={atomOneDark}
                                            showLineNumbers={false}
                                            language="jsx"
                                        />
                                    </div>
                                </div>
                                <div className='mt-[62px]'>
                                    <div class=" text-center sm:mt-0 sm:ml-10 sm:text-left">
                                        <div className='p-3 whitespace-pre-line bg-green-50 rounded-[5px]'>
                                            <h3 class="text-lg leading-6 font-medium text-green-900 flex" id="modal-title"><InformationCircleIcon className="h-5 w-5 mt-[1px] mr-1"/>{data?.Script === true ? "Script Explained" : "Transaction Explained"}</h3>
                                            <div class="mt-6">
                                            <p class="text-[14px] text-gray-800">{data.TransactionExplainer}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this is the bottom bar */}
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {/* <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setToggle(false)}>
                    Back To Examples
                    </button> */}
                </div>
            </div>
        </div>
    </div>
    );
    
}

export default Modal;