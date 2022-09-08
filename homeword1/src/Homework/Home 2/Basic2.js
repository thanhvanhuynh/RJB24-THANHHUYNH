import React from "react";
import Television from "../image/2.jpg";
import "./Basic2.css";
import { AiFillStar } from "react-icons/ai";
export default function Basic2() {
  return (
    <>
      <div className="container-full">
        <div className="container-image">
          <img src={Television} />
          <h5 className="text-produce"> YOUNG SHOP</h5>
        </div>
        <div className="text-room">
          <a className="samsung" href="https://www.samsung.com/vn/">
            SAMSUNG UHD TV 24inch
          </a>
          <div className="star">
            <div className="compo">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="number"> 02</p>
          </div>
          <p className="sticker">$599</p>
        </div>
      </div>
    </>
  );
}
