// import React from "react";
// import { useSelector } from "react-redux";
// import { IoClose } from "react-icons/io5";

// const CheckOut =({onClose})=>{
//     const{cartItems, totalAmount } = useSelector((state)=>state.cart)
//     return (
//     <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
//       <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
//         >
//           <IoClose />
//         </button>

//         <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Checkout Summary</h2>

//         {/* Item List */}
//         <div className="space-y-3 max-h-60 overflow-y-auto">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center border-b pb-2"
//             >
//               <p className="text-sm font-medium text-gray-700 w-2/3 truncate">
//                 {item.title}
//               </p>
//               <span className="text-sm text-gray-600">x{item.quantity}</span>
//             </div>
//           ))}
//         </div>

//         {/* Total Amount */}
//         <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
//           <span>Total:</span>
//           <span className="text-indigo-600">₹{totalAmount.toFixed(2)}</span>
//         </div>

//         <button
//           onClick={() => {
//             alert("Order placed successfully!");
//             onClose();
//           }}
//           className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
//         >
//           Confirm Order
//         </button>
//       </div>
//     </div>
//   );
// }
// export default CheckOut;





import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

const CheckOut = ({ onClose }) => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const modalRef = useRef();

  // Handle click outside modal
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div
        ref={modalRef}
        className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Checkout Summary</h2>

        {/* Item List */}
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <p className="text-sm font-medium text-gray-700 w-2/3 truncate">
                {item.title}
              </p>
              <span className="text-sm text-gray-600">x{item.quantity}</span>
            </div>
          ))}
        </div>

        {/* Total Amount */}
        <div className="mt-6 border-t pt-4 flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-indigo-600">₹{totalAmount.toFixed(2)}</span>
        </div>

        <button
          onClick={() => {
            alert("Order placed successfully!");
            onClose();
          }}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
