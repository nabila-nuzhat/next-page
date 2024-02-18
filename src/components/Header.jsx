import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-100 flex justify-between items-center'>
            {/* Logo section */}
            {/* <div className=' inline-flex items-center'>
                <BoltIcon className=' h-6 text-blue-500'></BoltIcon>
                <span className=' ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
            </div> */}
            <Link to='/' className=' inline-flex items-center'>
                <BoltIcon className=' h-6 text-blue-500'></BoltIcon>
                <span className=' ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
            </Link>


            {/* Nav item section */}
            <ul>
                <li>
                    <NavLink to='/'>

                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;