import React from 'react';
import { filterData } from '../../functions/CategoryFilter';
import { searchData } from '../../functions/Search';

function Searchbox({setResults, flowExamples, categories}) {
    return (
        <div className='mt-14'>
            <div>
                <h1 style={{fontSize: 42}}>Examples</h1>
                <h1 className='text-md mt-2 mb-10'>Explore what's possible on the Flow Blockchain with different examples</h1>
            </div>
            <div className='flex justify-center'>
            <input 
                placeholder="Search Examples" 
                className='border-2 border-gray-100 p-1 pl-3 rounded-lg w-96' 
                onChange={(e) => searchData(e.target.value, flowExamples, setResults)}
                />
            <div>
                <select className='p-2 border-2 border-gray-100 rounded-lg text-gray-400 w-64 ml-10' defaultValue="default" onChange={(e) => filterData(e.target.value, flowExamples, setResults)}>
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