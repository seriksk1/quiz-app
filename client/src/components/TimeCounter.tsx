import React, { FC, useEffect, useState, useRef } from "react";

import {
  getDeadTime,
  getTimeRemaining,
  getTransformedTime,
} from "../redux/helpers/timer";

interface TimeCounterProps {
  nextQuestion: Function;
}

const TimeCounter: FC<TimeCounterProps> = ({ nextQuestion }) => {
  const [time, setTime] = useState<string>("00:00:10");
  const ref = useRef<any>();

  const getTimer = (deadTime: Date) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(deadTime);
    if (total >= 0) {
      return getTransformedTime(hours, minutes, seconds);
    } else {
      restart();
      return "00:00:10";
    }
  };

  const restart = () => {
    nextQuestion();
    clearTimer(getDeadTime());
  };

  const clearTimer = (deadTime: Date) => {
    setTime("00:00:10");

    if (ref.current) {
      clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      setTime(getTimer(deadTime));
    }, 1000);
  };

  useEffect(() => {
    clearTimer(getDeadTime());
    return () => clearInterval(ref.current);
  }, [nextQuestion]);

  return <div>{time}</div>;
};

export default TimeCounter;
