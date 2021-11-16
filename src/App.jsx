import React, { useState, useEffect, useRef } from "react";
import Map from "./components/Map";
import logo from "./images/logo.svg";
import pin from "./images/pin.svg";
import pinHover from "./images/pinAlt.svg";
import search from "./images/search.svg";
import searchHover from "./images/searchAlt.svg";
import info from "./images/info.svg";
import infoHover from "./images/infoAlt.svg";
import check from "./images/check.svg";
import checkHover from "./images/checkAlt.svg";
import park from "./images/park.svg";


function App() {

  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });

  const [isClicked, setIsClicked] = useState(false);

  const { lat, lng } = markerPosition;


  const [mobileMenu, setMobileMenu] = useState([
    {
      id: 0,
      name: "租車",
      icon: pin,
      iconHover: pinHover,
      isClicked: false,
    },
    {
      id: 1,
      name: "還車",
      icon: park,
      iconHover: park,
      isClicked: false,
    },
    {
      id: 2,
      name: "線路查詢",
      icon: check,
      iconHover: checkHover,
      isClicked: false,
    },
    {
      id: 3,
      name: "常見問題",
      icon: info,
      iconHover: infoHover,
      isClicked: false,
    },
  ]);

  const [isMobile, setIsMobile] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState([
    {
      id: 0,
      name: "租車",
      icon: pin,
      iconHover: pinHover,
      isClicked: false,
    },
    {
      id: 1,
      name: "搜尋站點",
      icon: search,
      iconHover: searchHover,
      isClicked: false,
    },
    {
      id: 2,
      name: "線路查詢",
      icon: check,
      iconHover: checkHover,
      isClicked: false,
    },
    {
      id: 3,
      name: "常見問題",
      icon: info,
      iconHover: infoHover,
      isClicked: false,
    },
  ]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setMarkerPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };


  useEffect(() => {
    getLocation();
    setUserPosition((markerPosition) => ({
      lat: markerPosition.lat,
      lng: markerPosition.lng,
    }));
  }, []);

  return (
    <main>
      <section className="container-2xl">
        <div className="flex space-between">
          <nav className="flex flex-col justify-between bg-white">
            <div className={`px-4 py-6 hidden md:block`}>
              <img src={logo} alt="logo" />
            </div>
            {isMobile
              ? mobileMenu.map((item) => (
                  <button
                    key={item.id}
                    className={`block px-6 py-6 ${
                      item.isClicked ? "bg-secondary" : ""
                    }`}
                    onClick={() => {
                      item.isClicked = !item.isClicked;
                      setMobileMenu([...mobileMenu]);
                    }}
                  >
                    <img
                      src={item.isClicked ? item.iconHover : item.icon}
                      alt={item.name}
                    />
                    <p>{item.name}</p>
                  </button>
                ))
              : desktopMenu.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`block px-6 py-6 ${
                      item.isClicked ? "bg-secondary" : ""
                    } ${idx == desktopMenu.length-1 ? "mt-auto" : ""}`}
                    onClick={() => {
                      item.isClicked = !item.isClicked;
                      setDesktopMenu([...desktopMenu]);
                    }}
                  >
                    <img
                      src={item.isClicked ? item.iconHover : item.icon}
                      alt={item.name}
                    />
                  </button>
                ))}
          </nav>
          <Map markerPosition={userPosition} />
        </div>
      </section>
    </main>
  );
}

export default App


