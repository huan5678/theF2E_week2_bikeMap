import React from "react";
import Dropdown from "./Dropdown";

export function SearchBar(props) {
  const [searchValue, searchValueSet] = React.useState("");
  React.useEffect(() => {

  }, [searchValue]);
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-gray-light rounded-full search-bar pt-2 pb-3 px-5 w-[70vw] lg-[80vw] xl:w-[500px] search"
        placeholder="搜尋地點"
        onChange={(e) => searchValueSet(e.target.value)}
      />
      <div
        className={`absolute top-0 left-0 ${
          props.dropStat.isOpen ? "" : "hidden"
        }`}
      >
        <Dropdown></Dropdown>
      </div>
      <button type="button">
      <img
        src={props.search}
        alt="搜尋地點"
        className={`absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2`}
      />
      </button>
    </div>
  );
}
