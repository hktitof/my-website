import React from "react";

export default function ScreenSizeDetector() {
  return (
    <div
      className="z-10 fixed bottom-16 left-0  "
      // make this div on the top of everything
      style={{ zIndex: 1000 }}
    >
      <div className="h-6 w-8 rounded-r-md bg-yellow-300 flex justify-center items-center text-black font-bold text-xs p-1">
        <span className="4xl:block 3xl:block 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden hidden">4XL</span>
        <span className="3xl:hidden 2xl:block xl:hidden lg:hidden md:hidden sm:hidden hidden">3XL</span>
        <span className="2xl:hidden xl:block lg:hidden md:hidden sm:hidden hidden">2XL</span>
        <span className="xl:hidden lg:block md:hidden sm:hidden hidden">XL</span>
        <span className=" xl:hidden lg:hidden md:block sm:hidden hidden ">Lg</span>
        <span className="xl:hidden lg:hidden md:hidden sm:block hidden ">md</span>
        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">sm</span>
      </div>
    </div>
  );
}
