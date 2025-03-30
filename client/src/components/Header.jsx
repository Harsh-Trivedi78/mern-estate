import { FaSearch } from "react-icons/fa";
import { Link , useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');

 const navigate = useNavigate();
 const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
    // window.location.search = urlParams.toString();
 }
 useEffect (() => {
  const urlParams = new URLSearchParams(location.search);
  const searchTermFormUrl = urlParams.get('searchTerm');
  if(searchTermFormUrl){
    setSearchTerm(searchTermFormUrl);
  }

 }, [location.search])
  return (
    <header className="bg-slate-400 shadow-md font-extrabold">
 





      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-extrabold text-sm sm:text-xl">
            <span className="text-blue-800">Estate</span>
            <span className="text-blue-800">Finder</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className="bg-gray-300 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="   bg-transparent focus:outline-none w-24 sm:w-64"
            
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          
          />
          <button>
          <FaSearch className="text-blue-800" />
          </button>
          
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-blue-800 hover:underline font-bold">
              Home
            </li>
          </Link>
          <Link to="about">
            <li className="hidden sm:inline text-blue-800 hover:underline font-bold">
              About
            </li>
          </Link>
          <Link to="/Blog">
            <li className="hidden sm:inline text-blue-800 hover:underline font-bold">
              Blogs
            </li>
          </Link>

          <Link to="/Profile">
            {currentUser ? (
              <img
              className="rounded-full h-10 w-10 object-cover"

                src={currentUser.avatar}
                alt="Profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
