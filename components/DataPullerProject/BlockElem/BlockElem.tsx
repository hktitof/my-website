import React from "react";

type Props = {
  size;
  title;
  value;
};

// repeted code for setting Additional Data user location

export default function BlockElem(props: Props) {
  return (
    <div className="flex-none flex-row space-x-2">
      <span
        className={`text-gray-200 font-semibold flex-none ${props.size} text-sm md:text-base`}
      >
        {props.title}
      </span>
      <span className="text-AAsecondary font-semibold text-sm md:text-base">
        {props.value}
      </span>
    </div>
  );
}
