import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function ThisCantBeReached() {
  const [ShowText, setShowText] = React.useState(false);
  let CenterWidth = 0;
  let CenterHeight = 0;
  React.useEffect(() => {
    setTimeout(function () {
      setShowText(true);
    }, 1000);
  }, []);
  if (typeof window !== "undefined") {
    if(window.innerHeight>640){
      CenterHeight = (window.innerHeight)/2-160-20;
    }else{
      CenterHeight = (window.innerHeight)/2-64-20;
    }
    if(window.innerWidth>1280){
      CenterWidth = (window.innerWidth)/2-384-18;
    }else if(window.innerWidth>1024){
      CenterWidth = (window.innerWidth)/2-192-18;
    }else if(window.innerWidth>768){
      CenterWidth = (window.innerWidth)/2-144-18;
    }else if(window.innerWidth>640){
      CenterWidth = (window.innerWidth)/2-96-18;
    }else{
      CenterWidth = (window.innerWidth)/2-16-18;
    }
    
  }
 
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{opacity:0}}
      transition={{ delay:4,duration: 0.5 }}
      className="absolute h-screen w-full bg-white 
      py-16 sm:py-40 
      px-4 sm:px-24 md:px-36 lg:px-48 xl:px-96 
      flex flex-col space-y-5 sm:space-y-10
      "
    >
      <div className="relative w-full  flex flex-col space-y-4">
        {/* Icon for Desktop and Table */}
        
        <motion.div 
        animate={{y:CenterHeight,x:CenterWidth,scale:2}}
        transition={{delay:2,duration:1}}
        className="relative w-9 h-10 ">
          <div className="absolute h-1 w-1/2 bg-gray-600"></div>
          <div className="absolute h-full w-1 bg-gray-600"></div>
          <div className="absolute bottom-0 h-1 w-full bg-gray-600"></div>
          <div className="absolute right-0 bottom-0 h-6 w-1 bg-gray-600"></div>

          {/* Left Eye */}

          <motion.div
            animate={{
              scaleY: [
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
              ],
            }}
            transition={{ scaleY: { delay: 1.5, duration: 1 } }}
            className="absolute left-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
          ></motion.div>

          {/* Right Eye */}
          <motion.div
            initial={{ opacity: 0, scaleY: "100%" }}
            animate={{
              opacity: 1,
              scaleY: [
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
                "0%",
                "100%",
              ],
            }}
            transition={{
              opacity: { delay: 1, duration: 0 },
              scaleY: { delay: 1.5, duration: 1 },
            }}
            className="absolute right-2 top-3 h-1.5 w-[3.5px] bg-gray-600"
          ></motion.div>

          {/* Corner */}

          <motion.div
            animate={{ rotate: -90, x: 9, y: -7 }}
            transition={{
              rotate: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.5, duration: 0.5 },
              y: { delay: 0.5, duration: 0.5 },
            }}
            className="absolute right-4 top-0 h-[18px] w-1 bg-gray-600"
          ></motion.div>
          <motion.div
            animate={{ rotate: 90, x: 6, y: -7 }}
            transition={{
              rotate: { delay: 0.5, duration: 0.5 },
              x: { delay: 0.5, duration: 0.5 },
              y: { delay: 0.5, duration: 0.5 },
            }}
            className="absolute right-0 top-[14px] h-1 w-4 bg-gray-600"
          ></motion.div>
          <motion.div
            initial={{ opacity: "100%" }}
            animate={{ opacity: "0%" }}
            transition={{ opacity: { delay: 0.5, duration: 0 } }}
            className=""
          >
            <div className="absolute right-3 top-0 h-1 w-1 bg-gray-600"></div>
            <div className="absolute right-0 top-[10px] h-1 w-1 bg-gray-600"></div>
            <div className="absolute right-1 top-[7px] h-[4px] w-[4px] bg-gray-600"></div>
            <div className="absolute right-2 top-[4px] h-[4px] w-[4px] bg-gray-600"></div>
          </motion.div>

          {/* Smile */}

          <div className="absolute left-3 bottom-[10px] w-3 h-[3px] bg-gray-600"></div>
          <motion.div
            animate={{ y: [0, -5, 0, -5, 0, -5,  ] }}
            transition={{ y: { delay: 3, duration: 0.5 } }}
            className="absolute left-[9px] bottom-[7px] w-[3px] h-[3px] bg-gray-600"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -5, 0, -5, 0, -5, 0, -5, ],
            }}
            transition={{ y: { delay: 3, duration: 0.5 } }}
            className="absolute right-[9px] bottom-[7px] w-[3px] h-[3px] bg-gray-600"
          ></motion.div>
        {/* ! Hello animation text */}
        </motion.div>
            <motion.span
            initial={{y:CenterHeight+50-20,x:CenterWidth-13,opacity:0}}
            animate={{y:CenterHeight+50,opacity:1}}
            transition={{delay:3.5,duration:0.3}}
            className="absolute font-bold text-gray-600 text-2xl">
              Hello!
            </motion.span>

        
        
        {/* Text start from here */}

        <motion.div
          initial={{opacity:1}}
          animate={{ opacity: 0 }}
          transition={{ opacity: { delay: 2, duration: 0.5 } }}
          className="w-full  flex flex-col space-y-8"
        >
          <span className="text-gray-600 font-Header text-2xl">
            This site{" "}
            {ShowText ? (
              <motion.span
                animate={{ scale: ["100%", "120%"] }}
                transition={{ scale: { delay: 4, duration: 0.5 } }}
                className="font-bold"
              >
                actually can
              </motion.span>
            ) : (
              <span>can&apos;t</span>
            )}{" "}
            be reached
          </span>
          <span className="text-gray-500 text-md">
            <span className="font-bold">www.anaflous.com </span>
            unexpectedly{" "}
            {ShowText ? (
              <motion.span
                animate={{ scale: ["100%", "140%"] }}
                transition={{ scale: { delay: 4, duration: 1 } }}
                className="font-bold"
              >
                opened
              </motion.span>
            ) : (
              <span>closed</span>
            )}{" "}
            the connection.
          </span>
          <div className="flex flex-col space-y-3">
            <span className="font-Header text-gray-400 text-lg">Try:</span>
            <div className="flex flex-col space-y-2 pl-10">
              <span className="text-Header text-gray-400 font-Header sm:text-base text-sm">
                <span className="text-bold text-gray-500">&bull;</span> Checking
                the connection
              </span>
              <span className="text-Header text-blue-500 font-Header sm:text-base text-sm">
                <span className="text-bold text-gray-500">&bull;</span> Checking
                the proxy and the firewall
              </span>
              <span className="text-Header text-blue-500 font-Header sm:text-bdase text-sm">
                <span className="text-bold text-gray-500">&bull;</span> Running
                Windows Network Diagnostics
              </span>
            </div>
          </div>
          <span className="text-gray-400 text-sm">
            {ShowText ? (
              <motion.span
                animate={{ scale: ["100%", "120%"] }}
                transition={{ scale: { delay: 4, duration: 0.5 } }}
                className="font-bold"
              >
                SUCC_CONNECTION_OPENED
              </motion.span>
            ) : (
              <span>ERR_CONNECTION_CLOSED</span>
            )}
          </span>
        </motion.div>
      </div>
      <motion.div
        initial={{opacity:1}}
        animate={{ opacity: 0 }}
        transition={{ opacity: { delay: 2, duration: 0.5 } }}
        className=""
      >
        <button className="px-4 py-2 bg-blue-500 rounded text-white sm:text-base text-sm">
          {ShowText ? "Start" : "Reload"}
        </button>
      </motion.div>
    </motion.div>
  );
}