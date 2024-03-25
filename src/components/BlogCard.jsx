import { Link } from "react-router-dom";
import placeHolderImage from '../assets/404.jpg'
import { AiFillDelete } from "react-icons/ai";

function BlogCard({ blog, deletable, handleDelete }) {
  const {id, published_at, title, description, cover_image } = blog;
  
  

  return (
    
      <div className="flex relative ">
      <Link to={`/blogs/${id}`}
      rel="noopener noreferrer"
      href="#"
      className=" hover:scale-105 border-opacity-30 duration-100 border-2 border-primary hover:border-secondary hover:p-2 p-2 max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeHolderImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
        <p>
          {description}
        </p>
      </div>
    </Link>
    {deletable && <div
    onClick={()=> handleDelete(id)}
    className="absolute cursor-pointer -top-8 -right-8 hover:bg-secondary btn text-secondary bg-opacity-20 hover:bg-opacity-30  text-3xl bg-secondary p-2 rounded-full"><AiFillDelete /></div>}
      </div>
    
    
  );
}

export default BlogCard;
