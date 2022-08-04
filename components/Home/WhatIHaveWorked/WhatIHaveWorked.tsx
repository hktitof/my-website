import React from "react";
import {motion} from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import GoogleDesc from "./Descriptions/GoogleDesc";
import FacebookDesc from "./Descriptions/FacebookDesc";
export default function WhatIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  // const barPositions: string[] = [
  //   "translate-y-[0px]",
  //   "translate-y-[34px]",
  //   "translate-y-[69px]",
  //   "translate-y-[105px]",
  // ];
  const [barPosition, setBarPosition] = React.useState<Number>(0)
  // let barCurrentPosition: string = barPositions[0];
  // ! FIXME: Bar animation needs to be fixed when clicking multiple times to change the position
  // const barTranslateY = (position: number) => {
  //   barRef.current?.classList.remove(barCurrentPosition);
  //   barRef.current?.classList.add(barPositions[position]);
  //   barCurrentPosition = barPositions[position];
  // };
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
        <CompaniesBar setDescriptionJob={setDescriptionJob}/>
        {/* Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar=(props)=>{
  const [barPosition, setBarPosition] = React.useState<Number>(0)
  return(
    <>
    <div className="hidden md:flex flex-row space-x-4">
          {/* left bar Holder */}
          <div className="relative h-34 w-0.5 bg-gray-500 rounded">
            {/* animated left bar */}
            <motion.div
              animate={{y:barPosition}}
              // ref={barRef}
              className={`absolute w-0.5 h-10 rounded bg-AAsecondary`}
            ></motion.div>
          </div>
          {/* // ! FIXME transition is off when changing the state */}
          {/* Companies name as buttons */}
          <div className="flex flex-col">
            <button
              id="button-1"
              onClick={() => {
                setBarPosition(0)
                // barTranslateY(0);
                // console.log("clicked on Google : ")
                // console.log("current value after executing the function ")
                props.setDescriptionJob("Google");
              }}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono  
             py-2 pl-6 px-4 w-32"
            >
              Google
            </button>
            <button
            id="button-2"
              onClick={() => {
                setBarPosition(34)
                // barTranslateY(1);
                props.setDescriptionJob("Facebook");
              }}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-32"
            >
              Facebook
            </button>
            <button
            id="button-3"
              onClick={() => {
                setBarPosition(69)
                // barTranslateY(2)
              }
            }
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-32"
            >
              Twitter
            </button>
            <button
            id="button-4"
              onClick={() => {
                setBarPosition(107)
                // barTranslateY(3)
              }}
              className="text-sm text-left hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded text-gray-400 font-mono
              py-2 pl-6 px-4 w-32"
            >
              Discord
            </button>
          </div>
        </div>
    </>
  )
}
