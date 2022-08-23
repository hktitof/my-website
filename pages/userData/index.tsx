import React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
// ? this pa package "si" is used to get information about server side
import { detect } from "detect-browser";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MyComponent from "../../components/hackme/Map";
import dynamic from "next/dynamic";

export default function Page() {
  console.log("Page rendered..");
  // this api will return current ip address of the user
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };
  // this will be used to determine lan and lon of the user
  const [location, setLocation] = useState<number[]>([0, 0]);
  const userData = useRef<any>(null);
  let windowWidth = useRef<HTMLSpanElement>(null);
  let windowHeight = useRef<HTMLSpanElement>(null);
  let mouseX = useRef<HTMLSpanElement>(null);
  let mouseY = useRef<HTMLSpanElement>(null);
  // ? Window size Tracker
  useEffect(() => {
    // Apply this event Listener on Client
    if (typeof window !== "undefined") {
      window.addEventListener("resize", function (event) {
        windowWidth.current.innerText = String(window.innerWidth);
        windowHeight.current.innerText = String(window.innerHeight);
      });

      window.addEventListener(
        "mousemove",
        e => {
          mouseX.current.innerText = String(e.pageX);
          mouseY.current.innerText = String(e.pageY);
        },
        false
      );
    }

    // these function is used by next async function
    const api_data = async () => {
      return fetch("/api/userInfo/" + (await IP_Address()))
        .then(res => res.json())
        .then(data => data);
    };
    // browser will be used to determine the browser info
    const browser = detect();
    // async function for getting user location
    const userInfo = async () => {
      const result = await api_data();
      if (browser) {
        result["browser"] = browser.name;
        result["browserVersion"] = browser.version;
        result["browserOS"] = browser.os;
      }
      if (screen) {
        result["screenWidth"] = screen.width;
        result["screenHeight"] = screen.height;
        result["screenOrientationType"] = screen.orientation.type;
        result["screenColorDepth"] = screen.colorDepth + " bits";
      }
      if (navigator) {
        result["NavigatorLanguages"] = navigator.languages;
        result["NavigatorLogicalCores"] =
          navigator.hardwareConcurrency + " cores";
      }
      // ? this will add battery level if it's supported on the browser
      if (navigator) {
        if (navigator.hasOwnProperty("getBattery")) {
          //@ts-ignore
          navigator.getBattery().then(battery => {
            result["batteryLevel"] = battery.level + " %";
            console.log("battery level : ", battery.level + " %");
          });
        }
      }
      setLocation([result.lat, result.lan]);
      console.log("useEffect data :", result);
      userData.current = result;
    };
    userInfo();
  }, []);
  const Map = dynamic(
    () => import("../../components/hackme/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  const [updatingLocation, setUpdatingLocation] = useState<boolean>(false);
  const [updatingLocatinResult, setUpdatingLocatinResult] =
    useState<boolean>(false);
  const clickUpdateLocation = () => {
    //Hide Map when updating location
    setUpdatingLocation(true);
    // Hide Unable to retieve location message
    setUpdatingLocatinResult(false);
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    function success(position) {
      setLocation([position.coords.latitude, position.coords.longitude]);
      // ? success Show Map
      setUpdatingLocation(false);
      console.log(
        "Longitude:",
        position.coords.longitude,
        "Latitude:",
        position.coords.latitude
      );
    }
    function error() {
      setUpdatingLocatinResult(true);
      //Show Map after failed to update location
      setUpdatingLocation(false);
    }
    navigator.geolocation.getCurrentPosition(success, error);

    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     setLocation([position.coords.latitude, position.coords.longitude]);

    //     setUpdatingLocation(false);
    //   });
    // } else {
    //   alert("Sorry, but Geolocation is not supported by this browser.");
    // }
  };
  console.log("user data : ", userData.current);
  const BlockElem = props => {
    return (
      <div className="flex flex-row ">
        <span
          className={`text-gray-200 font-semibold text-lg flex-none ${props.size}`}
        >
          {props.title}
        </span>
        <span className="text-AAsecondary font-semibold text-lg">
          {props.value}
        </span>
      </div>
    );
  };
  const TableRow = props => {
  return(
    <tr className="border-2 border-gray-300">
    <td className="border-2 border-gray-300 pl-4 py-3">{props.title}</td>
    <td className="pl-4 text-AAsecondary">{props.value}</td>
  </tr>
  );
  }
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <div className=" w-full bg-AAprimary text-white pt-44 2xl:px-64 xl:px-44 lg:px-24 md:px-16 px-4 ">
        <div className="h-full w-full bg-AAtertiary py-16 sm:px-12 px-4">
          <div className="h-full w-full  flex md:flex-row flex-col ">
            {/* // ? User Data */}
            <div className="h-full md:w-2/3 md:order-1 order-2  md:pr-10 flex flex-col space-y-3 ">
              <div className="pb-2 sm:pt-0 pt-4">
                <span className="text-xl sm:text-2xl font-bold pb-8">
                  General Information :
                </span>
              </div>
              <table className="border-2 border-gray-300 w-full">
                <tbody>
                <TableRow
                size="w-32"
                title="IP Address"
                value={userData.current?.query || "Checking..."}
              />

              <TableRow
                size="w-32"
                title="City :"
                value={userData.current?.city || "Checking..."}
              />
              <TableRow
                size="w-32"
                title="Zip Code :"
                value={userData.current?.zip || "Checking..."}
              />
              <TableRow
                size="w-32"
                title="Region :"
                value={userData.current?.regionName || "Checking..."}
              />
              <TableRow
                size="w-32"
                title=" Region Code :"
                value={userData.current?.region || "Checking..."}
              />
              <TableRow
                size="w-32"
                title="Country :"
                value={userData.current?.country || "Checking..."}
              />
              <TableRow
                size="w-44"
                title="Current Date/time :"
                value={userData.current?.datetime || "Checking..."}
              />
              <TableRow
                size="w-32"
                title="Timezone :"
                value={userData.current?.timezone || "Checking..."}
              />
              <TableRow
                size="w-32"
                title="As :"
                value={userData.current?.as || "Checking..."}
              />
                </tbody>
              </table>
              
              <div className="pb-2 sm:pt-0 pt-4">
                <span className="text-xl sm:text-2xl font-bold">
                  Additional Information :
                </span>
              </div>
              <section className="flex flex-col lg:flex-row lg:space-y-0 space-y-3 lg:space-x-4">
                {/* // ? Additional Information Section 1*/}
                <div className="flex flex-col space-y-3">
                  <BlockElem
                    size="w-32"
                    title="Browser :"
                    value={userData.current?.browser || "Checking..."}
                  />
                  <BlockElem
                    size="w-32"
                    title="version :"
                    value={userData.current?.browserVersion || "Checking..."}
                  />
                  <div className="flex flex-row ">
                    <span className="text-gray-200 font-semibold text-lg flex-none w-32">
                      Languages:
                    </span>
                    <span className="text-AAsecondary font-semibold text-lg">
                      {userData.current?.NavigatorLanguages.toString().replace(
                        ",",
                        ", "
                      ) || "Checking..."}
                    </span>
                  </div>
                  <BlockElem
                    size="w-32"
                    title="OS :"
                    value={userData.current?.browserOS || "Checking..."}
                  />
                  <BlockElem
                    size="w-32"
                    title="CPU cores :"
                    value={
                      userData.current?.NavigatorLogicalCores || "Checking..."
                    }
                  />
                </div>

                {/* // ? Additional Information Section 2 */}
                <div className="flex flex-col space-y-3">
                  <BlockElem
                    size="w-44"
                    title=" Screen orientation :"
                    value={userData.current?.screenOrientationType || ""}
                  />
                  <BlockElem
                    size="w-32"
                    title="Screen size :"
                    value={
                      (userData.current?.screenWidth || "") +
                      " x " +
                      (userData.current?.screenHeight || "")
                    }
                  />

                  <div className="flex flex-row ">
                    <span className="text-gray-200 font-semibold text-lg flex-none w-32">
                      Window size :
                    </span>
                    <span className="text-AAsecondary font-semibold text-lg">
                      <span ref={windowWidth} className="text-AAsecondary">
                        {userData.current?.screenWidth || ""}
                      </span>
                      <span className="text-gray-300"> x </span>
                      <span ref={windowHeight} className="text-AAsecondary">
                        {userData.current?.screenHeight || ""}
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-row ">
                    <span className="text-gray-200 font-semibold text-lg flex-none w-36">
                      Mouse position :
                    </span>
                    <span className="text-AAsecondary font-semibold text-lg">
                      <span className="text-gray-300">X - </span>
                      <span ref={mouseX} className="text-AAsecondary">
                        {0}
                      </span>
                      <span className="text-gray-300">, Y - </span>
                      <span ref={mouseY} className="text-AAsecondary">
                        {0}
                      </span>
                    </span>
                  </div>
                  <BlockElem
                    size="w-44"
                    title="Screen Color Depth :"
                    value={userData.current?.screenColorDepth || "Checking..."}
                  />
                </div>
              </section>
            </div>
            {/* // ? Map  */}
            <div className="h-full w-full md:w-1/3 flex flex-col space-y-8 items-center md:order-2 order-1 md:pt-12">
              <div className="relative md:h-96 h-64 w-full">
                <div
                  className={`${
                    updatingLocation ? "" : "hidden"
                  } absolute h-full w-full border-[1px] border-white z-10 flex justify-center items-center`}
                >
                  <div className="flex flex-col space-y-2 items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600
                     fill-AAsecondary"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="">Updating location...</span>
                  </div>
                </div>
                <div
                  className={`${
                    updatingLocation ? "hidden" : ""
                  } h-full w-full z-10`}
                >
                  <Map lat={location[0]} lon={location[1]} />
                </div>
              </div>
              <div className="flex flex-col space-y-2 items-center text-center">
                <span className="">Location not accurate?</span>
                <span
                  onClick={clickUpdateLocation}
                  className="text-AAsecondary underline text-sm hover:cursor-pointer"
                >
                  Update My IP Location
                </span>
                {updatingLocatinResult ? (
                  <span className="text-sm">
                    Unable to retrieve your location!!
                    <br /> Please Allow location permission
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
