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

  /*{
    "address_components": [
        {
            "long_name": "FJ2H+VH",
            "short_name": "FJ2H+VH",
            "types": [
                "plus_code"
            ]
        },
        {
            "long_name": "el bazzaza",
            "short_name": "el bazzaza",
            "types": [
                "locality",
                "political"
            ]
        },
        {
            "long_name": "Province de Béni-Mellal",
            "short_name": "Province de Béni-Mellal",
            "types": [
                "administrative_area_level_2",
                "political"
            ]
        },
        {
            "long_name": "Béni Mellal-Khénifra",
            "short_name": "Béni Mellal-Khénifra",
            "types": [
                "administrative_area_level_1",
                "political"
            ]
        },
        {
            "long_name": "Morocco",
            "short_name": "MA",
            "types": [
                "country",
                "political"
            ]
        }
    ],
    "formatted_address": "FJ2H+VH el bazzaza, Morocco",
    "geometry": {
        "bounds": {
            "northeast": {
                "lat": 32.45225,
                "lng": -6.371
            },
            "southwest": {
                "lat": 32.452125,
                "lng": -6.371125
            }
        },
        "location": {
            "lat": 32.452175,
            "lng": -6.371086
        },
        "location_type": "GEOMETRIC_CENTER",
        "viewport": {
            "northeast": {
                "lat": 32.4535364802915,
                "lng": -6.369713519708498
            },
            "southwest": {
                "lat": 32.4508385197085,
                "lng": -6.372411480291501
            }
        }
    },
    "place_id": "GhIJzojS3uA5QEARigPo9_17GcA",
    "plus_code": {
        "compound_code": "FJ2H+VH el bazzaza, Morocco",
        "global_code": "8C4MFJ2H+VH"
    },
    "types": [
        "plus_code"
    ]
}*/

  const getcoding = async () => {
    const lat = "31.510843";
    const lon = "-9.759152";
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
        // return HasZipCode(result);
        return result;
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
