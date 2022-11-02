import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.4,
        }}
        className=" text-AAsecondary"
       
      >
        <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 01. <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">About</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.7,
        }}
        className="text-AAsecondary"
       
      >
        <ReactScrollLink to="WhereIhaveWorkedSection" spy={true} smooth={true} offset={-300} duration={200}>
          &gt; 02.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Experience</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.8,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink to="SomethingIveBuiltSection" spy={true} smooth={true} offset={-100} duration={200}>
        &gt; 03. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Work</span>

        </ReactScrollLink>
        
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10,
        }}
        className="text-AAsecondary"
      >
         <ReactScrollLink to="GetInTouchSection" spy={true} smooth={true} offset={-100} duration={200}>
         &gt; 04. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Contact</span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10.2,
        }}
        // onClick={()=>{router.push("/resume.pdf")}}
        className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
      >
        Resume
      </motion.button>
      </a>
      
    </div>
  );
}
