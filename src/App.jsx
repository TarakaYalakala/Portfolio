import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"/about",
      element:<><About /></>
    },
    {
      path:"/blog",
      element:<><Blog/></>
    }
  ])


  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App