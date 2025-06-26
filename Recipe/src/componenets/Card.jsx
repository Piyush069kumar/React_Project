import React, { useState, useEffect } from "react";
import RecipeModal from './RecipeModel';
import toast from 'react-hot-toast';

const Card = ({ recipe,removeFromList }) => {
  const [open, setOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myRecipes")) || [];
    const exists = saved.find((r) => r.idMeal === recipe.idMeal);
    setIsSaved(exists);
  }, [recipe]);

  const toggleSaveRecipe = () => {
    const saved = JSON.parse(localStorage.getItem("myRecipes")) || [];

    if (isSaved) {
      const updated = saved.filter((r) => r.idMeal !== recipe.idMeal);
      localStorage.setItem("myRecipes", JSON.stringify(updated));
      toast.success("Recipe removed!");
      setIsSaved(false);
      
      if (removeFromList) removeFromList(recipe.idMeal);

    } else {
      saved.push(recipe);
      localStorage.setItem("myRecipes", JSON.stringify(saved));
      toast.success("Saved successfully!");
      setIsSaved(true);
    }
  };

  return (
    <div className="border border-gray-200 p-4 shadow-md rounded-lg bg-white hover:shadow-lg transition">
      <img
        src={recipe.strMealThumb}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800">{recipe.strMeal}</h3>
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm px-4 py-2 rounded"
        >
          View
        </button>
        <button
          onClick={toggleSaveRecipe}
          className={`${
            isSaved ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          } transition text-white text-sm px-4 py-2 rounded`}
        >
          {isSaved ? "Unsave" : "Save"}
        </button>
      </div>
      {open && 
        <RecipeModal recipe={recipe} onClose={() => setOpen(false)} />
      }
    </div>
  );
};

export default Card;
