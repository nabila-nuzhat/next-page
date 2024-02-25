import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className=' flex justify-center h-[calc(100vh-68px)] items-center'>
            <p className=' text-7xl uppercase font-thin'>l</p>
        {/* the round spinning circle */}
            <div className=' h-10 w-10 rounded-full border-8 border-dashed border-blue-500 mt-5 animate-spin'>

            </div>
            <p className=' text-7xl font-thin'>ading....</p>
        </div>
    );
};

export default LoadingSpinner;