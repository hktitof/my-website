import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const tasks = [
    {
      text: "Designed and developed a customizable static web application using ReactJS, Tailwind CSS v1, and TypeScript, focusing on user-friendliness and customization.",
      keywords: ["ReactJS", "TailwindCSS v1", "TypeScript", "customizable", "user-friendly"],
    },
    {
      text: "Upgraded the application to enhance SEO and performance by migrating to Next.js, utilizing server-side rendering for faster load times and improved visibility.",
      keywords: ["Next.js", "SEO", "server-side rendering", "performance"],
    },
    {
      text: "Provided technical support for web applications, troubleshooting errors and problems, and transformed a PHP website into a high-performance static site on Next.js, enhancing Google Lighthouse scores.",
      keywords: ["technical support", "troubleshooting", "PHP", "high-performance", "Google Lighthouse"],
    },
];


  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Engineer <span className="text-AAsecondary">@ Web App</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June - Dec 2020</span>
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
