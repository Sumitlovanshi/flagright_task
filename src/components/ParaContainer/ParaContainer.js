import React from "react";
import Button from "../Button/Button";
import Points from "../Points/Points";
import "./ParaContainer.css";

function ParaContainer() {
  return (
    <div className="para-wrapper">
      <Points
        heading="Efficient, intuitive, no-code"
        description="Console empowers operational teams work and collaborate more effectively and faster."
      />

      <Points
        heading="Endless capabilities, easily configurable"
        description="Console enables compliance and fraud teams to be independent and make faster, more reliable decisions."
      />

      <Points
        heading="Get more done"
        description="Console users can get 200% increase in productivity with Flagright."
      />

      <Button />
    </div>
  );
}

export default ParaContainer;
