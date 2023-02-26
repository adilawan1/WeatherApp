import React from "react";
import { useEffect, useState } from "react";
import "./Clock.css";
export default function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span className="myspan">{date.toLocaleTimeString()}</span>;
}
