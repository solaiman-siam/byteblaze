import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import BlogDetail from "../pages/BlogDetail";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import Content from "../components/Content";
import Author from "../components/Author";


export const router = createBrowserRouter ([

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
          element: <Blogs></Blogs>,
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7')
        },
        {
          path: '/bookmarks',
          element: <Bookmarks></Bookmarks>
        },
        {
          path: '/blogs/:id',
          element: <BlogDetail></BlogDetail>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children: [
            {
                index: true,
                element: <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            },
            {
                path: 'author',
                element: <Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
            }
          ]
        }
      ]
    }
])