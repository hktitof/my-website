import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const text = "mainly derives from inner attitudes.";
// const text =
//   "Happiness does not come about only due to external circumstances; it mainly derives from inner attitudes.";
export default function Page() {
  const clickMe = async () => {};
  const myText = [];
  const textSize=useRef<HTMLSpanElement>(null);
  const charRe=useRef<HTMLSpanElement>(null);
  useEffect(() => {
    window.addEventListener("resize",()=>{
      console.log("")
    })
  }, []);
  const CursorPosition = 0;
  console.log("page rendered");
  console.log(text.split(""));
  return (
    <>
      <div className="bg-AAprimary h-screen w-full flex items-center">
        <main className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col space-y-12">
          <span ref={textSize} className="lg:text-3xl md:text-xl sm:text-xl hover:cursor-pointer text-justify ">
            <span className="text-gray-400">
              Happiness does not come about only due to external circumstances;
              it<span> </span>
            </span>
            {text.split("").map((letter, index) => {
              return (
                <span
                  // ref={}
                  key={index}
                  // ref={el => (itemRef.current[index] = el)}
                  className={`relative  text-gray-400`}
                >
                  {letter}
                  {CursorPosition === index ? (
                    <motion.span
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        opacity: { duration: 0.8, repeat: Infinity },
                      }}
                      className="absolute left-0 w-[3px] lg:h-8 sm:bottom-0 sm:h-5 h-4 rounded bg-AAsecondary "
                    ></motion.span>
                  ) : (
                    <></>
                  )}
                  
                </span>
              );
            })}
          </span>

          {/**
           * @textInput
           */}
          <input
            type="text"
            className="w-52 bg-AAprimary text-xl text-center text-gray-600 border-b-2 border-b-gray-600 
              py-2 px-4 focus:outline-none "
            onChange={e => {}}
          />
        </main>
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center bg-AAprimary">
        <button
          onClick={clickMe}
          className="border-2 py-2 px-4 rounded text-AAsecondary"
        >
          Test
        </button>
      </div>
    </>
  );
}
