import React, { FC, useEffect, useState, useRef } from "react";
import { TIME_TO_ANSWER } from "../redux/contants";
import { getDeadTime, getTimeRemaining } from "../redux/helpers/timer";

interface TimeCounterProps {
  nextQuestion: any;
}

const TimeCounter: FC<TimeCounterProps> = ({ nextQuestion }) => {
  const [time, setTime] = useState<any>("00:00:10");
  const ref = useRef<any>();

  const getTimer = (e: any) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      const timer =
        (hours > 9 ? hours : "0" + hours) +
        ":" +
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
      return timer;
    } else {
      nextQuestion();
      clearTimer(getDeadTime());
    }
  };

  const clearTimer = (currentTime: any) => {
    setTime("00:00:10");

    if (ref.current) {
      clearInterval(ref.current);
    }

    ref.current = setInterval(() => {
      setTime(getTimer(currentTime));
    });
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return <div>{time}</div>;
};

export default TimeCounter;
