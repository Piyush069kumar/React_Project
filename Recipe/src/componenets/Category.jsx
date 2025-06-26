import React from "react";

const Category = ({ categories, fetchRecipesByCategory }) => {
  return (
    <div>
      
      <select
        className=" border border-gray-300 rounded-md p-3 w-full  border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
        onChange={(e) => {
          const category = e.target.value;
          if (category){
            fetchRecipesByCategory(category);
          } 
        }}
      >
        <option value="">-- Filter by Category --</option>
        {categories.map((cat) => (
          <option key={cat.idCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;


