import React, { useRef, useState, useEffect } from "react";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
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
  console.log("retate stuatus : ", rotate);
  //veify document for serverSide rendering
  if (typeof document !== "undefined") {
    rotate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <>
      {/* Mobile visible Navbar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden"
      >
        <div
          onClick={() => setRotate(!rotate)}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div className="w-3/4 h-full bg-MobileNavBarColor flex flex-col justify-center items-center space-y-8 font-sans">
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono">01.</span>
            <span className="text-white font-Text2 hover:text-AAsecondary hover:cursor-pointer duration-300">About</span>
          </div>
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono hover:cursor-pointer">02.</span>
            <span className="text-white font-Text2 hover:text-AAsecondary hover:cursor-pointer duration-300">Experience</span>
          </div>
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono">03.</span>
            <span className="text-white font-Text2 hover:text-AAsecondary hover:cursor-pointer duration-300">Work</span>
          </div>
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono">04.</span>
            <span className="text-white font-Text2 hover:text-AAsecondary hover:cursor-pointer duration-300">Contact</span>
          </div>
          <button className="rounded border font-Text2 border-AAsecondary hover:bg-ResumeButtonHover py-4 px-10 text-xs text-AAsecondary">Resume</button>
        </div>
      </motion.div>

      <div
        ref={RefNavBar}
        className="w-full fixed bg-opacity-75  flex 
      justify-between px-12 py-4 drop-shadow-lg transition duration-4000 translate-y-0"
      >
        <span className="text-AAsecondary">Logo</span>
        {/* Hide icon Designed by me */}
        <div
          className="md:hidden  text-white space-y-2 left-0 hover:cursor-pointer"
          onClick={() => setRotate(!rotate)}
        >
          <div className="flex justify-end">
            <motion.div
              animate={rotate ? { y: 10, rotate: 45 } : { rotate: 0, y: 0 }}
              transition={
                rotate
                  ? { y: 0.15, rotate: { delay: 0.2 } }
                  : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
              }
              className="w-8 h-0.5 rounded bg-AAsecondary"
            ></motion.div>
          </div>
          <motion.div
            animate={rotate ? { opacity: 0 } : { opacity: 1 }}
            transition={{ opacity: { duration: 0 } }}
            className="flex justify-end"
          >
            <div className="w-6 h-0.5 rounded bg-AAsecondary"></div>
          </motion.div>
          <div className="flex justify-end">
            <motion.div
              animate={
                rotate
                  ? { y: -10, width: "150%", rotate: -45 }
                  : { y: 0, rotate: 0, width: "50%" }
              }
              transition={
                rotate
                  ? { y: 0.15, rotate: { delay: 0.2 } }
                  : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
              }
              className="w-4 h-0.5 rounded bg-AAsecondary"
            ></motion.div>
          </div>
        </div>
        {/* Mobile Menu by Titof */}

        <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className=" text-AAsecondary"
          >
            &gt; 01.{" "}
            <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
              About
            </span>
          </motion.span>
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.1 }}
            className="text-AAsecondary"
          >
            &gt; 02.{" "}
            <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
              Experience
            </span>
          </motion.span>
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.2 }}
            className="text-AAsecondary"
          >
            &gt; 03.{" "}
            <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
              Work
            </span>
          </motion.span>
          <motion.span
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.3 }}
            className="text-AAsecondary"
          >
            &gt; 04.{" "}
            <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
              Contact
            </span>
          </motion.span>
          <motion.button
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.2, delay: 0.4 }}
            className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </>
  );
};
export default Header;
