import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Designed and developed a desktop application for IdealFresh to manage billing and client data, leveraging Java, JavaFX, and Oracle for an efficient user experience.",
      keywords: ["Java", "JavaFX", "Oracle", "user experience"],
    },
    {
      text: "Utilized Apache POI for data manipulation with Microsoft Excel, creating customized scripts to pull, manage, and refactor files from cloud storage.",
      keywords: ["Apache POI", "Microsoft Excel", "custom scripts", "cloud storage"],
    },
    {
      text: "Collaborated with non-developers to provide technical solutions and expertise, enhancing their workflows through integrated API endpoints and streamlined data exchange.",
      keywords: ["non-developers", "technical solutions", "API endpoints", "workflow enhancement"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ Java</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan - August 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
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
