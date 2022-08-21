import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col  items-center py-24 bg-AAprimary">
        {/* // ? 0.1 About Me */}
        <div
          className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
        >
          <div className="flex flex-row items-center">
            <div className="flex flex-row  items-center mr-4">
                <ArrowIcon
                  className={"flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary"}
                />
              <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
                  {" "}
                  01.
                </span>
              <span className="flex-none text-gray-300 font-semibold text-xl sm:text-2xl pl-4">
                About Me
              </span>
            </div>
            <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
          </div>
          {/* // ? Paragraphs */}

          <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
            <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
              <div className="font-Header tracking-widest">
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
              <div className="">
                <span className="text-gray-400  ">
                  Fast-forward to today, I&apos;ve had the privilege of working
                  at
                  <br />
                  <span className="text-AAsecondary">a start-up</span>, a
                  corporation, and a Google Developer Student clubs Lead. My
                  main focus these days is creating and developing Smart
                  Contracts. that time!
                </span>
              </div>
              <div className="font-Header tracking-widest">
                <span className="text-gray-400 ">
                  I also recently Developed these Four projects that you&apos;ll
                  find below using Node & Next js.
                </span>
              </div>
              <div className="font-Header tracking-widest">
                <span className="text-gray-400  ">
                  Here are a few technologies I’ve been working with recently:
                </span>
              </div>
              <div className="font-Header tracking-widest flex flex-row space-x-16">
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 ">Solidity</span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 ">Node</span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 ">JavaScript (ES6+)</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <div className="flex flex-col space-y-4 sm:text-base text-sm">
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 ">TypeScript</span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 ">Next js</span>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                      <span className="text-gray-400 ">Tailwind CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* // ? Image in Desktop and Tablet */}
            <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
              <div
                className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
              ></div>

              <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
                <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-40 duration-300 rounded overflow-hidden"></div>
                <Img
                  src={"/img/titof.jpg"}
                  className={"object-contain rounded-lg"}
                  alt="My Image Not Found"
                />
              </div>
            </div>
            {/* // ?Image in Mobile */}
            <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
              <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
              <div className="absolute w-48 h-full rounded overflow-hidden">
                <Img
                  src={"/img/titof.jpg"}
                  className={"object-contain rounded-lg"}
                  alt="My Image Not Found"
                />
              </div>
              <div className="absolute w-48 h-full  bg-AAsecondary opacity-60  rounded overflow-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
