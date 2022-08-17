// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {detect} from 'detect-browser';
export default async function  handler(req, res) {
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
  res.status(200).json(await geolocation(await IP_Address()))
}
