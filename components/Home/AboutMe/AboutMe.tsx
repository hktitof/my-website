import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-24">
        {/* 0.1 About Me */}
        <div className="flex flex-col space-y-8 px-9 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] bg-gray-800">
          <div className="flex items-center space-x-4 ">
            <div className="flex flex-row space-x-4 items-end ">
              <span className="text-AAsecondary font-mono text-xl">
                &gt; 0.1
              </span>
              <span className="text-gray-300 font-mono text-xl sm:text-2xl">
                About Me
              </span>
            </div>
            <div className="bg-gray-400 h-[0.2px] w-32 sm:w-72"></div>
          </div>
          {/* Paragraphs */}

          <div className="w-full">
            <div className="sm:w-7/12 space-y-4">
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  Hello! My name is Abdellatif and I enjoy solving problems and
                  creating codes that live on the internet. My interest in
                  computer science started back in 2009 when I decided to try
                  learning{" "}
                  <span className="text-AAsecondary">Ethical Hacking</span>{" "}
                  using BackTrack OS — turns out programming skills are
                  essential to achieve that, my journey with programming started
                  from that time!
                </span>
              </div>
              <div className="font-Header tracking-wide">
                <span className="text-gray-400  ">
                  Fast-forward to today, and I&apos;ve had the privilege of
                  working at
                  <br />a start-up, a huge corporation, and a student-led design
                  studio. My main focus these days is building accessible,
                  inclusive products and digital experiences at Upstatement for
                  a variety of clients. that time!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
