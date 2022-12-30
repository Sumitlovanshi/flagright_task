import React from "react";
import "./Points.css";
import Right from "../../assets/right.svg";

function Points(props) {
  return (
    <div className="points-container">
      <img src={Right} className="right-img" alt="Right" />
      <div className="points-wrapper">
        <div className="points-heading">{props.heading}</div>
        <div className="points-description">{props.description}</div>
      </div>
    </div>
  );
}

export default Points;
