import React from "react";
import Head from "next/head";
// ? this pa package "si" is used to get information about server side
import { detect } from "detect-browser";

export default function test() {
  const browser = detect();
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };

  // ? INFORMATIONAL this function for requesting access to the user location
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     alert("Sorry, but Geolocation is not supported by this browser.");
  //   }
  // }
  const api_data = async () => {
    return fetch("/api/userInfo/" + (await IP_Address()))
      .then(res => res.json())
      .then(data => data);
  };
  const clickMe = async () => {
    // const result = await api_data();
    // if (browser) {
    //   result["browser"] = browser.name;
    //   result["browserVersion"] = browser.version;
    //   result["browserOS"] = browser.os;
    // }
    // if(screen){
    //   result["screenWidth"] = screen.width;
    //   result["screenHeight"] = screen.height;
    //   result["screenOrientationType"] = screen.orientation.type;
    //   result["screenColorDepth"]=screen.colorDepth+" bits"
    // }
    // if(navigator){
    //   result["NavigatorLanguages"] = navigator.languages;
    //   result["NavigatorLogicalCores"] = navigator.hardwareConcurrency + " cores"
    // }

    if (navigator) {
      console.log("navigator getbattery : ", navigator);
    }
  };
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <div className="h-screen flex justify-center items-center">
        <button onClick={clickMe} className="p-4 bg-red-400 rounded-xl">
          Test Me
        </button>
      </div>
    </>
  );
}
