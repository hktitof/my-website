
import React from "react";
import Startup from "../../components/Header/StartupLogo/Startup";
export default function test() {
  const IP_Address = async () => {
    return fetch("https://api.ipify.org/?format=json")
      .then(res => res.json())
      .then(data => data.ip);
  };
  const geolocation = async ip => {
    return fetch(`http://ip-api.com/json/` + ip)
      .then(res => res.json())
      .then(data => {
        return {
          country: data.country,
          countryCode: data.countryCode,
          region: data.region,
          regionName: data.regionName,
          city: data.city,
          datetime: new Date().toLocaleString("en-US", {
            timeZone: data.timezone,
          }),
          zip: data.zip,
          lat: data.lat,
          lon: data.lon,
          timezone: data.timezone,
          isp: data.isp,
          org: data.org,
          as: data.as,
          query: data.query,
        };
      })
      .catch(err => console.log(err));
  };


  const getcoding = async () => {
    const lat = "34.002663";
    const lon = "-6.848167";
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=` +
        lat +
        `,` +
        lon +
        `&key=`+process.env.NEXT_PUBLIC_KEY_GOOGLE_API
    )
      .then(res => res.json())
      .then(data => {
        const result = data.results;
        return HasZipCode(result);
        // return data;
      })
      .catch(err => "00000");
  };
  const HasZipCode=(obj)=>{
    for (const x of obj) {
      const elem =x.address_components;
        if(!isNaN(elem[elem.length-1].long_name)){
          return elem[elem.length-1].long_name;
        }
      }
      return "00000"
  }

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
    console.log("google api response : ", await getcoding());
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <button onClick={clickMe} className="p-4 bg-red-400 rounded-xl">
        Test Me
      </button>
    </div>
  );
}
