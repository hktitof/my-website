import React from "react";
import { motion } from "framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
      }}
      className="relative h-12 w-10 flex justify-center items-center"
    >
      <img src="./WebLogo.png" alt="Logo" className="h-full w-full" />
    </motion.div>
  );
}
