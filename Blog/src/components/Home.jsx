import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setBlogs(JSON.parse(stored));
    }
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
    toast.success("Blog deleted");
  };

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search blogs..."
        className="border border-gray-300 p-3 mb-6 w-full rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBlogs.length === 0 ? (
        <p className="text-gray-500 text-center">No blogs found.</p>
      ) : (
        filteredBlogs.map(blog => (
          <div key={blog.id} className="border border-gray-200 p-5 mb-6 rounded-lg shadow hover:shadow-md transition">
            <Link
              to={`/blog/${blog.id}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {blog.title}
            </Link>
            <p className="text-gray-700 mt-2">{blog.content.slice(0, 100)}...</p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleEdit(blog.id)}
                className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
