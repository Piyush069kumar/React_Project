import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState([]);
  

  useEffect(() => {
    const stored = localStorage.getItem("blogs");
    if (stored) {
      setBlogs(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      toast.error("Both title and content are required");
      return;
    }

    

    const newBlog = {
      id: Date.now(),
      title,
      content,
    };

    setBlogs((prev) => [...prev, newBlog]);
    setTitle("");
    setContent("");
    toast.success("Blog created!");
    
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content (Markdown supported)"
          className="border p-2 w-full h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          type="submit"
          
        >
          Submit
        </button>
      </form>

      {content && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
          <div className="prose max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      )}

      {blogs.length > 0 && (
        <div className="mt-10 border-t pt-6">
          <h3 className="text-lg font-bold mb-4">Your Blogs</h3>
          {blogs.map((blog) => (
            <div key={blog.id} className="border p-3 mb-3 rounded">
              <h4 className="font-semibold text-lg">{blog.title}</h4>
              <div className="prose max-w-none mt-2">
                <ReactMarkdown>{blog.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
