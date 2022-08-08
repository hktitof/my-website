import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function SomethingIveBuilt() {
  return (
    <section className="bg-AAprimary w-full 2xl:px-96 md:px-24 sm:px-16 px-8 py-32
     flex flex-col space-y-12">
      <main className=" flex flex-row space-x-3 items-center px-2 md:px-0">
      <ArrowIcon className={"flex-none h-6 w-6 text-AAsecondary"} />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-mono text-lg sm:text-xl">
            {" "}
            03.
          </span>
          <span className="text-gray-200 text-xl md:text-2xl w-44 md:w-56">
            {" "}
            Something I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </main>
      <ul className="relative bg-red-400 h-96 w-full">
        <li className="relative grid grid-cols-12 grid-rows-5 h-full w-full">
            <div className="py-4 absolute grid grid-cols-12 w-full h-full">
                <div className="py-4 col-span-7 bg-white"></div>
            </div>
        </li>
      </ul>
    </section>
  );
}
