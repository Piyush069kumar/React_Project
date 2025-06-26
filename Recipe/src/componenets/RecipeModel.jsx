import React from "react";
import { ImCross } from "react-icons/im";

const RecipeModal = ({onClose,recipe}) =>{
    const ingredients = [];

    let i = 1;
    while(true){
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        const ingredient = recipe[ingredientKey];
        const measure = recipe[measureKey];

        if(!ingredient && !measure){
            break;
        }

        if(ingredient &&ingredient.trim()){
            if(measure && measure.trim()){
                ingredients.push(`${ingredient.trim()} : ${measure.trim()}`)
            }
        }
        i++;
    }

  
    return(
        
       <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
        <div className="bg-white p-6 rounded-xl w-full max-w-2xl relative shadow-2xl max-h-[90vh] overflow-y-auto mt-6 mb-6">
            <button
            onClick={onClose}
            className="absolute top-3 right-4 text-red-600 hover:text-red-800 text-2xl font-bold focus:outline-none"
            >
            <ImCross />
            </button>

            <h2 className="text-2xl font-bold text-green-700 mb-3 text-center">{recipe.strMeal}</h2>
            
            <img
            src={recipe.strMealThumb}

            className="rounded-md mb-4 w-full max-h-72 object-cover"
            />
            
            <div>
            <p className="font-semibold text-gray-700 mb-1">Ingredients:</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1 mb-4">
                {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>

            <p className="font-semibold text-gray-700 mb-1">Instructions:</p>
            <p className="text-sm text-gray-600">{recipe.strInstructions}</p>
            </div>
        </div>
    </div>


    )
}
export default RecipeModal;