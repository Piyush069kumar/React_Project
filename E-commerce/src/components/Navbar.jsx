import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = ()=>{

    const {cartItems} =useSelector( (state)=>state.cart);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return(
        <nav className="w-full bg-gray-800 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                <NavLink to="/">
                <img src="/logo.png" alt="Logo" className="h-10" />
                </NavLink>
                <div className="flex items-center space-x-6 text-base">
                <NavLink to="/" className="hover:text-green-400">Home</NavLink>
                <NavLink to="/cart" className="relative">
                    <FaShoppingCart className="text-xl" />
                    {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                        {totalQuantity}
                    </span>
                    )}
                </NavLink>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;