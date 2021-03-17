import React, { useEffect, useState, useRef } from "react";
import "./Timer.css";
export const Timer = ({ hours = 0, minutes = 1, seconds = 0 }) => {
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    hours: parseInt(hours, 10),
    minutes: parseInt(minutes, 10),
    seconds: parseInt(seconds, 10),
  });

  const tick = () => {
    if (paused || over) return;

    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.minutes === 0 && time.seconds === 0) {
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () => {
    setTime({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    });
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  });

  return (
    <div>
      <p className="text text-primary">{`${time.hours
        .toString()
        .padStart(2, "0")}:${time.minutes
        .toString()
        .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</p>
      <div>{over ? "Time's up!" : ""}</div>
      <button className="btn btn-success" onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button className="btn btn-success m-2" onClick={() => reset()}>
        Restart
      </button>
    </div>
  );
};
