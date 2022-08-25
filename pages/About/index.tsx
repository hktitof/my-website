import { Cookies } from "next/dist/server/web/spec-extension/cookies";
import React from "react";
import { useEffect,useRef } from "react";
import { useCookies } from "react-cookie";
import { useTime } from 'react-timer-hook';

const cookies = new Cookies();
export default function Page() {
    function MyTime() {
        const {
          seconds,
          minutes,
          hours,
          ampm,
        } = useTime({ format: '12-hour'});
      
        return (
          <div style={{textAlign: 'center'}}>
            <h1>react-timer-hook </h1>
            <p>Current Time Demo</p>
            <div style={{fontSize: '100px'}}>
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
            </div>
          </div>
        );
      }
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
          <img
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
            improve their user experience. The goal of this simple project is to
            give you an idea about types of information that websites can
            collect and access from their visitors.
          </span>
          <MyTime/>
        </div>
      </div>
    </div>
  );
}
