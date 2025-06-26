import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogDetail from './components/BlogDetail';
import Editblog from './components/Editblog';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import { Toaster } from "react-hot-toast";

const App = () => {

  return (
   <div>
     <Navbar/>
     <Toaster/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/edit/:id" element={<Editblog />} />
   </Routes>
   </div>
  );
};

export default App;
