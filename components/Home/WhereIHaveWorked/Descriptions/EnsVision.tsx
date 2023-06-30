import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS, Wagmi, Web3.js, Moralis, Ethers.js",
      keywords: ["Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js"],
    },
    {
      text: "Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in ENS",
      keywords: ["smart contracts", "ENS"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2022 - Jun 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.ens.vision/", "_blank")}
          >
            www.ens.vision
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
