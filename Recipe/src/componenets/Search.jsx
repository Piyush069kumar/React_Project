import React, { useEffect, useState } from "react";

const Search = ({onSearch})=>{

    const[input,setInput] = useState("");

    useEffect( ()=>{
        const delay = setTimeout( ()=>{
            if(input.trim()){
                onSearch(input.trim());
            } 
        },500)
        return ()=>clearTimeout(delay);
    },[input])

   return (
    <input
      type="text"
      placeholder="Search for recipes..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border border-gray-300 rounded-md p-3 w-2/3 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm text-gray-700"
    />
  );
}
export default Search;