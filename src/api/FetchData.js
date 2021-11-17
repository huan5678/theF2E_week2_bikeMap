import axios from "axios";
import jsSHA from "jssha";

const apiUrl = "https://ptx.transportdata.tw/MOTC/v2/";

const requestOptions = () => {
  let AppID = import.meta.env.VITE_APP_ID || process.env.VITE_APP_ID;
  let AppKey = import.meta.env.VITE_APP_KEY || process.env.VITE_APP_KEY;
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update(`x-date: ${GMTString}`);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
  // const myHeaders = new Headers();
  // myHeaders.append("Accept", "application/json");
  // myHeaders.append(
  //   "Authorization",
  //   `hmac username=\"${AppID}\", algorithm="hmac-sha1", headers="x-date", signature=\"${HMAC}\"`
  // );
  // myHeaders.append("x-date", GMTString);
  // myHeaders.append("Accept-Encoding", "gzip");

  return { Authorization: Authorization, "X-Date": GMTString };
};

// console.log(requestOptions)

const FetchData = async (url, city, params) => {
  let category = "";
  switch (url) {
    case "stationCity":
      category = "Bike/Station";
      break;
    case "availability":
      category = "Bike/Availability";
      break;
    case "shape":
      category = "Cycling/Shape";
      break;
    case "stationNearBy":
      category = "Bike/Station/NearBy";
      break;
    case "availabilityNearBy":
      category = "Bike/Availability/NearBy";
      break;
    default:
      category = "stationCity";
      break;
  }
  return !city
    ? await axios.get(
        `${apiUrl}/${category}?${params}&$format=JSON`,
        {
          headers: requestOptions(),
        }
      )
    : await axios.get(
        `${apiUrl}/${category}/${city}?${params}&$format=JSON`,
        {
          headers: requestOptions(),
        }
      );
};
export default FetchData;
