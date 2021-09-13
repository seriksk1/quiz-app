import React, { FC, useEffect, useState, useRef } from "react";
import {
  getDeadTime,
  getTimeRemaining,
  getTransformedTime,
} from "../redux/helpers/timer";

interface TimeCounterProps {
  nextQuestion: any;
}

const TimeCounter: FC<TimeCounterProps> = ({ nextQuestion }) => {
  const [time, setTime] = useState<any>("00:00:10");
  const ref = useRef<any>();

  const getTimer = (e: any) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      return getTransformedTime(hours, minutes, seconds);
    } else {
      restart();
    }
  };

  const restart = () => {
    clearTimer(getDeadTime());
    nextQuestion();
  };

  const clearTimer = (currentTime: any) => {
    setTime("00:00:10");

    if (ref.current) {
      clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      setTime(getTimer(currentTime));
    }, 1000);
  };

  useEffect(() => {
    clearTimer(getDeadTime());
    return () => clearInterval(ref.current);
  }, [nextQuestion]);

  return <div>{time}</div>;
};

export default TimeCounter;
