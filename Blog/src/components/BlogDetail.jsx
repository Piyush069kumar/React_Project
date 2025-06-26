import React, { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const BlogDetail = ()=>{
    const { id } = useParams();
    const[blogs,setBlogs]  = useState([]);
    
    useEffect( ()=>{
        const stored = localStorage.getItem("blogs")
        if(stored){
            setBlogs(JSON.parse(stored))
        }
    })
    const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="p-4">Blog not found.</p>;
    return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <ReactMarkdown>{blog.content}</ReactMarkdown>
    </div>
  );
}
export default BlogDetail;








