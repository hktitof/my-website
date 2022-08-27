import React from "react";
import { getGPUTier } from 'detect-gpu';
export default function Page() {
    const clickMe=async ()=>{
        const gpuTier = await getGPUTier();

        console.log(gpuTier);
    }
 
  console.log("page rendered")
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-AAprimary">
     <button onClick={clickMe} className="border-2 py-2 px-4 rounded text-AAsecondary">Test</button>
    </div>
  );
}
