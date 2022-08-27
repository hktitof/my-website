import React from "react";
import { useEffect, useRef } from "react";
import cookieCutter from "cookie-cutter";
export default function Page() {
  //timer ref holder
  const secUnits = useRef<HTMLSpanElement>(null);
  const secTens = useRef<HTMLSpanElement>(null);
  const minUnits = useRef<HTMLSpanElement>(null);
  const minTens = useRef<HTMLSpanElement>(null);
  const counter = () => {
    if (typeof window != undefined) {
      window.setInterval(function () {
        const countSec = Number(cookieCutter.get("timer-sec-units")) + 1;
        cookieCutter.set("timer-sec-units", countSec.toString());

        if (countSec > 9) {
          cookieCutter.set("timer-sec-units", "0");
          cookieCutter.set(
            "timer-sec-tens",
            String(Number(cookieCutter.get("timer-sec-tens")) + 1)
          );
          const countSecTens = Number(cookieCutter.get("timer-sec-tens"));
          if (countSecTens > 5) {
            cookieCutter.set("timer-sec-tens", "0");
            cookieCutter.set(
              "timer-min-units",
              String(Number(cookieCutter.get("timer-min-units")) + 1)
            );
            const countMinUnits = Number(cookieCutter.get("timer-min-units"));
            if (countMinUnits > 9) {
              cookieCutter.set("timer-min-units", "0");
              cookieCutter.set(
                "timer-min-tens",
                String(Number(cookieCutter.get("timer-min-tens")) + 1)
              );
            }
          }
        }
        secUnits.current.innerText = cookieCutter.get("timer-sec-units");
        secTens.current.innerText = cookieCutter.get("timer-sec-tens");
        minUnits.current.innerText = cookieCutter.get("timer-min-units");
        minTens.current.innerText = cookieCutter.get("timer-min-tens");
      }, 1000);
    }
  };
  useEffect(() => {
    if (cookieCutter.get("timer-sec-units")) {
      console.log(
        "current cookie value in useEffect: ",
        cookieCutter.get("timer-sec-units")
      );
    } else {
      console.log("timer cookie not exist");
      cookieCutter.set("timer-sec-units", String("0"));
      cookieCutter.set("timer-sec-tens",  String("0"));
      cookieCutter.set("timer-min-units",  String("0"));
      cookieCutter.set("timer-min-tens",  String("0"));
    }
    secUnits.current.innerText = cookieCutter.get("timer-sec-units");

    counter();
  }, []);
  console.log("page rendred")
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-AAprimary">
      {/* //Timer */}
      <div className="w-full">
        <div className="flex flex-col justify-center items-center space-y-1">
          <span className="sm:text-xl text-white">Time you spent</span>
          <div className="flex flex-row space-x-4 justify-center ">
            <div className="flex flex-col spacey-y-1 items-center">
              <div className="flex flex-row space-x-1">
                <div className="flex flex-col space-y-1 items-center">
                  <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                    <span
                      ref={minTens}
                      className="text-white font-mono sm:text-2xl text-sm"
                    >
                      0
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                    <span
                      ref={minUnits}
                      className="text-white font-mono sm:text-2xl text-sm"
                    >
                      0
                    </span>
                  </div>
                </div>
              </div>
              <span className="m:text-base text-sm text-white">Minutes</span>
            </div>
            <div className="flex flex-col spacey-y-1 items-center">
              <div className="flex flex-row space-x-1">
                <div className="flex flex-col space-y-1 items-center">
                  <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                    <span
                      ref={secTens}
                      className="text-white font-mono sm:text-2xl text-sm"
                    >
                      0
                    </span>
                  </div>
                </div>
                <div className="flex flex-col space-y-1 items-center">
                  <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                    <span
                      ref={secUnits}
                      className="text-white font-mono sm:text-2xl text-sm"
                    >
                      0
                    </span>
                  </div>
                </div>
              </div>
              <span className="sm:text-base text-sm text-white">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
