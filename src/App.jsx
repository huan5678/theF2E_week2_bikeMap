import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import Map from "./components/Map";
import { icon, dropdownContext, ApiData, ApiContextProvider } from "./context";
import { SearchBar } from "./components/SearchBar";


function App() {
  const [showList, setShowList] = useState(false);

  const [selectedCity, setSelectedCity] = useState("Taipei");

  const {
    logoDesktop,
    logoMobile,
    bike,
    ways,
    spot,
    restaurant,
    tip,
    tipOff,
    search,
  } = useContext(icon);


  const dropStat = useContext(dropdownContext);

  return (
    <main className="container-2xl">
      <div className="flex flex-col justify-between">
        <header
          id="header"
          className="flex flex-wrap xl:flex-nowrap justify-start items-center bg-white
          py-2 lg:py-4 px-4 lg:px-10 space-x-2 lg:space-x-10 gap-y-4 overflow-hidden select-none"
        >
          <div className="flex flex-nowrap gap-4 lg:gap-10">
            <h1 className="flex-shrink-0">
              <a href="/">
                <img className="hidden md:block" src={logoDesktop} alt="logo" />
                <img className="md:hidden" src={logoMobile} alt="logo" />
              </a>
            </h1>
            <SearchBar search={search} dropStat={dropStat}></SearchBar>
          </div>
          <ul className="flex md:justify-center xl:justify-start flex-nowrap md:flex-wrap space-x-2 no-scrollbar w-full xl:w-auto overflow-scroll">
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
        <section className="relative select-none">
          <Map data={selectedCity } />
          <div className="absolute top-0 left-0 translate-x-4 translate-y-4 z-30 w-[98vw] pr-8">
            <div className="">
              <button
                type="button"
                className="bg-white rounded-xl shadow p-3 flex gap-2"
              >
                <img src={showList ? tipOff : tip} alt="顯示列表" />
                <span>顯示列表</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
