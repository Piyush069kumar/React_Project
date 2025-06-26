// import React, { useEffect, useState } from "react";
// import { evaluate } from 'mathjs';

// const Calculator =()=>{

//     const[input,setInput] = useState("");
    

//      const handleClick = (value) => {
//     if (value === "C") {
//       setInput("");
//     } else if (value === "=") {
//       try {
//         setInput(evaluate(input).toString());
//       } catch {
//         setInput("Error");
//       }
//     } else {
//       setInput(input + value);
//     }
//   };


//   useEffect( ()=>{
//     const handleKeyPress = (value)=>{
//         const key = value.key;

//         if(/[\d+\-*/.]/.test(key)){
//             handleClick(key);
//         }
//         else if(key === "Enter"){
//             handleClick("=");
//         }
//         else if(key === "Backspace"){
//             setInput(prev=>prev.slice(0,-1));
//         }
//         else if (key === "Escape") {
//         setInput("");
//       }
//     };
//     window.addEventListener("keydown",handleKeyPress);
//     return ()=>window.removeEventListener("keydown",handleKeyPress);
//   },[input])


    

//     const buttons = [
//     "7", "8", "9", "/",
//     "4", "5", "6", "*",
//     "1", "2", "3", "-",
//     "0", ".", "=", "+",
//     "C"
//   ];

//   return (
//     <div style={{ padding: 20, maxWidth: 300, margin: "auto", backgroundColor: "#eee", borderRadius: 10 }} className="${
//         isDark ? 'bg-black text-white' : 'bg-gray-100 text-black'
//       } transition-colors duration-300`}">
//       <div style={{ marginBottom: 10, fontSize: 24 }}>
//         <input
       
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           style={{ width: "100%", fontSize: 24, padding: 5,direction: "rtl" }}
//         />
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
//         {buttons.map((b, i) => (
//           <button key={i} onClick={() => handleClick(b)} style={{ padding: 15, fontSize: 18 }}>
//             {b}
//           </button>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default Calculator;





import React, { useEffect, useState } from "react";
import { evaluate } from "mathjs";

const Calculator = ({ isDark }) => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(evaluate(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };


  //keyboard support
  useEffect(() => {
    const handleKeyPress = (value) => {
      const key = value.key;

      if (/[\d+\-*/.]/.test(key)) {
        handleClick(key);
      } else if (key === "Enter") {
        handleClick("=");
      } else if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        setInput("");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [input]);

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div
      className={`p-6 w-72 rounded-xl shadow-xl transition-colors duration-300 ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`w-full mb-4 p-2 text-right text-2xl rounded ${
          isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
        }`}
      />

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((b, i) => (
          <button
            key={i}
            onClick={() => handleClick(b)}
            className={`p-3 text-xl rounded transition-all duration-200 font-medium ${
              isDark
                ? "bg-gray-300 hover:bg-gray-400 text-black"
                : "bg-gray-700 hover:bg-gray-600 text-white"
            } ${b === '=' ? 'col-span-1 bg-green-500 hover:bg-green-600 text-white' : ''}
               ${b === 'C' ? 'col-span-1 bg-red-500 hover:bg-red-600 text-white' : ''}`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;



