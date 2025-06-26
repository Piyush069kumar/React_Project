
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { BiReset } from "react-icons/bi";
import { BiTimer } from "react-icons/bi";
import { IoMdStopwatch } from "react-icons/io";


const Counter = () =>{

    const[step ,setStep] = useState(null);
    const[intervalId, setIntervalId] = useState(null);
    // console.log(step);

     useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

 
  useEffect(() => {
    const stored = localStorage.getItem("step");
    if (stored && stored !== "undefined") {
      setStep(JSON.parse(stored));
    }
  }, []);

    const increment = ()=>{
        setStep(step+1);
    }

    const decrement = ()=>{
        // setStep(step-1);
        setStep(prev=>prev-1);  //both are correct 
    }

    const reset = () =>{
        setStep(0);
    }

    // const countDown = () =>{
    //     if(intervalId)return;

    //     const id = setInterval( ()=>setStep(prev => prev-1),1000);
    //     setIntervalId(id);
    // }


    const countDown = ()=>{
        if(intervalId)return;
        const id = setInterval(()=>{
                setStep(prev=>{
                    if(prev<1){
                        clearInterval(id);
                        setIntervalId(null);
                        return 0;
                    }
                    return prev-1;
                });
            },1000);
            setIntervalId(id);
    }

    const stop = () =>{
        clearInterval(intervalId);
        setIntervalId(null);
    }

    return (
    <div>
      <input
        type="number"
        className="w-full px-4 py-2 rounded-md text-black text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={step === null ? "" : step}
        onChange={(e) => setStep(Number(e.target.value))}
        placeholder="Enter number"
      />

      <div className="flex flex-wrap gap-4 justify-center mt-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-semibold transition"
          title="Decrement"
        >
          <FaMinus />
        </button>

        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-full font-semibold transition"
          title="Reset"
        >
          <BiReset />
        </button>

        <button
          onClick={increment}
          className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-full font-semibold transition"
          title="Increment"
        >
          <FaPlus />
        </button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <button
          onClick={countDown}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full font-semibold transition flex items-center gap-2"
          title="Enable Countdown"
        >
          <BiTimer className="text-lg" />
          Countdown
        </button>

        <button
          onClick={stop}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full font-semibold transition flex items-center gap-2"
          title="Stop Countdown"
        >
          <IoMdStopwatch className="text-lg" />
          Stop
        </button>
      </div>
    </div>
  );
}
export default Counter;