import React, { useState,createContext } from "react";

//icon
import logoDesktop from "../images/logoDesktop.svg";
import logoMobile from "../images/logoMobile.svg";
import bike from "../images/bike.svg";
import ways from "../images/alt_route.svg";
import spot from "../images/perm_media.svg";
import restaurant from "../images/restaurant.svg";
import tip from "../images/visibility.svg";
import tipOff from "../images/visibility_off.svg";
import currentPoint from "../images/my_location.svg";
import plus from "../images/add.svg";
import pin from "../images/pin.svg";
import pinAlt from "../images/pinAlt.svg";
import minus from "../images/remove.svg";
import close from "../images/close.svg";
import car from "../images/car.svg";
import call from "../images/add_ic_call.svg";
import shop from "../images/add_business.svg";
import info from "../images/info.svg";
import iconLink from "../images/link.svg";
import search from "../images/search.svg";
import yubikeMark from "../images/yubikeMark.svg";
import yubikeFullMark from "../images/yubikeFullMark.svg";
import yubikeDisMark from "../images/yubikeDisMark.svg";
import bikeMark from "../images/bikeRangeMark.svg";
import restaurantMark from "../images/restaurantMark.svg";
import spotMark from "../images/spotMark.svg";

export const icon = createContext({
  logoDesktop,
  logoMobile,
  bike,
  ways,
  spot,
  restaurant,
  tip,
  tipOff,
  currentPoint,
  plus,
  minus,
  close,
  car,
  call,
  shop,
  info,
  iconLink,
  search,
  yubikeMark,
  yubikeFullMark,
  yubikeDisMark,
  bikeMark,
  restaurantMark,
  spotMark,
  pin,
  pinAlt,
});

//dropdown

export const dropdownContext = createContext({
  isOpen: false,
  setStatus: (boolean) => {},
});

export const dropdownStatus = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const close = (boolean) => {
    setIsOpen(boolean);
  };
  return (
    <dropdownContext.Provider
      value={{
        isOpen,
        setStatus: close,
      }}
    >
      {props.children}
    </dropdownContext.Provider>
  );
};



const ApiData = createContext({
  stationData: [],
  spotData: [],
  restaurantData: [],
  waysData: [],
  selectedCity: "",
  setSelectedCity: (city) => { },
  setStationData: () => {},
  setSpotData: () => { },
  setRestaurantData: () => { },
  setWaysData: () => { },
});

function ApiContextProvider({ children }) {

  const [selectedCity , setSelectedCity] = useState("");
  const [stationData, setStationData] = useState([]);
  const [spotData, setSpotData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [waysData, setWaysData] = useState([]);

  return (
    <ApiData.Provider
      value={{
        stationData,
        spotData,
        restaurantData,
        waysData,
        selectedCity,
        setSelectedCity,
        setStationData,
        setSpotData,
        setRestaurantData,
        setWaysData,
      }}
    >
      {children}
    </ApiData.Provider>
  )
}
export { ApiData, ApiContextProvider };