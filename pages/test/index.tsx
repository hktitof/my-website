import React from "react";
import { useState,useEffect } from "react";
import Head from "next/head";
// ? this pa package "si" is used to get information about server side
import { detect } from "detect-browser";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import MyComponent from "../../components/hackme/Map";
import dynamic from 'next/dynamic'



export default function Test() {
  
  // this api will return current ip address of the user
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };
  // this will be used to determine lan and lon of the user
  const [location,setLocation] = useState<number[]>([0,0]);

   useEffect( ()=>{
    // these function is used by next async function
    const api_data = async () => {
      return fetch("/api/userInfo/" + (await IP_Address()))
        .then(res => res.json())
        .then(data => data);
    };
    // browser will be used to determine the browser info
    const browser = detect();
    // async function for getting user location
    const userInfo = async ()=>{
      const result =await api_data();
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
      setLocation([result.lat,result.lan])
      console.log("data :",result);
    }
    userInfo();
    
  },[])

  
  const clickMe = async () => { 
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLocation([position.coords.latitude, position.coords.longitude]);
        console.log("Longitude:", position.coords.longitude, "Latitude:", position.coords.latitude);
      });
    }else{
        alert("Sorry, but Geolocation is not supported by this browser.");
      }
    
  };


  const Map = dynamic(
    () => import('../../components/hackme/Map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
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
        <Map lat={location[0]} lon={location[1]}  />
        
      </div>
      
    </>
  );
}
