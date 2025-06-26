import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditBlog = () => {
  const { id } = useParams();
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();

    // useEffect( ()=>{
    //     let stored = localStorage.getItem("blogs")
    //     if(stored){
    //         const blogs = JSON.parse(stored);
    //         const blogToEdit = blogs.find(blog => blog.id === parseInt(id));
    //         if(blogToEdit){
    //             setTitle(blogToEdit.title);
    //             setContent(blogToEdit.content)
    //         }
    //     }
    // },[id])

    if (title === "" && content === "") {
        const stored = localStorage.getItem("blogs");
        if (stored) {
            const blogs = JSON.parse(stored);
            const blogToEdit = blogs.find(blog => blog.id === parseInt(id));
            if (blogToEdit) {
            setTitle(blogToEdit.title);
            setContent(blogToEdit.content);
            }
    }
}


    const handleUpdate=(e)=>{
        e.preventDefault();
        const stored = localStorage.getItem("blogs");
        if(stored){
            let blogs = JSON.parse(stored);
            blogs = blogs.map(blog =>
            blog.id === parseInt(id) ? { ...blog, title:title, content:content } : blog
            );
            localStorage.setItem("blogs", JSON.stringify(blogs));
            navigate("/");
        }    }

  return (
    <div className="p-4">
      <h2 className="text-xl font-italic mb-2">Edit Blog #{id}</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          className="border p-2 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full h-40 mb-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlog;