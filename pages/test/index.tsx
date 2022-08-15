import React from "react";
import Startup from "../../components/Header/StartupLogo/Startup";
import { LayoutGroupContext } from "../../node_modules/framer-motion/dist/framer-motion";
// ? this pa package "si" is used to get information about server side
import si from "systeminformation";
import {detect} from 'detect-browser';
// export async function getStaticProps() {
//   const data = await si.cpu();
//   return {props:{sysinfo:{
//     manufacturer: data.manufacturer,
//     brand: data.brand,
//     speed: data.speed,
//     cores: data.cores,
//     physicalCores: data.physicalCores,
//   }
//   }};
// }

export default function test({sysinfo}) {
  const browser = detect();
  
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };
  const HasZipCode = obj => {
    for (const x of obj) {
      const elem = x.address_components;
      if (!isNaN(elem[elem.length - 1].long_name)) {
        return elem[elem.length - 1].long_name;
      }
    }
    return "00000";
  };
  const getcoding = async (lat: string, lon: string) => {
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=` +
        lat +
        `,` +
        lon +
        `&key=` +
        process.env.NEXT_PUBLIC_KEY_GOOGLE_API
    )
      .then(res => res.json())
      .then(data => {
        const result = data.results;
        return HasZipCode(result);
        // return data;
      })
      .catch(err => {
        console.error("When fetching data from google api : \n", err);
        return "00000";
      });
  };
  const geolocation = async ip => {
    return fetch(`http://ip-api.com/json/` + ip)
      .then(res => res.json())
      .then(async data => {
        const result ={
          zip: await getcoding(data.lat, data.lon),
          country: data.country,
          countryCode: data.countryCode,
          region: data.region,
          regionName: data.regionName,
          city: data.city,
          datetime: new Date().toLocaleString("en-US", {
            timeZone: data.timezone,
          }),
          lat: data.lat,
          lon: data.lon,
          timezone: data.timezone,
          isp: data.isp,
          org: data.org,
          as: data.as,
          query: data.query,
        };
        if (browser) {
          result["browser"] = browser.name;
          result["browserVersion"] = browser.version;
          result["browserOS"] = browser.os;
          return result;
        }else{
          return result;
        }
       
      })
      .catch(err => console.log(err));
  };

  // ? INFORMATIONAL this function for requesting access to the user location
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else {
  //     alert("Sorry, but Geolocation is not supported by this browser.");
  //   }
  // }
 
  
  const clickMe = async () => {
    // const ip = await IP_Address();
    // const geolocationObject =await geolocation(ip);
    // console.log("your ip address : ", ip);
    // console.log("geolocationOBject :",geolocationObject);
    // console.log(
    //   "google api response : ",
    //   await geolocation(await IP_Address())
    // );
   
    // console.log(await navigator.clipboard.read());
    console.log("user Data : ",await geolocation(await IP_Address()))
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <button onClick={clickMe} className="p-4 bg-red-400 rounded-xl">
        Test Me
      </button>
    </div>
  );
}
