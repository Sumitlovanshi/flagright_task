import React from "react";
import "./Button.css";
import Arrow from "../../assets/arrow.svg";

function Button() {
  return (
    <div className="btn-wrapper">
      <button className="btn">Learn more</button>
      <img src={Arrow} className="btn-img" alt="Arrow" />
    </div>
  );
}

export default Button;
