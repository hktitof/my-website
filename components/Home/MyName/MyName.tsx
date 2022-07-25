import React from "react";

export default function MyName() {
  return (
    <>
      <section className="px-8 xl:px-72 lg:px-32 md:px-20 sm:px-8 py-52 flex flex-col">
        <span className="text-AAsecondary font-mono">Hi, my name is</span>
        <span className="text-white font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
          Anaflous Abdellatif.
        </span>
        <span className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
          I make ideas & things alive.
        </span>

        <span className="text-gray-400 font-Header text-sm sm:text-md mt-10 tracking-wider">
          I&apos;m a software engineer skilled in problem-solving and
          specializing in building
          <br className="sm:block hidden" /> (and occasionally designing)
          exceptional digital experiences. Currently.{" "}
          <br className="sm:block hidden" />
          I&apos;m focused on creating and developing{" "}
          <span className="text-AAsecondary">Smart Contracts</span> on the
          Blockchain.
        </span>
        <div className="mt-12">
          <button className="bg-AAprimary text-AAsecondary border rounded px-8 py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </div>
      </section>
    </>
  );
}
