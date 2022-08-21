import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer 
 transition ease-in-out delay-50 hover:-translate-y-1 
hover:scale-110 duration-200"
    >
      <title>GitHub</title>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
};
const ExternalLink = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-gray-300 hover:text-AAsecondary hover:cursor-pointer
  transition ease-in-out delay-50 hover:-translate-y-1 
  hover:scale-110 duration-200"
    >
      <title>External Link</title>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
};

export default function SomethingIveBuilt() {
  return (
    <>
     <div className=" flex flex-col space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4">

      {/* // ? Title  */}
      <div className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={"flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary"}
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-semibold text-gray-200 text-xl md:text-2xl w-44 md:w-56">
            {" "}
            Something I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>
        

        {/* // ? Projects */}
        <div className="flex flex-col space-y-8 md:space-y-28">
          {/* // ?  Project  */}
        <div className="relative md:grid md:grid-cols-12 w-full h-96">
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center">
            <div className="relative rounded w-full h-full col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>
              <Img
                src={"/image.jpg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/image.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>
            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Featured Project 1
                </span>
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl">
                  Halcyon
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visual Studio Marketplace
                  </a>
                  ,{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://packagecontrol.io/packages/Halcyon%20Theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Package Control
                  </a>
                  ,{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://atom.io/themes/halcyon-syntax"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Atom Package Manager
                  </a>
                  , and{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://www.npmjs.com/package/hyper-halcyon-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                  </a>
                  .
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">VS Code</span>
                <span className="pr-4 z-10">Sublime Text</span>
                <span className="pr-4 z-10">Atom</span>
                <span className="pr-4 z-10">iTerm2</span>
                <span className="pr-4 z-10">Hyper</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon />
                <ExternalLink />
              </div>
            </div>
          </div>
        </div>

        {/* // ! FIXME the text on the left should be on the right in this section */}
        {/* // ?  Project  */}
        <div className="relative md:grid md:grid-cols-12 w-full h-96  ">
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <div
                className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
              ></div>
              <Img
                src={"/image.jpg"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/image.jpg"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>
            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Featured Project 1
                </span>
                <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl">
                  Halcyon
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visual Studio Marketplace
                  </a>
                  ,{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://packagecontrol.io/packages/Halcyon%20Theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Package Control
                  </a>
                  ,{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://atom.io/themes/halcyon-syntax"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Atom Package Manager
                  </a>
                  , and{" "}
                  <a
                    className="text-AAsecondary"
                    href="https://www.npmjs.com/package/hyper-halcyon-theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    npm
                  </a>
                  .
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">VS Code</span>
                <span className="pr-4 z-10">Sublime Text</span>
                <span className="pr-4 z-10">Atom</span>
                <span className="pr-4 z-10">iTerm2</span>
                <span className="pr-4 z-10">Hyper</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon />
                <ExternalLink />
              </div>
            </div>
          </div>
        </div>
        </div>

        
       
    </div>
    
    </>
   
  );
}
