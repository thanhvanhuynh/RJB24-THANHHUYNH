import React from "react";
import Image from "../image/imagebasic1.jpg";
import Basic from "./Basic1.css";
const Basic1 = () => {
  return (
    <>
      <div className="container">
        <div className="contai-ui">
          <img src={Image} className="basic-image" />
          <div className="text">
            <h2 className="text-head">Clothing & Apparel</h2>
            <h3 className="text-proper">Accessories </h3>
            <h3 className="text-proper">Bags </h3>
            <h3 className="text-proper">Kid's Fashion </h3>
            <h3 className="text-proper">Mens</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic1;
