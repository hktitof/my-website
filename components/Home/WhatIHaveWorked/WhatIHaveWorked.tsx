import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import GoogleDesc from "./Descriptions/GoogleDesc";
import FacebookDesc from "./Descriptions/FacebookDesc";
export default function WhatIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const barPositions: string[] = [
    "translate-y-[0px]",
    "translate-y-[34px]",
    "translate-y-[69px]",
    "translate-y-[105px]",
  ];
  let barCurrentPosition: string = barPositions[0];
  // ! FIXME: Bar animation needs to be fixed when clicking multiple times to change the position
  const barTranslateY = (position: number) => {
    barRef.current?.classList.remove(barCurrentPosition.toString());
    barRef.current?.classList.add(barPositions[position].toString());
    barCurrentPosition = barPositions[position];
  };
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "Google":
        return <GoogleDesc />;
      case "Facebook":
        return <FacebookDesc />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("Google");
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
          {/* // ! FIXME transition is off when changing the state */}
          {/* Companies name as buttons */}
          <div className="flex flex-col">
            <button
              onClick={() => {
                barTranslateY(0);
                setDescriptionJob("Google");
              }}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono  
             py-2 pl-6 px-4 w-32"
            >
              Google
            </button>
            <button
              onClick={() => {
                barTranslateY(1);
                setDescriptionJob("Facebook");
              }}
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
        {GetDescription()}
      </section>
    </div>
  );
}
