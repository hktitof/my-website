import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";

export default function IdealFresh() {
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-mono">
            Software Developer <span className="text-AAsecondary">@ JavaFX</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June - August 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2 ">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 ">
              Designed and Built a Desktop app for IdealFresh that manage billings, client circumstances using{" "}
              <span className="text-AAsecondary">Apache POI</span> with Microsoft Office Excel.
            </span>
          </div>
          {/* Desctiption 2 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 ">
              Creating customized <span className="text-AAsecondary">scripts</span> for pulling, managing and
              refactoring files from Clouds.
            </span>
          </div>
          {/* Desctiption 3 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 ">
              Daily communications and interactions with a <span className="text-AAsecondary">non-developers</span> to
              solve their problems by providing technological solutions and expertise.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
