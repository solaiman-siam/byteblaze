import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { MdBookmarkAdd } from "react-icons/md";
import { saveBlog } from "../utility/utility";

function BlogDetail() {

    const [tabIndex, setTabIndex] = useState(0)

  const blogs = useLoaderData();
  const {
    
    title,
    published_at,
    comments_count,
    reading_time_minutes,
    public_reactions_count,
  } = blogs;

  const handleBookmarks = (blogs) =>{
    saveBlog(blogs)
  }

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                <span>{reading_time_minutes} min read</span> •{" "}
                <span>{new Date(published_at).toLocaleDateString()}</span>
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              <span>{comments_count} comments</span> • {public_reactions_count} views
            </p>
          </div>
        </div>
        <div className="flex px-4 items-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
          onClick={() => setTabIndex(0)}
            to=''
            className={`flex items-center ${tabIndex === 0 ? 'border border-b-0 rounded-t-lg': 'border-b' } flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Content</span>
          </Link>
          <Link
          onClick={()=> setTabIndex(1)}
            to="author"
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${tabIndex === 1 ? 'border border-b-0 ': 'border-b' } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Author</span>
          </Link>
          <div
          onClick={()=> handleBookmarks(blogs)}
          className="flex justify-center items-center hover:bg-opacity-15 bg-opacity-20 duration-100 hover:scale-110 w-fit ml-4 px-2 py-2 mt-1 bg-secondary rounded-full cursor-pointer">

          <MdBookmarkAdd className="text-xl text-secondary" />
          </div>
        </div>
        <Outlet></Outlet>
      </article>
      
    </div>
  );
}

export default BlogDetail;
