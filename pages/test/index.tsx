import React from "react";
import { useEffect, useRef,useState } from "react";
import { getGPUTier, TierResult } from "detect-gpu";
export default function Page() {
    const [gpuTier,setGpuTier]=useState(null);
  const clickMe = async () => {
    const temp_var = await getGPUTier();
    setGpuTier(temp_var);
  };
  useEffect(() => {
    clickMe();
    console.log("UseEffect gpuTier : ", gpuTier);
  }, []);

  console.log("page rendered");
  console.log("rendering gpuTier : ", gpuTier);
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-AAprimary">
      <button
        onClick={clickMe}
        className="border-2 py-2 px-4 rounded text-AAsecondary"
      >
        Test
      </button>
      <div className="flex flex-row space-x-8">
      <span className="text-white">GPU : </span>

      <span  className="text-white">
        {gpuTier?.gpu || "Checking..."}
      </span>
      </div>
    </div>
  );
}
