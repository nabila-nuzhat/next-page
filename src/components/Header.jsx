import React, { useState } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

// state for Menu Button
const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl lg:max-w-screen-xl md:px-24 lg:px-8'>
        
            <div className=' flex justify-between items-center'>
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
            <ul className='items-center hidden lg:flex  space-x-8'>
                <li>
                    <NavLink to='/'
                    title='Home link'
                    className={({isActive})=> isActive ? 'text-blue-600' : 'default'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/books'
                    title='Books Link'
                    className={({isActive})=> isActive ? 'text-blue-600' : 'default'}>
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                    title='About Link'
                    className={({isActive})=> isActive ? 'text-blue-600' : 'default'}>
                        About Us
                    </NavLink>
                </li>
            </ul>

{/* Mobile Navbar Section */}
            

        </div>

       

        </div>
    );
};

export default Header;