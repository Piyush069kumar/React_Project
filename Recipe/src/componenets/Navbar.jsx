import React from "react";
import { Link } from "react-router-dom";
import finder from "../assets/finder.png";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
 return (
    <nav className="bg-white shadow-white-sm px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-8 rounded-lg">
      
        <Link to="/" className="flex items-center gap-3">
            <img src={finder} alt="logo" className="h-12 w-12 rounded-full object-contain" />
            <h1 className="text-2xl font-bold text-green-700">Recipe Finder</h1>
        </Link>
     
      <div className="flex gap-6 text-sm sm:text-base">
        <Link to="/" className="text-gray-700 text-2xl hover:text-green-600 font-medium transition"><AiFillHome /></Link>
        <Link to="/my-recipes" className="text-gray-700 hover:text-green-600 font-medium transition">My Recipes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
