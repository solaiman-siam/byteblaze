import { useLoaderData } from "react-router-dom"
import placeHolderImage from '../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";

function Content() {
    
    const blog = useLoaderData()
    const { title, cover_image,tags, body_html } = blog;

  return (
    <div
      
    rel="noopener noreferrer"
    href="#"
    className="border p-4  group hover:no-underline focus:no-underline dark:bg-gray-50">
    <img
      role="presentation"
      className="object-cover w-full rounded h-44 dark:bg-gray-500"
      src={cover_image || placeHolderImage}
    />
    <div>
        <div className="flex flex-wrap  gap-2 pt-8">
          {
            tags.map(tag => <a key={tag}
              className="px-3  rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
              #{tag}
            </a>)
          }
        </div>
      </div>
    <div className=" space-y-2 ">
      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
        {title}
      </h3>
      <div className="overflow-hidden ">
      <Markdown   rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
      
    </div>
  </div>
  )
}

export default Content