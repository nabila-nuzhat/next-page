import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './Book';
import LoadingSpinner from './LoadingSpinner';

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

// Showing oading spinner during loading the Page
const navigation = useNavigation()
console.log(navigation.state);

if(navigation.state === 'loading'){
    return <LoadingSpinner></LoadingSpinner>
}

const {books} = useLoaderData()
console.log(books);
    return (
        <div className='my-container '>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                
                {books.map(book =>
                // Card parent div component --------start
                   <Book key={book.isbn13} book={book}></Book>
                // Card parent div component-------end
                )}
            </div>
        </div>
    );
};

export default Books;