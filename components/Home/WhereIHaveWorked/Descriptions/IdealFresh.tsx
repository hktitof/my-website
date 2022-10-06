import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

export default function IdealFresh() {
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 text-lg font-mono">
            Software Developer <span className="text-AAsecondary">@ Desktop App</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mars - August 2022</span>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Designed and Built a Desktop app for IdealFresh that manage billings, client circumstances & tracking
              tacks using <span className="text-AAsecondary">Apache POI</span> with Microsoft Office Excel.
            </span>
          </div>
          {/* Desctiption 2 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Creating customized <span className="text-AAsecondary">scripts</span> for pulling, managing and refactoring files from Clouds using.
            </span>
          </div>
          {/* Desctiption 3 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Daily communications and interactions with a <span className="text-AAsecondary">non-developers</span> to solve their daily problems by providing
              technological solutions and expertise.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
