import React from 'react';
import { filterData } from '../../functions/CategoryFilter';
import { searchData } from '../../functions/Search';

function Searchbox({setResults, flowExamples, categories}) {
    return (
        <div className='mt-14'>
            <div>
                <h1 style={{fontSize: 42}}>Flow Smart Contract Examples</h1>
                <h2 className='text-md mt-2 mb-10'> Explore various Cadence smarts contracts & transaction scripts for different use cases. <br/> Build with confidence for your Web3 application</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center px-5'>
            <input 
                placeholder="Search Examples" 
                className='border-2 border-gray-100 p-1 pl-3 rounded-xl md:w-96 md:m-0 m-auto w-3/4 ' 
                onChange={(e) => searchData(e.target.value, flowExamples, setResults)}
                />
            <div>
                <select className='p-2 border-2 border-gray-100 rounded-xl text-gray-400 md:w-64 md:ml-10 md:m-0 m-auto w-3/4 mt-5' defaultValue="default" onChange={(e) => filterData(e.target.value, flowExamples, setResults)}>
                    <option value="">All</option>
                    {categories?.map((category) =>
                        <option className='text-slate-800' value={category} key={category}>{category}</option>
                    )}
                </select>
            </div>
            </div>
            
        </div>
    );
}

export default Searchbox;