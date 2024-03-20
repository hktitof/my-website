import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EXLExperience() {
  const tasks = [
    {
      text: "Devised React-based (Redux) analytics using storyboards with advanced visualization libraries (D3.js), resulting in 25% faster communication of complex data insights leveraging SQL for .Net APIs.",
      keywords: ["React-based", "Redux", "advanced visualization libraries", "D3.js", "SQL", ".Net APIs"],
    },
    {
      text: "Enriched software quality and delivery efficiency by fostering collaboration in a CI/CD environment utilizing Jira with cross-functional cloud-based architecture.",
      keywords: ["software quality", "delivery efficiency", "CI/CD environment", "Jira", "cloud-based architecture"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full-Stack Developer <span className="text-AAsecondary">@ EXL Services</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">August 2022 - December 2022</span>
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
