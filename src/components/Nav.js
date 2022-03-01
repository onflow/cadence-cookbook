import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../OClogo3.png'

function Nav({
    setResults,
    flowExamples
}) {
    return (
        <div className='flex border-b-2 border-slate-100 py-3'>
            <img src={logo} className=' h-10 ml-6' alt="logo" />
            <div className='flex pt-2 ml-3 text-slate-900 w-full'>
                <div className="pl-6 hover:font-medium hover:text-green-400" onClick={() => setResults(flowExamples)}>
                    <Link to="/">Examples</Link>
                </div>
                <div className='ml-auto mr-10 -mb-2 -mt-[3px]'>
                    <button
                    className='px-3 bg-green-500 text-white font-semibold rounded-md py-[3px] border-2 border-green-600 hover:bg-green-600'
                    onClick={() => window.open(`https://glen-bergamot-ea7.notion.site/Contributing-To-Open-Cadence-61769df25fc6451ea316dcedf1fb4faa`, "_blank")}
                    >
                        Contribute
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Nav;