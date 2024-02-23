import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Books = () => {
/** Previous method of fetch Data: using JS
 *  const [books, setBooks] = useState([])
 * 
 *  useEffect(() => {
 *      fetch('https://api.itbook.store/1.0/new') 
 *      .then(res => res.json())
 *      .then(data => console.log(data))
 *   }, [])
 * 
 * NEW method: Using Loader Function, nije nije Fetch kore ready kkore rakhe, tai loading quick hoy
 */


// NEW method fetch data: Using Loader Function
const {books} = useLoaderData()
console.log(books);
    return (
        <div className='my-container '>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                
                {books.map(book =>
                // Card parent div--------start
                    <div className=' overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>

                        {/* book image */}
                        <img src= {book.image} alt="book-cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />

                        {/* book details */}
                        <div className=' bg-black px-6 py-4 text-gray-300 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 flex flex-col'>
                            <h2>{book.title}</h2>
                            <br />
                            <h3>{book.subtitle.substring(0, 45)}...</h3>
                            <h3 className=' mt-auto'>Price: {book.price} </h3>
                        </div>

                    </div>
                     // Card parent div-------end
                )}
            </div>
        </div>
    );
};

export default Books;