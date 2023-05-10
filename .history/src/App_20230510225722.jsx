import React from "react";
import ".//App.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time);
  const [daydate, setDayDate] = useState(date);
  const [mode, setMode] = useState(true);

  const stopTime = () => {
    if (updateTime === mode) {
      setInterval(updateTime, 1000);
    } else {
      setMode(false);
      clearInterval(updateTime);
    }
  };

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  const updateDate = () => {
    let date = new Date().toLocaleDateString();
    setDayDate(date);
  };
  setInterval(updateTime, 1000);
  setInterval(updateDate, 1000);
  return (
    <>
      <div>
        <h4>Hello, This is Time Application! </h4>
      </div>
      <h2>Time : {ctime}</h2>
      <h3>Date : {date}</h3>
      <button onClick={stopTime()}>Stop Time</button>
    </>
  );
}
