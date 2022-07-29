import React, { useRef, useState ,useEffect} from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import IconMenu from "./Headercomp/IconMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import {motion} from "../../node_modules/framer-motion/dist/framer-motion";
const addClass = (ref: any, myclass: string) => {
  ref.current?.classLIst.add(myclass);
};
const Header = () => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(()=>{
      setShowElement(true);
    },4900);
  },[]);
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
      <MobileMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} ShowElement={ShowElement}/>
      {/* This parent element for Menu */}
      <motion.div
        ref={RefNavBar}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{opacity:{delay:4.7,duration:0}}}
        className={`w-full fixed ${ShowElement?`bg-opacity-70`:`bg-opacity-0`} bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4 shadow-xl transition duration-4000 translate-y-0`}
      >
        {/* Logo A */}
        <Logo/>
        

        {/* Hide icon Designed by me */}
        
        <IconMenu rotate={rotate} setRotate={setRotate} setShowElement={setShowElement} ShowElement={ShowElement}/>
       
        {/* ? Desktop Menu by Titof */}
        <DesktopMenu     />
      </motion.div>
    </>
  );
};
export default Header;

    
  