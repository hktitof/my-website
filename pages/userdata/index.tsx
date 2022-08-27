import React from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { detect } from "detect-browser";
import dynamic from "next/dynamic";
import { ReactDOM } from "react-dom";
import cookieCutter from "cookie-cutter";
import Footer from "../../components/Footer/Footer";
import Img from "../../components/smallComp/image/Img";
import { getGPUTier } from "detect-gpu";
export default function Page() {
  // this api will return current ip address of the requester
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };
  // location[latitude, longitude]
  const [location, setLocation] = useState<number[]>([0, 0]);
  const [updatingLocation, setUpdatingLocation] = useState<boolean>(false);
  const [updatingLocatinResult, setUpdatingLocatinResult] =
    useState<boolean>(false);
  // zip code holder
  const [zipCode, setZipCode] = useState<string>(undefined);
  // userData Ref holder
  const userData = useRef<any>(null);
  // gpu Detector ref holder
  const [gpuTier,setGpuTier]=useState(null);
  const windowWidth = useRef<HTMLSpanElement>(null);
  const windowHeight = useRef<HTMLSpanElement>(null);
  const mouseX = useRef<HTMLSpanElement>(null);
  const mouseY = useRef<HTMLSpanElement>(null);
  //timer ref holder
  const secUnits = useRef<HTMLSpanElement>(null);
  const secTens = useRef<HTMLSpanElement>(null);
  const minUnits = useRef<HTMLSpanElement>(null);
  const minTens = useRef<HTMLSpanElement>(null);
  // First vist and Last visit ref holder
  let firstVisit_Ref = useRef<HTMLSpanElement>(null);
  let lastVisit_Ref = useRef<HTMLSpanElement>(null);

  // ? Page time spent Tracker
  const counter = () => {
    if (typeof window != undefined) {
      window.setInterval(function () {
        const countSec = Number(cookieCutter.get("timer-sec-units")) + 1;
        cookieCutter.set("timer-sec-units", String(countSec));

        if (countSec > 9) {
          cookieCutter.set("timer-sec-units", String("0"));
          cookieCutter.set(
            "timer-sec-tens",
            String(Number(cookieCutter.get("timer-sec-tens")) + 1)
          );
          const countSecTens = Number(cookieCutter.get("timer-sec-tens"));
          if (countSecTens > 5) {
            cookieCutter.set("timer-sec-tens", String("0"));
            cookieCutter.set(
              "timer-min-units",
              String(Number(cookieCutter.get("timer-min-units")) + 1)
            );
            const countMinUnits = Number(cookieCutter.get("timer-min-units"));
            if (countMinUnits > 9) {
              cookieCutter.set("timer-min-units", String("0"));
              cookieCutter.set(
                "timer-min-tens",
                String(Number(cookieCutter.get("timer-min-tens")) + 1)
              );
            }
          }
        }
        secUnits.current.innerText = cookieCutter.get("timer-sec-units");
        secTens.current.innerText = cookieCutter.get("timer-sec-tens");
        minUnits.current.innerText = cookieCutter.get("timer-min-units");
        minTens.current.innerText = cookieCutter.get("timer-min-tens");
      }, 1000);
    }
  };
  useEffect(() => {
    if (cookieCutter.get("timer-sec-units")) {
      console.log(
        "current cookie value in useEffect: ",
        cookieCutter.get("timer")
      );
    } else {
      console.log("timer cookie not exist");
      cookieCutter.set("timer-sec-units", String("0"));
      cookieCutter.set("timer-sec-tens", String("0"));
      cookieCutter.set("timer-min-units", String("0"));
      cookieCutter.set("timer-min-tens", String("0"));
    }
    counter();
    // Apply this event Listener on Client
    if (typeof window !== "undefined") {
      // window size tracker
      window.addEventListener("resize", function (event) {
        windowWidth.current.innerText = String(window.innerWidth);
        windowHeight.current.innerText = String(window.innerHeight);
      });
      // mouse position tracker
      window.addEventListener(
        "mousemove",
        e => {
          mouseX.current.innerText = String(e.pageX);
          mouseY.current.innerText = String(e.pageY);
        },
        false
      );
    }

    // call api by passing the IP address of the requester & store in api_data
    const api_data = async () => {
      return fetch("/api/userInfoByIP/" + (await IP_Address()))
        .then(res => res.json())
        .then(data => data);
    };
    //to determine the browser info
    const browser = detect();
    // async function for getting user location
    const userInfo = async () => {
      // get user Data from the api
      const result = await api_data();
      // Client side checks
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
        } else {
          result["batteryLevel"] = "Not supported";
        }
      }
      const temp_array_location = [];
      temp_array_location.push(result.lat);
      temp_array_location.push(result.lon);
      setLocation([...temp_array_location]);
      console.log("useEffect run, data :", result);
      setZipCode(result.zip);
      userData.current = result;
      // first & last visit tracker with conditional statement using cookies.
      //it's inside userInfo function to get the current time by the ip Address
      if (cookieCutter.get("first-visit")) {
        lastVisit_Ref.current.innerText = cookieCutter.get("last-visit");
        cookieCutter.set("last-visit", result.datetime);
      } else {
        lastVisit_Ref.current.innerText = "Now";
        cookieCutter.set("first-visit", result.datetime);
        cookieCutter.set("last-visit", result.datetime);
      }
      firstVisit_Ref.current.innerText = cookieCutter.get("first-visit");
      // set up gpuTier state value
      setGpuTier(await getGPUTier());
      console.log("gpuTier from UserInfo function : ", gpuTier);

    };
    // call the async function "userInfo"  inside the useEffect 
    userInfo();
    // ! FIX ME Continue here, add first visit and last visit functionality
  }, []);

  // import Dynamically the Map component from the hackme package, cus it's using some client side objects
  const Map = dynamic(
    () => import("../../components/hackme/Map"),
    { ssr: false } // This line is important. It's what prevents server-side render
  );

  //
  const onClickUpdateLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    // function will be executed after permission is authorized
    function success(position) {
      setLocation([position.coords.latitude, position.coords.longitude]);
      const temp_array_location = [];
      temp_array_location.push(position.coords.latitude);
      temp_array_location.push(position.coords.longitude);
      // set new lat and lon
      setLocation([...temp_array_location]);
      // Show Map
      setUpdatingLocation(false);
      // Hide "Unable to retieve location" message
      setUpdatingLocatinResult(false);

      // call the api by passing new lat and lon
      const api_get_zip = async (lat, lon) => {
        return fetch("/api/userInfoByLatLon/" + lat + "/" + lon)
          .then(res => res.json())
          .then(data => {
            return data;
          });
      };
      // change zipcode useState
      const setNewZip = async () =>
        setZipCode(
          await api_get_zip(position.coords.latitude, position.coords.longitude)
        );
      setNewZip();

      console.log(
        "Updated == > Longitude:",
        position.coords.longitude,
        "Latitude:",
        position.coords.latitude
      );
    }
    // function will be executed after permission is denied
    function error() {
      // error Show Unable to retieve location message
      setUpdatingLocatinResult(true);
      //Show Map after failed to update location
      setUpdatingLocation(false);
    }
    // ask for permission to access location
    navigator.geolocation.getCurrentPosition(success, error);
  };

  console.log("Page rendered..");
  console.log("user data : ", userData.current);
  console.log("gpu data, ", gpuTier);
  // repeted code for setting Additional Data user location
  const BlockElem = props => {
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
  };

  // data for the table
  const tableData = [
    { title: "IP Address :", value: userData.current?.query || "Checking..." },
    { title: "City :", value: userData.current?.city || "Checking..." },
    { title: "Zip Code :", value: zipCode || "Checking..." },
    { title: "Region :", value: userData.current?.regionName || "Checking..." },
    {
      title: "Region Code :",
      value: userData.current?.region || "Checking...",
    },
    { title: "Country :", value: userData.current?.country || "Checking..." },
    {
      title: "Current Date/time :",
      value: userData.current?.datetime || "Checking...",
    },
    {
      title: "Battery :",
      value: userData.current?.batteryLevel || "Checking...",
    },
    { title: "As :", value: userData.current?.as || "Checking..." },
  ];
  const TableRow = props => {
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
  };
  // data for Additional Information Section 1
  const Additional_data = [
    { title: "Browser :", value: userData.current?.browser || "Checking..." },
    {
      title: "Browser Version :",
      value: userData.current?.browserVersion || "Checking...",
    },
    {
      title: "Languages :",
      value:
        userData.current?.NavigatorLanguages.toString().replace(",", ", ") ||
        "Checking...",
    },
    { title: "OS :", value: userData.current?.browserOS || "Checking..." },
    {
      title: "CPU cores :",
      value: userData.current?.NavigatorLogicalCores || "Checking...",
    },
    {
      title: "GPU :",
      value: gpuTier?.gpu || "Checking...",
    },
  ];
  const clickMe = async (lat, lon) => {
    return fetch("/api/userInfoByLatLon/" + lat + "/" + lon)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <div className="min-h-screen w-full bg-AAprimary text-white 2xl:px-64 xl:px-44 lg:px-24 md:px-16 px-4 ">
        <div className="h-full w-full  py-16 sm:px-12">
          {/* // ? Ip Address, (Latitude & Longitude) ==> only > md */}
          <div className="w-full pb-6 flex md:flex-row flex-col space-y-4 justify-around items-center">
            <span className="font-bold md:text-4xl text-lg text-AAsecondary">
              <span
                onClick={async () => await clickMe(location[0], location[1])}
                className="text-white hover:cursor-pointer"
              >
                IP :
              </span>{" "}
              {userData.current?.query || "Checking..."}
            </span>

            <table className="md:hidden block font-mono">
              <tbody className="border-2  md:text-xl text-xs">
                <tr className=" border-2 ">
                  <td className="border-2 py-1 px-8 ">Latitude :</td>
                  <td className="text-AAsecondary px-8">{location[0]}</td>
                </tr>
                <tr>
                  <td className="border-2 py-1 px-8">Longitude :</td>
                  <td className="text-AAsecondary px-8">{location[1]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="h-full w-full  flex md:flex-row flex-col ">
            {/* // ? User Data */}
            <div className="h-full md:w-2/3 md:order-1 order-2  md:pr-10 flex flex-col space-y-3 ">
              <div className="pb-2 sm:pt-0 pt-4">
                <span className="text-xl sm:text-2xl font-bold pb-8 underline">
                  General Information :
                </span>
              </div>
              <table className="border-2 border-gray-300 w-full font-mono">
                <tbody>
                  {tableData.map((item, index) => {
                    return <TableRow item={item} key={index} />;
                  })}
                </tbody>
              </table>

              <div className="pb-2 sm:pt-8 pt-4">
                <span className="text-xl sm:text-2xl font-bold underline">
                  Additional Information &#58;
                </span>
              </div>
              <section className="flex flex-col lg:flex-row lg:space-y-0 space-y-3 lg:space-x-4 font-mono">
                {/* // ? Additional Information Section 1*/}
                <div className="flex-none flex-col space-y-3 ">
                  {Additional_data.map((item, index) => {
                    return (
                      <BlockElem
                        key={index}
                        size="32"
                        title={item.title}
                        value={item.value}
                      />
                    );
                  })}
                </div>

                {/* // ? Additional Information Section 2 */}
                <div className="flex-none flex-col space-y-3">
                  <BlockElem
                    size="md:w-52 w-44"
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

                  <div className="flex flex-row space-x-2">
                    <span className="text-gray-200 font-semibold flex-none w-32 text-sm md:text-base">
                      Window size :
                    </span>
                    <span className="text-AAsecondary font-semibold  text-sm md:text-base">
                      <span ref={windowWidth} className="text-AAsecondary">
                        {userData.current?.screenWidth || ""}
                      </span>
                      <span className="text-gray-300"> x </span>
                      <span ref={windowHeight} className="text-AAsecondary">
                        {userData.current?.screenHeight || ""}
                      </span>
                    </span>
                  </div>

                  <div className="flex-none flex-row space-x-2">
                    <span className="text-gray-200 font-semibold flex-none w-36 text-sm md:text-base">
                      Mouse position :
                    </span>
                    <span className="text-AAsecondary font-semibold text-sm md:text-base">
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
                  <BlockElem
                    size="w-44"
                    title="fps :"
                    value={gpuTier?.fps || "Checking..."}
                  />
                </div>
              </section>
            </div>
            {/* // ? Map  */}
            <div className="h-full w-full md:w-1/3 flex flex-col  items-center md:order-2 order-1 md:pt-12">
              {/* // Visit Data */}
              <div className="w-full pb-5">
                <div className="w-full flex flex-col space-y-2 items-center">
                  <div className="flex flex-row space-x-1 text-sm">
                    <span className="">First visit :</span>
                    <span
                      ref={firstVisit_Ref}
                      className="text-AAsecondary"
                    ></span>
                  </div>
                  <div className="flex flex-row space-x-1 text-sm">
                    <span className="">Last visit :</span>
                    <span
                      ref={lastVisit_Ref}
                      className="text-AAsecondary"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="relative md:h-80 h-64 w-full pb-8">
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
                  onClick={() => {
                    //Hide Map when updating location
                    setUpdatingLocation(true);

                    // Update lat & lon
                    onClickUpdateLocation();
                  }}
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
                <table className="md:block hidden font-mono">
                  <tbody className="border-2  md:text-sm text-xs">
                    <tr className=" border-2 ">
                      <td className="border-2 py-1 px-8 ">Latitude :</td>
                      <td className="text-AAsecondary px-8">{location[0]}</td>
                    </tr>
                    <tr>
                      <td className="border-2 py-1 px-8">Longitude :</td>
                      <td className="text-AAsecondary px-8">{location[1]}</td>
                    </tr>
                  </tbody>
                </table>
                {/* //Timer */}
                <div className="w-full">
                  <div className="flex flex-col space-y-1">
                    <span className="sm:text-xl">Time you spent</span>
                    <div className="flex flex-row space-x-4 justify-center ">
                      <div className="flex flex-col spacey-y-1 items-center">
                        <div className="flex flex-row space-x-1">
                          <div className="flex flex-col space-y-1 items-center">
                            <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                              <span
                                ref={minTens}
                                className="text-white font-mono sm:text-2xl text-sm"
                              >
                                0
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1 items-center">
                            <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                              <span
                                ref={minUnits}
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
                                ref={secTens}
                                className="text-white font-mono sm:text-2xl text-sm"
                              >
                                0
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1 items-center">
                            <div className="sm:w-8 w-6 sm:h-10 h-8 border-[1.5px] border-AAsecondary rounded flex justify-center items-center">
                              <span
                                ref={secUnits}
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
              </div>
            </div>
          </div>
        </div>
        {/* // ? About */}
        <div className="w-full h-full py-8 md:px-8 flex flex-row md:space-x-12">
          <div className="flex-none hidden md:block sm:w-36 lg:w-44">
            <Img
              src="titofCercle.png"
              alt="About picture"
              className="opacity-80"
            />
          </div>
          <div className="flex flex-col space-y-8 md:items-start items-center">
            <span className="font-About lg:text-5xl md:text-5xl text-4xl sm:text-4xl text-gray-300">
              About
            </span>
            <span className="font-sans italic  sm:text-base text-sm text-gray-400 md:text-start text-center">
              It&apos;s no secret that sites want to know as much as possible
              about their visitors, whether it&apos;s to show them targeted ads
              or improve their user experience. The goal of this project is to
              give you an idea about types of information that websites can
              collect and access from you. No matter what the privacy settings
              of your browser are, certain information about you is inevitably
              revealed to the sites you visit. For example, you start sharing
              your IP address as soon as you go online, which can be used to
              pinpoint your approximate location.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
