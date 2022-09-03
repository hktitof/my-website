import React from "react";
type Props = {
  type;
  location;
};
export default function LatLonTable(props: Props) {
  switch (props.type) {
    case "Desktop":
      return <LatLongTableDesktop location={props.location} />;
    case "Mobile":
      return <LatLongTableMobile location={props.location} />;
  }
}

const LatLongTableDesktop = location => {
  return (
    <table className="md:block hidden font-mono">
      <tbody className="border-2  md:text-sm text-xs">
        <tr className=" border-2 ">
          <td className="border-2 py-1 px-8 ">Latitude :</td>
          <td className="text-AAsecondary px-8">{location.location[0]}</td>
        </tr>
        <tr>
          <td className="border-2 py-1 px-8">Longitude :</td>
          <td className="text-AAsecondary px-8">{location.location[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

const LatLongTableMobile = location => {
  return (
    <table className="md:hidden block font-mono">
      <tbody className="border-2  md:text-xl text-xs">
        <tr className=" border-2 ">
          <td className="border-2 py-1 px-8 ">Latitude :</td>
          <td className="text-AAsecondary px-8">{location.location[0]}</td>
        </tr>
        <tr>
          <td className="border-2 py-1 px-8">Longitude :</td>
          <td className="text-AAsecondary px-8">{location.location[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};
