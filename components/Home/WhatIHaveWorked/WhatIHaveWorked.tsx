import React from "react";

export default function WhatIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  const barPositions: string[] = ["translate-y-0", "translate-y-8"];
  let barCurrentPosition = "translate-y-0";
  // ! FIXME: Bar animation needs to be fixed when clicking multiple times to change the position
  const barTranslateY = (position: number) => {
    barRef.current?.classList.remove(barCurrentPosition);
    barRef.current?.classList.add(barPositions[position]);
    barCurrentPosition = barPositions[position];
  };
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-12">
      {/* Title "Where I've Worked" */}
      <section className="flex flex-row space-x-3 items-center">
        <span className="text-AAsecondary font-mono text-xl">&gt; 02.</span>
        <span className="text-gray-200 text-2xl">What I&apos;ve Worked</span>
        <div className="bg-gray-400 h-[0.2px] w-28 sm:w-80"></div>
      </section>
      {/* Where I've Worked Content */}
      <section className="flex flex-row ">
        {/* Left side of Where I've Worked, contains name of the images */}
        <div className="flex flex-row space-x-4">
          {/* left bar Holder */}
          <div className="relative h-96 w-0.5 bg-gray-500 rounded">
            {/* animated left bar */}
            <div
              ref={barRef}
              className={`absolute w-0.5 h-10 rounded bg-AAsecondary
            transition ${barCurrentPosition} duration-300`}
            ></div>
          </div>
          {/* Companies name as buttons */}
          <div className="flex flex-col">
            <button
              onClick={() => barTranslateY(0)}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono  
             py-2 pl-6 px-4 w-44"
            >
              Google
            </button>
            <button
              onClick={() => barTranslateY(1)}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-44"
            >
              Facebook
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
