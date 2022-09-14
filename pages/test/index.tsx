import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const text =
  "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.";
// const text =
//   "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.";
export default function Page() {
  const clickMe = async () => {};
  const myText = [];
  const textSize = useRef<HTMLDivElement>(null);
  const charRe = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("");
    });
  }, []);
  const CursorPosition = 0;
  console.log("page rendered");
  console.log(text.split(""));
  return (
    <>
      <div className="bg-AAprimary h-screen w-full flex items-center">
        <main className="w-full 2xl:px-96 xl:px-80 lg:px-64 md:px-28 px-12 flex flex-col space-y-12">
          <span
            ref={textSize}
            className=" lg:text-3xl md:text-xl sm:text-xl hover:cursor-pointer text-justify "
          >
            {text.split(" ").map((word, index) => {
              if (index == text.split(" ").length - 1) {
                return (
                  <span key={index} className="">
                    {word.split("").map((char, i) => {
                      return (
                        <span key={i} className="text-gray-500">
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              } else {
                return (
                  <span key={index} className="">
                    {word.split("").map((char, i) => {
                      return (
                        <span key={i} className="relative text-gray-500">
                          {char}
                          {word.localeCompare("out")==0 && char.localeCompare("t")==0 ? (
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
                    <span key={index} className="text-gray-500">
                    &nbsp;
                    </span>
                  </span>
                );
              }
            })}
          </span>

          {/* {CursorPosition === index ? (
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
                  )} */}
        </main>
      </div>
    </>
  );
}
