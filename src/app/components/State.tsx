'use client'
import Image from "next/image";
import { useState } from "react";

// increment function
export default function State() {
  const [counter, setCounter] = useState(1)
  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  // decrement function
  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  //  reset button function
  const handleReset = () => {
    setCounter (0)
  }
  // let counter= 5
  return (

  <div className="flex flex-col space-y-2 justify-center h-400 mt-10 items-center">
<h1 className="bg-yellow-500 border-2 border-yellow-600 px-5 py-2 w-48 text-center">useState</h1>
<p className="bg-pink-400 border-2 border-pink-600 w-48 px-5 py-2 text-center text-2xl">{counter}</p>
<div className="flex gap-5">
<button onClick={handleIncrement} className="border p-2 border-x-2 border-blue-600 w-48 bg-blue-400 active:bg-blue-300 ">Increament </button>
<button onClick={handleDecrement} className="border p-2 border-x-2 border-red-600 w-48 bg-red-400 active:bg-red-300">Decreament</button>
<button onClick={handleReset}  className="border p-2 border-x-2 border-green-600 w-48 bg-green-400 active:bg-green-300">Reset</button>
</div>
  </div>
  );
}

