import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TCSExperience() {
  const tasks = [
    {
      text: "Led the development of a real-time dashboard for tracking processed documents using pg-client, employing agile project management and test-driven development (TDD) to reduce data processing time by 40%.",
      keywords: ["real-time dashboard", "pg-client", "agile project management", "test-driven development", "reduce data processing time"],
    },
    {
      text: "Revised medical image optimizing algorithm, cutting pre-processing time by 10%. Developed Flask APIs and system diagrams enhancing integration and data transactions.",
      keywords: ["medical image optimizing algorithm", "Flask APIs", "system diagrams"],
    },
    {
      text: "Authored an interactive JavaScript portal (AJAX) for data filtering and visualization utilizing HTML5, CSS, and JS. Directed VBA, Python, and JS automation enhancing internal efficiency by 30%.",
      keywords: ["interactive JavaScript portal", "AJAX", "HTML5", "CSS", "JS", "VBA", "Python", "automation"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full-Stack Developer <span className="text-AAsecondary">@ Tata Consultancy Services</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2019 - August 2022</span>
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
