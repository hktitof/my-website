import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function WhatIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px, 
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const barPositions: string[] = [
    "translate-y-[0px]",
    "translate-y-[34px]",
    "translate-y-[69px]",
    "translate-y-[105px]"
  ];
  let barCurrentPosition:string = barPositions[0];
  // ! FIXME: Bar animation needs to be fixed when clicking multiple times to change the position
  const barTranslateY = (position: number) => {
    barRef.current?.classList.remove(barCurrentPosition.toString());
    barRef.current?.classList.add(barPositions[position].toString());
    barCurrentPosition = barPositions[position];
  };
  return (
    <div className="flex flex-col items-center justify-center py-24 space-y-12">
      {/* Title "Where I've Worked" */}
      <section className="flex flex-row space-x-3 items-center">
        <ArrowIcon className={"h-6 w-6 text-AAsecondary"} />
        <span className="text-AAsecondary font-mono text-xl"> 02.</span>
        <span className="text-gray-200 text-2xl">Where I&apos;ve Worked</span>
        <div className="bg-gray-400 h-[0.2px] w-28 sm:w-80"></div>
      </section>
      {/* Where I've Worked Content */}
      <section className="flex flex-row items-start justify-start">
        {/* Left side of Where I've Worked, contains the bar and name of companies */}
        <div className="flex flex-row space-x-4">
          {/* left bar Holder */}
          <div className="relative h-34 w-0.5 bg-gray-500 rounded">
            {/* animated left bar */}
            <div
              ref={barRef}
              className={`absolute w-0.5 h-10 rounded bg-AAsecondary
            transition translate-y-0 duration-300`}
            ></div>
          </div>
          {/* Companies name as buttons */}
          <div className="flex flex-col">
            <button
              onClick={() => barTranslateY(0)}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono  
             py-2 pl-6 px-4 w-32"
            >
              Google
            </button>
            <button
              onClick={() => barTranslateY(1)}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-32"
            >
              Facebook
            </button>
            <button
              onClick={() => barTranslateY(2)}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-32"
            >
              Twitter
            </button>
            <button
              onClick={() => barTranslateY(3)}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-32"
            >
              Discord
            </button>
            
          </div>
        </div>
        {/* Description for The job */}
        <div className="flex flex-col space-y-5 max-w-xl">
          <div className="flex flex-col spacey-y-2">
            {/* Title */}
          <span className="text-gray-100 text-lg font-mono">Studio Developer <span 
          className="text-AAsecondary">@ Scout</span></span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January - June 2017</span>
          </div>
          
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary"} />
            <span className="text-gray-500 text-sm">Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span>
          </div>
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary"} />
            <span className="text-gray-500 text-sm">Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span>
          </div>
        </div>
      </section>
    </div>
  );
}
