import React, { useEffect, useState } from "react";
import Card from "./Card";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myRecipes")) || [];
    setRecipes(saved);
  }, []);

  const removeFromList = (idMeal) => {
    const updated = recipes.filter((r) => r.idMeal !== idMeal);
    setRecipes(updated);
    localStorage.setItem("myRecipes", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">My Saved Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => <Card key={recipe.idMeal} recipe={recipe} removeFromList={removeFromList}/>)}
      </div>
    </div>
  );
};

export default MyRecipes;
