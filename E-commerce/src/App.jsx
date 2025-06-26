import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Home from './pages/Home';
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

const App = () => {

  return (
   <div>
     <Navbar/>
     <Toaster/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
   </Routes>
   </div>
  );
};

export default App;
