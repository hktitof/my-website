import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

export default function AdvancedAgroManagement() {
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 text-lg font-mono">
            Software Developer <span className="text-AAsecondary">@ Wordpress</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">june - August 2019</span>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Developed and Build a new version customizable website for{" "}
              <span className="text-AAsecondary">Advanced Agro Management</span>.
            </span>
          </div>
          {/* Desctiption 2 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
            Monitored website performance and handled troubleshooting and WordPress issues.
            </span>
          </div>
          {/* Desctiption 3 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
            Managed company WordPress website back-end with <span className="text-AAsecondary">Oracle Database</span> including plugins, tools, and themes.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
