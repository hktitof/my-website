import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon';

export default function GoogleDesc() {
 return (
    <>
   <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
          <div className="flex flex-col spacey-y-2">
            {/* Title */}
          <span className="text-gray-100 text-lg font-mono">Studio Developer <span 
          className="text-AAsecondary">@ Scout</span></span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January - June 2017</span>
          </div>
          
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary"} />
            <span className="text-gray-500 text-sm">Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span>
          </div>
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary"} />
            <span className="text-gray-500 text-sm">Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span>
          </div>
        </div>
    </>
  )
}
