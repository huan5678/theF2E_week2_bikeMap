import React, { useState, useEffect, useRef } from "react";
import Map from "./components/Map";
import logoDesktop from "./images/logoDesktop.svg";
import logoMobile from "./images/logoMobile.svg";
import bike from "./images/bike.svg";
import ways from "./images/alt_route.svg";
import spot from "./images/perm_media.svg";
import restaurant from "./images/restaurant.svg";
import tip from "./images/visibility.svg";
import tipOff from "./images/visibility_off.svg";
import currentPoint from "./images/my_location.svg";
import plus from "./images/add.svg";
import minus from "./images/remove.svg";



function App() {

  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });

  const { lat, lng } = markerPosition;


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
    console.log(userPosition);
  }, []);

  return (
    <main className="container-2xl">
      <div className="flex flex-col justify-between">
        <header
          id="header"
          className="flex flex-wrap xl:flex-nowrap justify-start items-center bg-white py-2 lg:py-4 px-4 lg:px-10 space-x-2 lg:space-x-10 gap-y-4"
        >
          <div className="flex flex-nowrap gap-4 lg:gap-10">
            <h1 className="flex-shrink-0">
              <a href="/">
                <img className="hidden md:block" src={logoDesktop} alt="logo" />
                <img className="md:hidden" src={logoMobile} alt="logo" />
              </a>
            </h1>
            <div className="relative">
              <input
                type="text"
                className="bg-gray-light rounded-full search-bar pt-2 pb-3 px-5 w-[70vw] lg-[80vw] xl:w-[500px]"
                placeholder="搜尋地點"
              />
            </div>
          </div>
          <ul className="flex md:justify-center xl:justify-start flex-nowrap md:flex-wrap space-x-2 no-scrollbar w-full xl:w-auto">
            <li className={`flex bg-primary rounded-full min-w-max`}>
              <a className="flex item-center gap-1 py-[6px] lg:py-2 px-3">
                <img src={bike} alt="YouBike" />
                <h2 className="whitespace-nowrap">YouBike</h2>
              </a>
            </li>
            <li className={`rounded-full border border-gray-light min-w-max`}>
              <a className="flex item-center gap-1 py-[6px] lg:py-2 px-3">
                <img src={ways} alt="自行車路線" />
                <h2 className="whitespace-nowrap">自行車路線</h2>
              </a>
            </li>
            <li className={`rounded-full border border-gray-light min-w-max`}>
              <a className="flex item-center gap-1 py-[6px] lg:py-2 px-3">
                <img src={spot} alt="觀光景點" />
                <h2 className="whitespace-nowrap">觀光景點</h2>
              </a>
            </li>
            <li className={`rounded-full border border-gray-light min-w-max`}>
              <a className="flex item-center gap-1 py-[6px] lg:py-2 px-3">
                <img src={restaurant} alt="餐廳" />
                <h2 className="whitespace-nowrap">餐廳</h2>
              </a>
            </li>
          </ul>
        </header>
        <section className="relative">
          <Map markerPosition={userPosition} />
          <div className="absolute top-0 left-0 translate-x-4 translate-y-4 z-50 w-full pr-8">
            <div>
              
            </div>
            <div className="flex justify-between items-start">
            <button type="button" className="bg-white rounded-xl shadow p-3 flex gap-2">
              <img src={tip} alt="顯示列表" />
              <span>顯示列表</span>
              </button>
              <div className="flex flex-col space-y-3">
                <button type="button" className="bg-white rounded-full shadow p-2">
                  <img src={currentPoint} alt="目前所在位置" />
                </button>
                <button type="button" className="bg-white rounded-full shadow p-2">
                  <img src={plus} alt="放大" />
                </button>
                <button type="button" className="bg-white rounded-full shadow p-2">
                  <img src={minus} alt="縮小" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App


