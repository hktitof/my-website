import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
  const tasks = [
    {
      text: "Led front-end and back-end development to implement a new user workflow system for an NFT marketplace, enhancing the purchasing experience and contributing to a successful marketplace launch.",
      keywords: ["NFT Marketplace", "user workflow", "purchasing experience"],
    },
    {
      text: "Worked extensively with JavaScript, TypeScript, Next.js, React, AWS, and Vercel to optimize system performance, achieving a 30% improvement in transaction speed and increased user engagement.",
      keywords: ["JavaScript", "TypeScript", "Next.js", "React", "AWS", "Vercel", "system performance"],
    },
    {
      text: "Collaborated closely with developers, providing technical expertise and insights to enhance the overall system architecture.",
      keywords: ["team collaboration", "technical expertise", "system architecture"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Lead Full Stack Software Engineer <span className="text-AAsecondary">@ Blockchain</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan - Sept 2022</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("https://www.trouvetavoie.io/", "_blank")}
          >
            www.trouvetavoie.io
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
