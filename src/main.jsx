import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Books from './components/Books.jsx'



const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/',
    element: <Home></Home>,
  },

  {
    path:'about',
    element: <About></About>,
  },

  {
    path:'books',
    element: <Books></Books>,
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
