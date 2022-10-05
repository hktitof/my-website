import {motion} from "framer-motion"
export default function CursorCarotComp() {
  return (
    <motion.span
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: [1, 0] }}
      transition={{
        opacity: { duration: 0.8, repeat: Infinity },
      }}
      className="absolute left-0 w-[3px] lg:h-8 sm:bottom-0 top-1 sm:h-5 h-4 rounded bg-AAsecondary "
    ></motion.span>
  )
}
