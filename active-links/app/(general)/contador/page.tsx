"use client";
import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"  
        onClick={() => setCount(count + 1)}>Incrementar</button>

        <button className="px-4 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-100 transition"  
        onClick={() => {setCount(count - 1); console.log(count);}}>Decrementar</button>
    </div>
  );
}

/*
className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
class="px-4 py-2 border border-gray-500 text-gray-700 rounded-lg hover:bg-gray-100 transition"


  <button class="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
  Agregar
</button>
 */