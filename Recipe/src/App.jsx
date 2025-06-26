import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Navbar from './componenets/Navbar';
import Home from './pages/Home';
import MyRecipes from './componenets/MyRecipe';

const App = () => {

   return (
    <div className=" bg-gray-700 min-h-screen font-sans">
      
      <Navbar />
      
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
      </Routes>
    </div>
  );
};

export default App;
