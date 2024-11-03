import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YpredictAI() {
  const tasks = [
    {
      text: "Led the development of an ERC20 token platform using Next.js and AWS Lambda for serverless computing, managing the full project lifecycle and achieving timely delivery.",
      keywords: ["Next.js", "ERC20", "AWS Lambda", "project lifecycle", "timely delivery"],
    },
    {
      text: "Developed and optimized the frontend for decentralized peer-to-peer transactions, resolving smart contract issues to enhance blockchain integration and security.",
      keywords: ["peer-to-peer", "frontend", "smart contracts", "blockchain integration", "security"],
    },
    {
      text: "Integrated Solidity-based smart contracts and MongoDB for effective data management, ensuring seamless interaction with blockchain protocols.",
      keywords: ["Solidity", "smart contracts", "MongoDB", "blockchain protocols", "data management"],
    },
    {
      text: "Focused on SEO and tracking metrics with Google Analytics, resulting in a successful private sale that sold out within 24 hours. Made the project publicly accessible on GitHub.",
      keywords: ["SEO", "Google Analytics", "private sale", "GitHub", "public access"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Lead Full Stack Engineer <span className="text-AAsecondary">@ YPredict</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Oct - Dec 2022</span>
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
