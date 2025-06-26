
import React from "react";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/slices/CartSlices";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";


const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const quantity = existingItem?.quantity || 0;


  //  const quantity = useSelector((state) => {
  //       const existingItem = state.cart.cartItems.find(
  //           (cartItem) => cartItem.id === item.id
  //       );
  //       return existingItem?.quantity || 0;
  //       });


  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    toast.success("Remove successfull")
    
  };

  return (
     <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.title.split(" ").slice(0, 5).join(" ") + "..."}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xl font-bold text-indigo-600">₹{item.price}</p>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
            >
              −
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="mt-4 md:mt-0 text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
