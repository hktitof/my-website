import React from "react";
type Props = {
  item: { title; value };
};
// repeated  table row code for setting General Information ip address,city,Zip Code ...etc
export default function TableRow(props:Props) {
  return (
    <tr className="border-2 border-gray-300">
      <td className=" border-2 border-gray-300 pl-2 md:pl-4 py-3 text-xs md:text-base w-28 md:w-auto">
        {props.item.title}
      </td>
      <td className="pl-4 text-AAsecondary text-xs md:text-base">
        {props.item.value}
      </td>
    </tr>
  );
}
