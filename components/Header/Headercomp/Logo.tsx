import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        className=" relative h-12 w-10 "
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
        >
          S
        </motion.span>

        <motion.div animate={{ rotate: -30, y: 5 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: -10, y: 18 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 30, y: 31 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: -30, y: 27, x: 19 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 30, x: 19, y: -10 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: 28, y: 2 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
      </motion.div>
    </>
  );
}
