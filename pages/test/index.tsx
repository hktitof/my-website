/*
{
    "status": "success",
    "country": "Morocco",
    "countryCode": "MA",
    "region": "06",
    "regionName": "Casablanca-Settat",
    "city": "Casablanca",
    "zip": "",
    "lat": 33.5922,
    "lon": -7.6184,
    "timezone": "Africa/Casablanca",
    "isp": "MEDITELECOM",
    "org": "Meditel",
    "as": "AS36925 MEDITELECOM",
    "query": "41.92.114.84"
}
*/
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
          datetime:new Date().toLocaleString("en-US", { timeZone: data.timezone }),
          zip: data.zip,
          lat: data.lat,
          lon: data.lon,
          timezone: data.timezone,
          isp: data.isp,
          org: data.org,
          as: data.as,
          query: data.query

        };
      });
  };
  const clickMe = async () => {
    const ip = await IP_Address();
    const geolocationObject =await geolocation(ip);
    console.log("your ip address : ", ip);
    console.log("geolocationOBject :",geolocationObject);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <button onClick={clickMe} className="p-4 bg-red-400 rounded-xl">
        Test Me
      </button>
    </div>
  );
}
