import React, { useEffect, useState } from "react";
import Card from "../componenets/Card";
import Search from "../componenets/Search";
import Category from "../componenets/Category";

const Home = ( )=>{

    const[recipes, setRecipes] = useState([]);

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await res.json();
    setCategories(data.categories || []);
    };

    // console.log(categories);


    const fetchRecipesByCategory = async (category) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await res.json();
    setRecipes(data.meals || []);
    };


    
    const fetchRecipes = async(query) =>{
          const url = query
                        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
                        : `https://www.themealdb.com/api/json/v1/1/random.php`;
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setRecipes(data.meals || []);
    }

    useEffect( ()=>{
        fetchRecipes();
        fetchCategories();
    },[])


   return (
  <div className="max-w-screen-lg mx-auto px-4">
    <p className="text-center text-3xl font-bold text-green-500 my-6 tracking-wide"> Search your Recipe</p>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <Search onSearch={fetchRecipes} />
      <Category categories={categories} fetchRecipesByCategory={fetchRecipesByCategory} />
    </div>

    {/* Recipe Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 ">
      {recipes.map((recipe) => (
        <Card key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  </div>
);
}

export default Home;

