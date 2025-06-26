import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ProductCard from "../components/ProductCard";


const Home = ()=>{

    const[loading,setLoading] = useState(false);
    const[items,setItems] = useState([]);


    

    const fetchItems = async()=>{
        setLoading(true)
        try{
            const res = await fetch ("https://fakestoreapi.com/products");
            const data = await res.json();
            console.log(data);
            setItems(data);
            setLoading(false);
        }
        catch(e){
            alert("something went wrong")
        }
        setLoading(false);
    }

    useEffect( ()=>{
        fetchItems();
    },[]);


    return(
         <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
            {loading ? (
                <Spinner />
            ) : items.length > 0 ? (
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.slice(0, 12).map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 text-xl">No Data Found</p>
            )}
        </div>
    )
}
export default Home;


