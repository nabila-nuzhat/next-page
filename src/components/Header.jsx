import React, { useState } from 'react';
import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

// state for Menu Button
const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        
            <div className='relative flex justify-between items-center'>
                {/* Logo section ----------*/}
                {/* <div className=' inline-flex items-center'>
                    <BoltIcon className=' h-6 text-blue-500'></BoltIcon>
                    <span className=' ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
                </div> */}
                <Link to='/' className=' inline-flex items-center'>
                    <BoltIcon className=' h-6 w-6 text-blue-500'></BoltIcon>
                    <span className=' ml-2 text-xl font-bold tracking-wide text-gray-800'>nextPage</span>
                </Link>


                {/* Nav item section -----------*/}
                <ul className='items-center hidden lg:flex  space-x-8'>
                    <li>
                        <NavLink to='/'
                        title='Home link'
                        className={({isActive})=> isActive ? 'active' : 'default'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/books'
                        title='Books Link'
                        className={({isActive})=> isActive ? 'active' : 'default'}>
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'
                        title='About Link'
                        className={({isActive})=> isActive ? 'active' : 'default'}>
                            About Us
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Navbar Section ------------------------------- */}
                <div className=' lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}>
            
                        <Bars3BottomRightIcon className='w-5 text-gray-600'></Bars3BottomRightIcon>
                    </button>
                    {isMenuOpen && (
                        <div className=' absolute top-0 left-0 w-full z-10'>
                            <div className=' p-5 bg-white border rounded shadow-sm'>
                                {/* Logo and Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className=' inline-flex items-center'>
                                            <BoltIcon className=' h-6 w-6 text-blue-500'></BoltIcon>
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                                                nextPage
                                            </span>
                                        </Link>
                                    </div>

                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button 
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600'></XMarkIcon>
                                        </button>
                                    </div>

                                </div>

                                {/* Mobile Nav Items Section */}

                                <nav>
                                    <ul className=' space-y-4'>
                                        <li>
                                            <Link to='/' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Home</Link>
                                        </li>
                                        <li>
                                            <Link to='/books' className=' font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>Books</Link>
                                        </li>
                                        <li>
                                            <Link to='/about' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>About Us</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>

            </div>

       

        </div>
    );
};

export default Header;