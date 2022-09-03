import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import React from "react";
import { useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import { useTime } from "react-timer-hook";
import Img from "../../components/smallComp/image/Img";
const cookies = new Cookies();
export default function Page() {
  const timer = useRef<number>();
  useEffect(() => {
    console.log("useEffect rendered..");

    console.log("result to check cookie existance: ", cookies.get("timer"));
  }, []);

  return (
    // ? INFORMATIONAL : Remove items-center and justify-center
    <div
      className="min-h-screen w-full bg-AAprimary text-white 2xl:px-64 xl:px-44 lg:px-24 md:px-16 px-4 
    flex items-center justify-center "
    >
      <div className="w-full h-full py-8 px-8 flex flex-row space-x-12">
        <div className="flex-none hidden sm:block sm:w-36 lg:w-44">
          <Img
            src="titofCercle.png"
            alt="About picture"
            className="opacity-80"
          />
        </div>
        <div className="flex flex-col space-y-8 sm:items-start items-center">
          <span className="font-About lg:text-6xl md:text-5xl text-4xl sm:text-4xl text-gray-300">
            About
          </span>
          <span className="font-sans italic  sm:text-base text-sm text-gray-400">
            It&apos;s no secret that sites want to know as much as possible
            about their visitors, whether it&apos;s to show them targeted ads or
            improve their user experience. The goal of this project is to give
            you an idea about types of information that websites can collect and
            access from you. No matter what the privacy settings of your browser
            are, certain information about you is inevitably revealed to the
            sites you visit. For example, you start sharing your IP address as
            soon as you go online, which can be used to pinpoint your
            approximate location.
          </span>
        </div>
      </div>
    </div>
  );
}
