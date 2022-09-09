import React from "react";
import Anh from "../image/3.jpg";
import "./Basic3.css";

export default function Basic3() {
  let date = Date();
  // let year = date.getFullYear();
  // let month = date.getMonth();
  // let das = date.getDay();
  return (
    <div className="container">
      <div>
        <img className="image" src={Anh} />
        <p className="technology">Technology</p>
        <h1>Harman Kadon Onyx Studio Mini, Reviews & Experiences</h1>
      </div>
      {date} by drfurion
    </div>
  );
}
