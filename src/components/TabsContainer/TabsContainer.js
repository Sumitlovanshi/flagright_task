import React, { useState } from "react";
import TabsName from "../TabsName/TabsName";
import "./TabsContainer.css";
import Stack from "../../assets/Stack.svg";
import Rules from "../../assets/Rules.svg";
import Graph from "../../assets/Graph.svg";
import Person from "../../assets/Person.svg";
import firstTab from "../../assets/firstTab.svg";
import secondTab from "../../assets/secondTab.svg";
import thirdTab from "../../assets/thirdTab.svg";
import fourthTab from "../../assets/fourthTab.svg";

function Tabs() {
  const [img, setImg] = useState(firstTab);

  const checkTab = (tab) => {
    if (tab === "secondTab") setImg(secondTab);
    else if (tab === "firstTab") setImg(firstTab);
    else if (tab === "thirdTab") setImg(thirdTab);
    else if (tab === "fourthTab") setImg(fourthTab);
  };

  return (
    <div className="tabs-wrapper">
      <div className="tabs-list">
        <TabsName
          data="Case management"
          img={Stack}
          name="firstTab"
          checkTab={checkTab}
        />
        <TabsName
          data="Rules"
          img={Rules}
          name="secondTab"
          checkTab={checkTab}
        />
        <TabsName
          data="Risk scoring"
          img={Graph}
          name="thirdTab"
          checkTab={checkTab}
        />
        <TabsName
          data="Sanctions screening"
          img={Person}
          name="fourthTab"
          checkTab={checkTab}
        />
      </div>
      <div className="main-imgs">
        <img src={img} alt="Imgs" />
      </div>
    </div>
  );
}

export default Tabs;
