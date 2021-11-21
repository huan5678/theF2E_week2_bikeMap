import React from "react";
import { icon, dropdownContext } from "../context";

function DropdownItem(props) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <li>
      <button
        type="button"
        name={props.target}
        value={props.target}
        className={`rounded-lg border border-gray-light min-w-max ${
          isActive ? "bg-primary" : ""
        }`}
      >
        {props.title}
      </button>
    </li>
  );
}

function Dropdown() {
  const { close } = React.useContext(icon);
  const dropdownCTX = React.useContext(dropdownContext);

  return (
    <section className="bg-white rounded-2xl shadow p-4">
      <form className="relative">
        <button
          type="button"
          className="absolute top-0 right-0 -translate-y-1/2"
          onClick={() => dropdownCTX.setStatus(false)}
        >
          <img src={close} alt="關閉列表" className="w-4 h-4" />
        </button>
        <h2 className="text-xs">北部</h2>
        <ul className="flex">
          <DropdownItem title={"台北"} target={"Taipei"}></DropdownItem>
          <DropdownItem title={"新北"} target={"NewTaipei"}></DropdownItem>
          <DropdownItem title={"基隆"} target={"Keelung"}></DropdownItem>
          <DropdownItem title={"宜蘭"} target={"YilanCounty"}></DropdownItem>
          <DropdownItem title={"桃園"} target={"Taoyuan"}></DropdownItem>
          <DropdownItem title={"新竹"} target={"Hsinchu"}></DropdownItem>
          <DropdownItem
            title={"新竹縣"}
            target={"HsinchuCounty"}
          ></DropdownItem>
          <DropdownItem title={"苗栗"} target={"MiaoliCounty"}></DropdownItem>
        </ul>
        <h2 className="text-xs">中部</h2>
        <ul className="flex">
          <DropdownItem title={"台中"} target={"Taichung"}></DropdownItem>
          <DropdownItem title={"雲林"} target={"Yunlin"}></DropdownItem>
          <DropdownItem title={"彰化"} target={"Changhua"}></DropdownItem>
          <DropdownItem title={"南投"} target={"NantouCounty"}></DropdownItem>
        </ul>
        <h2 className="text-xs">南部</h2>
        <ul className="flex">
          <DropdownItem title={"嘉義市"} target={"Chiayi"}></DropdownItem>
          <DropdownItem title={"嘉義縣"} target={"ChiayiCounty"}></DropdownItem>
          <DropdownItem title={"台南"} target={"Tainan"}></DropdownItem>
          <DropdownItem title={"高雄"} target={"Kaohsiung"}></DropdownItem>
          <DropdownItem title={"屏東"} target={"PingtungCounty"}></DropdownItem>
        </ul>
        <h2 className="text-xs">東部</h2>
        <ul className="flex">
          <DropdownItem title={"台東"} target={"TaitungCounty"}></DropdownItem>
          <DropdownItem title={"花蓮"} target={"HualienCounty"}></DropdownItem>
        </ul>
        <h2 className="text-xs">外島</h2>
        <ul className="flex">
          <DropdownItem title={"澎湖"} target={"PenghuCounty"}></DropdownItem>
          <DropdownItem title={"金門"} target={"KinmenCounty"}></DropdownItem>
          <DropdownItem
            title={"連江"}
            target={"LienchiangCounty"}
          ></DropdownItem>
        </ul>
      </form>
    </section>
  );
}

export default Dropdown;
