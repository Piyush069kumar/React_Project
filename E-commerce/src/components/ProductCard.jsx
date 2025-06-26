import React from "react";
import { addToCart,decreaseQuantity,increaseQuantity } from "../redux/slices/CartSlices";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const ProductCard=({item})=>{
    const dispatch = useDispatch();
    const {cartItems} = useSelector((state)=>state.cart)

    // const existingItem = cartItems.find((cartItem)=>cartItem.id===item.id);

    // const quantity = useSelector((state) => {
    //     const existingItem = state.cart.cartItems.find(
    //         (cartItem) => cartItem.id === item.id
    //     );
    //     return existingItem?.quantity || 0;
    // });

    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    const quantity = existingItem?.quantity || 0;

    const handleDecrease=()=>{
        dispatch(decreaseQuantity(item.id));
        // toast.success("")
    }

    const handleIncrease=()=>{
        dispatch(increaseQuantity(item.id));
        // toast.success("")
    }

    const handleAddToCart=()=>{
        dispatch(addToCart(item));
        toast.success("Added successfully")
    }

    return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col transition-transform duration-300 hover:scale-105">
      <div className="h-48 flex items-center justify-center mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {item.title.split(" ").slice(0, 5).join(" ") + "..."}
      </h3>

      <p className="text-sm text-gray-500 text-center mb-4">
        {item.description.split(" ").slice(0, 15).join(" ") + "..."}
      </p>

      <p className="text-xl font-bold text-center mb-3">₹{item.price}</p>

      {quantity > 0 ? (
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={handleDecrease}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md font-semibold text-lg"
          >
            <FaMinus />

          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md font-semibold text-lg"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-auto"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}
export default ProductCard;