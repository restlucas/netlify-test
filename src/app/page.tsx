"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl font-bold">Testing Next Application</h1>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-white text-black py-2 rounded-md w-[150px]"
        >
          Counter {count}
        </button>
      </div>
    </>
  );
}
