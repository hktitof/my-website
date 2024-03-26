// import React from "react";
// import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
// export default function Logo(props: { finishedLoading: boolean }) {
//   return (
//     <>
//       <motion.div
//         initial={{ y: 0, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           type: "spring",
//           y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
//           opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
//         }}
//         className=" relative h-12 w-10 "
//       >
//         <motion.span
//           initial={{ x: 1 }}
//           className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
//         >
//           S
//         </motion.span>

//         <motion.div animate={{ rotate: -30, y: 5 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
//         <motion.div animate={{ rotate: 90, x: -10, y: 18 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
//         <motion.div animate={{ rotate: 30, y: 31 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
//         <motion.div animate={{ rotate: -30, y: 27, x: 19 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
//         <motion.div animate={{ rotate: 30, x: 19, y: -10 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
//         <motion.div animate={{ rotate: 90, x: 28, y: 2 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
//       </motion.div>
//     </>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function Logo(props: { finishedLoading: boolean }) {
  const hexagonVariants = {
    hexagon: {
      borderRadius: "0%",
      transition: { 
        rotate: {
          repeat: Infinity, // Rotate infinitely
          duration: 2, // Duration for one rotation cycle
          ease: "linear" // Linear animation for constant speed
        },
        borderRadius: { duration: 0.3 } // Quick transition for border radius change
      }
    },
    circle: {
      borderRadius: "50%",
      transition: { 
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: "linear"
        },
        borderRadius: { delay: 0.2, duration: 0.3 }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        opacity: { duration: 1 },
        when: "beforeChildren"
      }
    }
  };

  // You can start the shape as a hexagon or circle by setting the initial animate state
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 1, duration: 1 },
          opacity: { delay: props.finishedLoading ? 0 : 1, duration: 1 },
        }}
        className="relative h-20 w-20 flex justify-center items-center"
      >
        <motion.span
          className="absolute text-lg font-Header text-AAsecondary"
        >
          S
        </motion.span>

        <motion.div
          initial="hexagon"
          animate="circle" // Start the animation as a hexagon
          variants={hexagonVariants}
          className={`absolute h-1 w-6 rounded bg-AAsecondary`}
          style={{
            originX: 0.5,
            originY: 0.5,
            padding: "11px",
            backgroundColor: "transparent",
            border: "2px solid grey"
          }}
        />
      </motion.div>
    </>
  );
}
