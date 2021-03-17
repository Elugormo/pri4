import React, { useEffect, useState, useRef } from "react";
import "./Timer.css";
export const Timer = ({ hours = 0, minutes = 1, seconds = 0 }) => {
  const [paused, setPaused] = React.useState(true);
  const [over, setOver] = React.useState(false);
  const [time, setTime] = React.useState({
    hours: parseInt(hours, 10),
    minutes: parseInt(minutes, 10),
    seconds: parseInt(seconds, 10),
  });

  const tick = () => {
    // do nothing if paused or over
    if (paused || over) return;

    // Time up
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setOver(true);
    } else if (time.minutes === 0 && time.seconds === 0) {
      // decrement hour
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      // decrement minute
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      // decrement seconds
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  // Resets to original state
  const reset = () => {
    setTime({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    });
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    // Works similar to componentDidMount
    let timerID = setInterval(() => tick(), 1000);

    // Works similar to componentWillUnmount, do clean up in return function of
    // useEffect
    return () => clearInterval(timerID);

    // there is no second argument to useEffect, so it acts as componentDidUpdate
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
