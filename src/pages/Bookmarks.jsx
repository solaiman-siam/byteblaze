import { useEffect, useState } from "react"
import { deleteBlog, getBlogs } from "../utility/utility"
import BlogCard from "../components/BlogCard"
import { Link } from "react-router-dom"

function Bookmarks() {


  
  const [blogs, setBlogs] = useState([])

  useEffect(()=> {
      const getBlogsData = getBlogs()
      setBlogs(getBlogsData)
  },[])

  const handleDelete = (id) => {
    deleteBlog(id)
    const getBlogsData = getBlogs()
      setBlogs(getBlogsData)
  }
if(blogs.length < 1) return <div className="flex flex-col justify-center items-center h-[400px]">

  <h1 className="text-2xl font-bold py-2 ">No Bookmark Saved</h1>
  <Link to="/blogs">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Browse Blogs</span>
            </a>
          </Link>
</div>
  return (
    <div className="grid  px-10 py-10 justify-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
         {
          blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
         }

        </div>
  )
}

export default Bookmarks