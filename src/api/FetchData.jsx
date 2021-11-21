import axios from "axios";
import jsSHA from "jssha";

//apiData
const VITE_API_ID = "dba25db22c974229a4a6f682da82c826";
const VITE_API_KEY = "0-86ZO6gYtS3m04H26w-jZW9YN4";
const AppID =
  VITE_API_ID || import.meta.env.VITE_APP_ID || process.env.VITE_API_ID;
const AppKey =
  VITE_API_KEY || import.meta.env.VITE_APP_KEY || process.env.VITE_API_KEY;

const requestOptions = () => {
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update(`x-date: ${GMTString}`);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

  return { Authorization: Authorization, "X-Date": GMTString };
};

const apiUrl = "https://ptx.transportdata.tw/MOTC/v2/";


const fetchData = async (props,City) => {

  return await axios.get(`${apiUrl}Bike/${props}/${City}?$format=JSON`, {
          headers: requestOptions(),
        })
};

export default fetchData;