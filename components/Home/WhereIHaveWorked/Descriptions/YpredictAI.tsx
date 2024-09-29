import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Led the development of an ERC20 token platform using Next.js, managing the full project lifecycle and ensuring timely delivery.",
      keywords: ["Next.js", "ERC20", "project lifecycle", "timely delivery"],
    },
    {
      text: "Developed the frontend for decentralized peer-to-peer transactions and fixed smart contract issues to improve blockchain integration and security.",
      keywords: ["peer-to-peer", "frontend", "smart contracts", "blockchain integration"],
    },
    {
      text: "Integrated Solidity-based smart contracts and ensured proper interaction with blockchain protocols.",
      keywords: ["Solidity", "smart contracts", "blockchain protocols"],
    },
    {
      text: "Collaborated with the team to deploy the platform and delivered the project on GitHub for public access.",
      keywords: ["collaboration", "GitHub", "deployment"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Project Manager <span className="text-AAsecondary">@ Blockchain</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Aug - Dec 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://ypredict.ai/", "_blank")}
          >
            www.ypredict.ai
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
