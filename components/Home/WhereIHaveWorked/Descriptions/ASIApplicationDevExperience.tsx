import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ASIApplicationDevExperience() {
  const tasks = [
    {
      text: "Engineered React.js, JavaScript, Tailwind, SCSS, Node.js, and Git-based 22 West Media web applications, enhancing user engagement by 30% through improved UI/UX.",
      keywords: ["React.js", "JavaScript", "Tailwind", "SCSS", "Node.js", "Git-based", "22 West Media", "user engagement", "improved UI/UX"],
    },
    {
      text: "Outlined Joomla and WordPress backend services for 3 university websites (22westmedia.com), ensuring seamless content management and site functionality.",
      keywords: ["Joomla", "WordPress", "backend services", "university websites", "content management", "site functionality"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Application Developer <span className="text-AAsecondary">@ Associated Students, Inc. (ASI)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">August 2023 - Present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
