import React from "react";
import {motion} from "../../../node_modules/framer-motion/dist/framer-motion";
const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-AAsecondary"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-24">
        {/* 0.1 About Me */}
        <div className="flex flex-col space-y-8 px-9 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] bg-gray-800">
          <div className="flex items-center space-x-4 ">
            <div className="flex flex-row space-x-4 items-end ">
              <span className="text-AAsecondary font-mono text-xl">
                &gt; 0.1
              </span>
              <span className="text-gray-300 font-mono text-xl sm:text-2xl">
                About Me
              </span>
            </div>
            <div className="bg-gray-400 h-[0.2px] w-32 sm:w-72"></div>
          </div>
          {/* Paragraphs */}

          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-7/12 space-y-4">
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  Hello! My name is Abdellatif and I enjoy solving problems and
                  creating codes that live on the internet. My interest in
                  computer science started back in 2009 when I decided to try
                  learning{" "}
                  <span className="text-AAsecondary">Ethical Hacking</span>{" "}
                  using BackTrack OS — turns out programming skills are
                  essential to achieve that, my journey with programming started
                  from that time!
                </span>
              </div>
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  Fast-forward to today, and I&apos;ve had the privilege of
                  working at
                  <br />a start-up, a corporation, and a Google Developer
                  Student clubs Lead. My main focus these days is creating and
                  developing Smart Contracts. that time!
                </span>
              </div>
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  I also recently Developed these Four projects that you&apos;ll
                  find below using Node & Next js.
                </span>
              </div>
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  Here are a few technologies I’ve been working with recently:
                </span>
              </div>
              <div className="font-Header tracking-wide flex flex-row space-x-16">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon />
                      <span className="text-gray-400 text-sm">
                        Solidity
                      </span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon />
                      <span className="text-gray-400 text-sm">
                        Node
                      </span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon />
                      <span className="text-gray-400 text-sm">
                        JavaScript (ES6+)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon />
                      <span className="text-gray-400 text-sm">
                        TypeScript
                      </span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon />
                      <span className="text-gray-400 text-sm">
                        Next js
                      </span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon />
                      <span className="text-gray-400 text-sm">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-72 h-72 md:w-5/12 md:5/12">
              <div className="relative w-full border border-red-200 h-full md:h-2/3">
                <div className="relative bg-white w-full md:w-10/12 h-full">
                  <div className="absolute border-AAsecondary border-2 w-full md:w-11/12 h-full md:h-3/6 lg:h-5/6 translate-x-4 translate-y-4 rounded"></div>
                  <div className="absolute bg-gray-300 w-11/12 h-3/6 lg:h-5/6 border"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
