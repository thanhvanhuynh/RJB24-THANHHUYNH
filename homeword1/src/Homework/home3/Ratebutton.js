import React, { useEffect, useState } from "react";
import "./RateButton.css";
import { BsStarFill } from "react-icons/bs";
export default function Ratebutton() {
  const [secons, setSecons] = useState(0);
  const [minute, setMinute] = useState(0);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecons(secons + 1);
      if (secons === 59) {
        setMinute(minute + 1);
        setSecons(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  const Restart = () => {
    setMinute(0);
    setSecons(0);
  };
  const Stop = () => {
    clearInterval(timer);
  };
  return (
    <div className="timer">
      <div className="container">
        <div className="container-timer">
          <h1>TIMER</h1>
          <h1>
            {minute < 10 ? "0" + minute : minute}:
            {secons < 10 ? "0" + secons : secons}
          </h1>
          <button className="restart" onClick={Restart}>
            RESTART
          </button>
          <button className="stop" onClick={Stop}>
            STOP
          </button>
        </div>
      </div>
    </div>
  );
}
