import React, { useEffect, useState } from 'react';
import { flowExamples } from '../../examples/FlowExamples';
import Modal from './Modal';
import Searchbox from './Searchbox';

function PreviewBox() {

    const [ toggle, setToggle ] = useState(false)
    const [ data, setData ] = useState()

    const [ results, setResults ] = useState(flowExamples)
    const [ categories, setCategories ] = useState()

    const handleToggle = (index) => {
        // console.log(index)
        setToggle(true)
        setData(flowExamples[index])
    }

    // get all the unique categories
    useEffect(() =>{
        const unique = [...new Set(flowExamples.map(item => item.Category))]
        setCategories(unique)
    
    }, [setCategories])
    
    return (
        <div>
        <Searchbox setResults={setResults}  flowExamples={flowExamples} categories={categories} />
            <div className='justify-items-center mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 max-w-wrapper mx-auto pb-12 px-10'>
            {results.map((flowExample, index) => 
                <div className="flex cursor-pointer hover:shadow-md py-5 px-5 border-2 border-gray-100 rounded-xl" value={index} onClick={() => handleToggle(flowExample.Index)} key={index}>
                <div className=' w-14 rounded-md' style={{background: `${flowExample.BgColor}`}}>
                    {/* icon for image will go here */}
                    <div className='pt-3'>
                    {flowExample.Icon}
                    </div>
                </div>
                <div className="text-left pl-4">
                    <div>
                        {/* name of example will go here */}
                        <p><b>{flowExample.ExampleName}</b></p>
                    </div>
                    <div>
                        {/* truncated text will go here */}
                        <p className='truncate w-64'>
                        {flowExample.ExampleDescription}
                        </p>
                    </div>
                </div>
            </div>            
            )
            }
            {toggle ? <Modal data={data} setToggle={setToggle} /> : <></>}
            </div>
        </div>
    );
}

export default PreviewBox;