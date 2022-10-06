import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
export default function FeverTokens() {
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl ">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 text-lg font-mono">
            Software Engineer <span className="text-AAsecondary">@ web3</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mars - August 2022</span>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <div className="">
              <span className="text-gray-500 text-sm">
                Leading the development of the <span className="text-AAsecondary">NFT Marketplace v2</span> for the
                Platform FeverTokens.
              </span>
            </div>
          </div>

          {/* Desctiption 2 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <div className="">
              <span className="text-gray-500 text-sm">
                Worked with a team of six developers to build a temporary NFT Marketplace platform for{" "}
                <span className="text-AAsecondary">VivaTech2022 event</span>, an ambitious startup originating from
                France,Paris.
              </span>
            </div>
          </div>
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-2">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary flex-none"} />
            <span className="text-gray-500 text-sm">
              Interacted with the <span className="text-AAsecondary">blockchain & Smart Contracts</span> to build the new FeverTokens Platform.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
