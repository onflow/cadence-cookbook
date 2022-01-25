import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../OClogo3.png'

function Nav() {
    return (
        <div className='flex border-b-2 border-slate-100 py-3 '>
            <img src={logo} className=' h-10 ml-6' alt="logo" />
            <div className='flex pt-2 ml-3 text-slate-900'>
                <div className="pl-6 hover:font-medium hover:text-green-400">
                    <Link to="/">Examples</Link>
                </div>
                <div className=" pl-6 hover:font-medium hover:text-green-400">
                <Link to="/marketplace-bestpractices">Marketplace Best Practices</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;