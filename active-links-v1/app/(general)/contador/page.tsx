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
