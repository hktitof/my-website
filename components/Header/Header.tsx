import React, { useRef, useState, useEffect } from "react";
const addClass=(ref:any,myclass:string)=>{
  ref.current?.classLIst.add(myclass);
}
const Header = () => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  let scrollSizeY = 0;
  //Hide when scroll down & show when scroll up
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", e => {
      if(scrollSizeY==0){
        scrollSizeY = window.scrollY;
      }else{
        if(window.scrollY>50){

          if (window.scrollY> scrollSizeY ) {
            if(RefNavBar){
              RefNavBar.current?.classList.remove("translate-y-0");
              RefNavBar.current?.classList.add("-translate-y-full")
            }
          }else{
            RefNavBar.current?.classList.add("translate-y-0");
              RefNavBar.current?.classList.remove("-translate-y-full")
          }
          scrollSizeY=window.scrollY;
        }
      }
      console.log("Windows is scrolling scrollY = ",scrollSizeY);
    });
  }
  return (
    <div
      ref={RefNavBar}
      className="w-full fixed bg-opacity-75  flex 
      justify-between px-12 py-4 drop-shadow-lg transition duration-4000 translate-y-0"
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
