import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Anchanto() {
  const tasks = [
    {
      text: "Designed and developed Role-Based Access Control (RBAC) system in the Parcel Tracking application.",
      keywords: [
        "Role-Based Access Control",
        "RBAC",
        "Parcel Tracking application",
      ],
    },
    {
      text: "Engineered and scaled a branded email notification service using Amazon SES, SNS, SQS, and Celery, achieving a throughput of 5 million emails per month and ensuring timely updates to recipients on parcel milestones.",
      keywords: [
        "Amazon SES",
        "SNS",
        "SQS",
        "Celery",
        "email notification service",
      ],
    },
    {
      text: "Pioneered an innovative multi-tenant application module, enabling seamless tenant switching without the need for redeployment, improving operational efficiency.",
      keywords: [
        "multi-tenant application module",
        "tenant switching",
        "operational efficiency",
      ],
    },
    {
      text: "Automated 12+ critical operational tasks using Celery including monthly billing processes, API usage tracking, password expiration notifications and health check services for proactive monitoring of daily production resulting in significant time savings, improved accuracy and faster issue resolution.",
      keywords: [
        "automation",
        "Celery",
        "operational tasks",
        "monthly billing processes",
        "API usage tracking",
        "password expiration notifications",
        "health check services",
      ],
    },
    {
      text: "Spearheaded data processing initiatives, optimizing incoming carrier data management and streamlining workflows through the development of a utility Docker app for data reprocessing.",
      keywords: [
        "data processing initiatives",
        "carrier data management",
        "Docker app",
        "data reprocessing",
      ],
    },
    {
      text: "Implemented Cypress testing, cutting developer testing time and bolstering code quality.",
      keywords: ["Cypress testing", "developer testing", "code quality"],
    },
    {
      text: "Architected cloud infrastructures for various multi-tenant environments.",
      keywords: ["cloud infrastructures", "multi-tenant environments"],
    },
    {
      text: "Designed and documented 15+ APIs and a suite of reusable UI components, achieving over 90% test coverage.",
      keywords: ["APIs", "UI components", "test coverage"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full-stack Developer{" "}
            <span className="text-AAsecondary">@ Anchanto</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2022 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://anchanto.com", "_blank")}
          >
            anchanto.com
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
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
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
