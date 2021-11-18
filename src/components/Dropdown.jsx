import React from "react";

function DropdownItem(title, target) {
    const [isActive, setIsActive] = React.useState(false);
  return (
    <li
      className={`rounded-lg border border-gray-light min-w-max ${isActive ? "bg-primary" : ""}`}
      onClick={setIsActive((item) => !item)}
    >
      <label htmlFor={target}>{title}</label>
      <input type="button" name={target} value={target} />
    </li>
  );
}

const Dropdown = () => {
    return (
  <section className="bg-white rounded-2xl shadow">
    <form className="">
      <h2>北部</h2>
      <ul className="flex">
        <DropdownItem title={"台北"} target={"Taipei"}></DropdownItem>
        <DropdownItem title={"新北"} target={"NewTaipei"}></DropdownItem>
        <DropdownItem title={"基隆"} target={"Keelung"}></DropdownItem>
        <DropdownItem title={"桃園"} target={"Taoyuan"}></DropdownItem>
        <DropdownItem title={"新竹"} target={"Hsinchu"}></DropdownItem>
        <DropdownItem title={"宜蘭"} target={"YilanCounty"}></DropdownItem>
        <DropdownItem title={"台北"} target={"Taipei"}></DropdownItem>
      </ul>
      <h2>中部</h2>
            <ul className="flex">
                <DropdownItem title={"台中"} target={"Taichung"}></DropdownItem>
                <DropdownItem title={"苗栗"} target={"MiaoliCounty"}></DropdownItem>
                <DropdownItem title={"彰化"} target={"Changhua"}></DropdownItem>
                <DropdownItem title={"南投"} target={"NantouCounty"}></DropdownItem>
                <DropdownItem title={"雲林"} target={"Yunlin"}></DropdownItem>
            </ul>
      </ul>
      <h2>南部</h2>
      <ul className="flex">
            <DropdownItem title={"高雄"} target={"Kaohsiung"}></DropdownItem>
            <DropdownItem title={"台南"} target={"Tainan"}></DropdownItem>
            <DropdownItem title={"嘉義"} target={"Chiayi"}></DropdownItem>
            <DropdownItem title={"屏東"} target={"PingtungCounty"}></DropdownItem>
      </ul>
      <h2>東部</h2>
        <ul className="flex">
            <DropdownItem title={"台東"} target={"TaitungCounty"}></DropdownItem>
            <DropdownItem title={"花蓮"} target={"HualienCounty"}></DropdownItem>
      </ul>
      <h2>外島</h2>
      <ul className="flex">
            <DropdownItem title={"澎湖"} target={"PenghuCounty"}></DropdownItem>
            <DropdownItem title={"金門"} target={"KinmenCounty"}></DropdownItem>
            <DropdownItem title={"連江"} target={"LienchiangCounty"}></DropdownItem>
        </ul>
    </form>
  </section >
          )
}

export default Dropdown;
