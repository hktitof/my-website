import React from 'react'
type Props = {
minTens,
minUnits,
secTens,
secUnits,
}
export default function Timer(props:Props) {
  return (
    <div className="w-full">
    <div className="flex flex-col space-y-1">
      <span className="sm:text-xl">Time you spent</span>
      <div className="flex flex-row space-x-4 justify-center ">
        <div className="flex flex-col spacey-y-1 items-center">
          <div className="flex flex-row space-x-1">
            <div className="flex flex-col space-y-1 items-center">
              <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                <span
                  ref={props.minTens}
                  className="text-white font-mono sm:text-2xl text-sm"
                >
                  0
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 items-center">
              <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                <span
                  ref={props.minUnits}
                  className="text-white font-mono sm:text-2xl text-sm"
                >
                  0
                </span>
              </div>
            </div>
          </div>
          <span className="m:text-base text-sm">Minutes</span>
        </div>
        <div className="flex flex-col spacey-y-1 items-center">
          <div className="flex flex-row space-x-1">
            <div className="flex flex-col space-y-1 items-center">
              <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                <span
                  ref={props.secTens}
                  className="text-white font-mono sm:text-2xl text-sm"
                >
                  0
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 items-center">
              <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                <span
                  ref={props.secUnits}
                  className="text-white font-mono sm:text-2xl text-sm"
                >
                  0
                </span>
              </div>
            </div>
          </div>
          <span className="sm:text-base text-sm">Seconds</span>
        </div>
      </div>
    </div>
  </div>
  )
}
