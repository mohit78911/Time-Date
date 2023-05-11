import React, { useEffect, useState } from "react";
import ".//App.css"

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeon] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <>
      <h1>StopWatch</h1>
      <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </h1>
      <button onClick={() => setTimeon(true)}>Start</button>
      <button onClick={() => setTimeon(false)}>Stop</button>
      <button onClick={() => setTimeon(true)}>Resume</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </>
  );
}
