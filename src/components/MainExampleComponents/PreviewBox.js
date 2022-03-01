import React, { useState } from 'react';
import modules from '../../modules';
import Nav from '../Nav';
import Modal from './Modal';
import Searchbox from './Searchbox';



function PreviewBox() {

    const modData = [
        modules.map((module, index) => ({
            "Category": module().props.children[1].props.children[2].props.children.props.children,
            "ExampleName": module().props.children[1].props.children[0].props.children.props.children.props.children,
            "ExampleDescription": module().props.children[1].props.children[1].props.children.props.children,
            "ExampleCode": module().props.children[1].props.children[4].props.children.props.children,
            "CadenceExplainer": module().props.children[1].props.children[3].props.children.props.children,
            "TransactionCode": module().props.children[1].props.children[5].props.children.props.children,
            "TransactionExplainer": module().props.children[1].props.children[6].props.children.props.children,
            "PlaygroundLink": module().props.children[1].props.children[7].props.children.props.children,
            "Icon": module().props.children[1].props.children[8].props.children.props.children,
            "BgColor": module().props.children[1].props.children[9].props.children.props.children,
            "Script": module().props.children[1].props.children[10].props.children.props.children,
            "Index": index
        }))
    ]

    const [ toggle, setToggle ] = useState(false)
    const [ data, setData ] = useState()

    const [ results, setResults ] = useState(modData[0])
    
    const categories = useState([...new Set(modules.map(module => module().props.children[1].props.children[2].props.children.props.children))])

    const handleToggle = (index) => {
        setToggle(true)
        setData(modData[0][index])
    }



    return (
        <div>
         <Nav setResults={setResults}  flowExamples={modData[0]}/>
         <Searchbox setResults={setResults}  flowExamples={modData[0]} categories={categories} />
            <div className='justify-items-center mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 max-w-wrapper mx-auto pb-12 px-10' style={{inlineSize: "max-content"}}>
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