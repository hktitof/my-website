import {motion} from "../../../node_modules/framer-motion/dist/framer-motion";

const MobileMenu=(props)=>{
    return (
    <>
    <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300"
      >
        <div
          onClick={() => props.setRotate(!props.rotate)}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div className="w-3/4 h-full bg-MobileNavBarColor flex flex-col 
        justify-center items-center space-y-8 font-sans">
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono">01.</span>
            <span className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300">
              About
            </span>
          </div>
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono hover:cursor-pointer">
              02.
            </span>
            <span className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300">
              Experience
            </span>
          </div>
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono">03.</span>
            <span className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300">
              Work
            </span>
          </div>
          <div className="flex flex-col text-center space-y-2">
            <span className="text-AAsecondary text-xs font-mono">04.</span>
            <span className="text-white font-Text2 text-sm sm:text-base
             hover:text-AAsecondary hover:cursor-pointer duration-300">
              Contact
            </span>
          </div>
          <button className="rounded border font-Text2  border-AAsecondary
           hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary">
            Resume
          </button>
        </div>
      </motion.div>
    </>
    );
}
export default MobileMenu;