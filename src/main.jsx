import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Bookmarks from './pages/Bookmarks'
import MainLayouts from './Layouts/MainLayouts'

const router = createBrowserRouter ([

    {
      path: '/',
      element: <MainLayouts></MainLayouts>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
