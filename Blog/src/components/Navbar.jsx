import React from "react";
import { Link } from "react-router-dom";
import blog from '../assets/blog.avif';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/"><img src={blog} alt="Blog Logo" className="w-11 h-11 rounded-full object-cover" /></Link>
          <span className="text-xl font-bold">My Blog</span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Create
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
