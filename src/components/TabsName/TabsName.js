import React from "react";
import "./TabsName.css";

function TabsName({ checkTab, ...props }) {
  return (
    <button className="tabs-name-wrapper" onClick={() => checkTab(props.name)}>
      <img src={props.img} className="tabs-img" alt="tabs-img" />
      {props.data}
    </button>
  );
}

export default TabsName;
