import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const BookDetails = () => {
// Showing oading spinner during loading the Page
    const navigation = useNavigation()
    console.log(navigation.state);

if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
}

    const bookData = useLoaderData()
// read more less button state
    const [fold, setFold] = useState(true)
    console.log(bookData);
     const {image, title, subtitle, price, publisher, authors, desc, rating, url, year} = bookData;



    return (
        
        <div className='my-container'>
            {/* full Container Box-------- */}
            <div className=' flex flex-col max-w-screen-lg overflow-hidden border rounded bg-white shadow-sm lg:flex-row sm:mx-auto'>
                {/* Image Block */}
                <div className=' lg:w-1/2 h-full'>
                   <img src={image} alt="book-cover" 
                   className=' object-cover w-full lg:h-full'/>         
                </div>
                {/* Details Block */}
                <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
                    <div>
                        <h3 className='badge'>Brand new</h3>  
                    </div>
                    <h2 className=' mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                        {title}
                    </h2>
                    <h3 className=' text-gray-900'>Authors: {authors.substring(0, 50)}</h3>
                    <h3 className=' text-gray-900'>Publisher: {publisher}</h3>
                    <h3 className=' text-gray-900'>Year: {year}</h3>
                    <h3 className=' mb-5 text-gray-900'>Rating: {rating}</h3>
{/* READ MORE APPLICATION IN description */}
                        {fold ? (
                            <>
                                <p className=' mb-5 text-gray-500'> {desc.substring(0, 100)}.....
                                <span className=' cursor-pointer text-blue-600' onClick={() => setFold(!fold)}>Read More</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <p className=' mb-5 text-gray-900'> {desc}.....<span className=' cursor-pointer text-blue-600' onClick={() => setFold(!fold)}>Read Less</span></p>

                            </>
                            )}


                    <div className=' flex gap-5 mt-8 items-center'>
                        <Link to={url} target='_blank' className='btn'>
                            Buy Now
                        </Link>
                        <h3 className=' items-center font-extrabold text-gray-600'>
                            Price: {price}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;