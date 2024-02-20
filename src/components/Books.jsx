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
                    <div className=' overflow-hidden'>
                        <img src= {book.image} alt="book-cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />
                    </div>
                    
                )}
            </div>
        </div>
    );
};

export default Books;