import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CSULBResearchInternExperience() {
  const tasks = [
    {
      text: "Authored a research paper on reinforcement learning findings accepted at the 2023 IEEE Conference with 10+ panelists and a 20% acceptance rate (ieeexplore.ieee.org/document/10429991).",
      keywords: ["research paper", "reinforcement learning", "IEEE Conference", "accepted"],
    },
    {
      text: "Designed and executed a simulation for a UR5 robotic arm in a virtual Pick-Place environment, applying reinforcement learning techniques to develop a safety barrier algorithm reducing operational risks by 20%.",
      keywords: ["simulation", "UR5 robotic arm", "virtual Pick-Place environment", "reinforcement learning", "safety barrier algorithm", "reducing operational risks"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Research Intern <span className="text-AAsecondary">@ College of Engineering (CSULB)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2023 - December 2023</span>
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
