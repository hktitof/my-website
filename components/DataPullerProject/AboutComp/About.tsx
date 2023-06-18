import React from 'react'
import Img from "../../smallComp/image/Img";
export default function About() {
  return (
    <div className="w-full h-full py-8 md:px-8 flex md:flex-row flex-col md:space-x-12 items-center space-y-4">
          <div className="flex-none  w-32 lg:w-44 flex justify-center items-center">
            <Img
              src="gdscCercle.png"
              alt="About picture"
              className="opacity-80"
            />
          </div>
          <div className="flex flex-col space-y-8  items-center">
            <span className="font-extrabold lg:text-5xl md:text-4xl text-2xl sm:text-3xl text-gray-300">
              What&apos;s this project for?
            </span>
            <span className="font-sans italic  sm:text-base text-sm text-gray-400 text-center">
              It&apos;s no secret that sites want to know as much as possible
              about their visitors, whether it&apos;s to show them targeted ads
              or improve their user experience. The goal of this project is to
              give you an idea about types of information that websites can
              collect and access from you. No matter what the privacy settings
              of your browser are, certain information about you is inevitably
              revealed to the sites you visit. For example, you start sharing
              your IP address as soon as you go online, which can be used to
              pinpoint your approximate location.
            </span>
          </div>
        </div>
  )
}
