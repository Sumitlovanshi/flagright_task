import React from "react";
import ParaContainer from "../ParaContainer/ParaContainer";
import TabsContainer from "../TabsContainer/TabsContainer";
import "./Section.css";

function Section() {
  return (
    <div className="body-section">
      <ParaContainer />
      <TabsContainer />
    </div>
  );
}

export default Section;
