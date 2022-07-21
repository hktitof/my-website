import React, { useRef, useState, useEffect } from "react";
const Header = () => {
  const RefNavBar = useRef();
  let scrollSizeY = 0;
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", e => {
      scrollSizeY = window.scrollY;
      if (scrollSizeY > 24) {
        RefNavBar.current?.classList.add("bg-white");
      }
      console.log(scrollSizeY);
    });
  }
  // transition -translate-y-full duration-30

  return (
    <div
      ref={RefNavBar}
      className="w-full fixed bg-opacity-75  flex 
      justify-between px-12 py-4 drop-shadow-lg "
    >
      <span className="text-AAsecondary">Logo</span>
      <div className="font-mono text-xs flex flex-row items-center space-x-8">
        <span className="text-AAsecondary">
          01.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            About
          </span>
        </span>
        <span className="text-AAsecondary">
          02.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Experience
          </span>
        </span>
        <span className="text-AAsecondary">
          03.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Work
          </span>
        </span>
        <span className="text-AAsecondary">
          04.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Contact
          </span>
        </span>
        <button className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover">
          Resume
        </button>
      </div>
    </div>
  );
};
export default Header;
