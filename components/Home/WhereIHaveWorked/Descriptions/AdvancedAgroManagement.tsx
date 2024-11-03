import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AdvancedAgroManagement() {
  const tasks = [
    {
      text: "Developed a responsive and customizable website for Advanced Agro Management using HTML, CSS, JavaScript, and PHP.",
      keywords: ["Advanced Agro Management", "responsive", "customizable"],
    },
    {
      text: "Monitored website performance and troubleshot WordPress issues, utilizing tools like W3 Total Cache for optimization.",
      keywords: ["performance monitoring", "WordPress", "W3 Total Cache", "troubleshooting"],
    },
    {
      text: "Managed the backend of the company's WordPress website with Oracle Database, employing WP-CLI, phpMyAdmin, and custom plugins to enhance functionality.",
      keywords: ["Oracle Database", "WP-CLI", "phpMyAdmin", "custom plugins"],
    },
    {
      text: "Implemented SEO optimizations and monitored site metrics using Google Analytics to ensure high performance and user engagement.",
      keywords: ["SEO", "Google Analytics", "user engagement"],
    },
];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Web Developer <span className="text-AAsecondary">@ Web Development</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct 18 - May 2019</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
