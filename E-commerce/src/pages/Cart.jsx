import React, { useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CheckOut from "../components/CheckOut";

const Cart = () => {
  const[open,setOpen] = useState(false);
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

   return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      {cartItems.length > 0 ? (
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Shopping Cart</h2>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cart Items */}
            <div className="flex-1 space-y-6">
              {cartItems.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            {/* Summary */}
            <div className="w-full lg:w-1/3 bg-white shadow-lg p-8 rounded-xl border border-gray-200 ">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h3>
              <div className="space-y-4 text-gray-600 flex flex-col justify-between">
                <p className="flex justify-between text-base">
                  <span>Total Items:</span>
                  <span>{totalQuantity}</span>
                </p>
                <p className="flex justify-between text-base">
                  <span>Total Amount:</span>
                  <span className="font-bold text-indigo-600">₹{totalAmount.toFixed(2)}</span>
                </p>
              </div>
              <button  onClick={() => setOpen(true)} className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <NavLink to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Go to Home
            </button>
          </NavLink>
        </div>
      )}
      {open &&
          <CheckOut onClose={() => setOpen(false)}/>
      }
    </div>
  );
};

export default Cart;
