import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/dist/client/link";
export default function SocialMediaEmail() {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: 11, duration: 0.5 } }}
        className="fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            <motion.div className="">
              <a href="" className="" target={"_blank"} rel="noreferrer"></a>
            </motion.div>
            {/* Github Icon */}
            <motion.div
              whileHover={{
                y: -5,

                transition: { duration: 0.1 },
              }}
              className=""
            >
              <a
                href="https://github.com/hktitof"
                className=""
                target={"_blank"}
                rel="noreferrer"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </motion.svg>
              </a>
            </motion.div>

            {/* Linkedin icon */}
            <motion.div
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
              className=""
            >
              <a
                href="https://www.linkedin.com/in/abdellatif-anaflous/"
                className=""
                target={"_blank"}
                rel="noreferrer"
              >
                <motion.svg
                  className="w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </motion.svg>
              </a>
            </motion.div>

            {/* Instagram Icon */}
            <motion.div
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
              className=""
            >
              <a
                href="https://www.instagram.com/titof_abdo/"
                className=""
                target={"_blank"}
                rel="noreferrer"
              >
                <motion.svg
                  className="w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </motion.svg>
              </a>
            </motion.div>

            {/* Youtube Icon */}
            <motion.div
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
              className=""
            >
              <a
                href="https://www.youtube.com/c/NTTFT"
                className=""
                target={"_blank"}
                rel="noreferrer"
              >
                <motion.svg
                  className="w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </motion.svg>
              </a>
            </motion.div>
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>


      {/* Email Address bar               */}
      <motion.div
        initial={{ y: "130%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: 11, duration: 0.5 } }}
        className="fixed bottom-0 right-0 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -5,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a href="mailto:demo@demo.com" target={"_blank"} rel="noreferrer">
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                hktitof@gmail.com
              </span>
            </a>
          </motion.div>

          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
