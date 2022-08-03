import React from 'react'
const ArrowIcon = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${props.size} text-AAsecondary `}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  };
export default function GoogleDesc() {
 return (
    <>
    <div className="flex flex-col space-y-5 max-w-xl">
          <div className="flex flex-col spacey-y-2">
            {/* Title */}
          <span className="text-gray-100 text-lg font-mono">Studio Developer <span 
          className="text-AAsecondary">@ Scout</span></span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January - June 2017</span>
          </div>
          
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon size={" h-5 w-8"} />
            <span className="text-gray-500 text-sm">Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span>
          </div>
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon size={" h-5 w-8"} />
            <span className="text-gray-500 text-sm">Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern</span>
          </div>
        </div>
    </>
  )
}
