import React, { useRef, useState } from "react";
import Logo from "../Headercomp/Logo";
import DesktopMenu from "../Headercomp/DesktopMenu";
import IconMenu from "../Headercomp/IconMenu";
import MobileMenu from "../Headercomp/MobileMenu";
const addClass = (ref: any, myclass: string) => {
  ref.current?.classLIst.add(myclass);
};
const Header = () => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  let scrollSizeY = 0;
  //Hide when scroll down & show when scroll up
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", e => {
      if (scrollSizeY == 0) {
        scrollSizeY = window.scrollY;
      } else {
        if (window.scrollY > 50) {
          if (window.scrollY > scrollSizeY) {
            if (RefNavBar) {
              RefNavBar.current?.classList.remove("translate-y-0");
              RefNavBar.current?.classList.add("-translate-y-full");
            }
          } else {
            RefNavBar.current?.classList.add("translate-y-0");
            RefNavBar.current?.classList.remove("-translate-y-full");
          }
          scrollSizeY = window.scrollY;
        }
      }
      console.log("Windows is scrolling scrollY = ", scrollSizeY);
    });
  }
  const [rotate, setRotate] = useState<boolean>(false);
  console.log("rotate from header : ", rotate);
  //veify document for serverSide rendering
  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      {/* Mobile visible Navbar */}
      <MobileMenu rotate={rotate} setRotate={setRotate}/>
      {/* This parent element for Menu */}
      <div
        ref={RefNavBar}
        className="w-full fixed bg-opacity-75  flex 
      justify-between px-2 md:px-12 py-4 drop-shadow-lg transition duration-4000 translate-y-0"
      >
        {/* Logo A */}
        <Logo/>
        

        {/* Hide icon Designed by me */}
        <IconMenu rotate={rotate} setRotate={setRotate}/>
       
        {/* ? Desktop Menu by Titof */}
        <DesktopMenu     />
      </div>
    </>
  );
};
export default Header;

    
  