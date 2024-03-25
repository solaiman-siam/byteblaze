import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-content w-full min-h-[calc(100vh-116px)]  text-center  p-0  container mx-auto">
      <div className="w-full  ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary  to-secondary text-transparent bg-clip-text animate-gradient bg-300%">ByteBlaze</span></h1>
          <p className="py-6 w-5/12 text-center">
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it
          </p>
        </div>
        <div className="flex gap-2 justify-center">
          <Link to="/blogs">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Read Blogs</span>
            </a>
          </Link>
          <Link to="/bookmarks">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-md shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Bookmarks</span>
            </a>
          </Link>
        </div>
        {/* <div className="w-full h-full items-end">
        <img className="w-full" src={wave} alt="" />
      </div> */}
      </div>
      
    </div>
  );
}

export default Hero;
