import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorMsg = () => {
    const {error, status} = useRouteError();
    console.log(error.message);
    return (
        <div className=' flex items-center h-screen bg-gray-100'>

            <section className=' container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <FaceFrownIcon className=' w-40 h-40 text-blue-700'></FaceFrownIcon>
                <div className=' max-w-md text-center'>
                    <h2 className=' mb-8 font-bold text-6xl text-blue-700 '>
                        <span>Error</span>
                        {/* ??????????????? */}
                        {status || 404}
                    </h2>
                    <p className=' text-2xl font-semibold md:text-3xl mb-8 text-red-500'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn'>
                        Back to Homepage
                    </Link>
                </div>
            </section>
            
        </div>
    );
};

export default ErrorMsg;