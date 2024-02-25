import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Books from './components/Books.jsx'
import BookDetails from './components/BookDetails.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import ErrorMsg from './components/ErrorMsg.jsx'



const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorMsg></ErrorMsg>,  // error element

  children: [{
    path: '/',
    element: <Home></Home>,
  },

  {
    path:'about',
    element: <About></About>,
  },
  {
    path:'loader',
    element: <LoadingSpinner></LoadingSpinner>,
  },

  {
    path:'books',
    element: <Books></Books>,
    loader: () => fetch('https://api.itbook.store/1.0/new'),
  },
  {
    path:'book/:id',
    element: <BookDetails></BookDetails>,
    loader:({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
  },



],
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}>
  
    </RouterProvider>
    
  </React.StrictMode>,
)
