import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNextQuestion } from "../redux/actions/quiz";
import { TIME_TO_ANSWER } from "../redux/contants";

const TimeCounter = () => {
  const dispatch = useDispatch();
  const [time, setTime] = useState(TIME_TO_ANSWER);

  const timerRef = useRef<any>();

  const decreaseTime = () => {
    setTime((prev) => prev - 1);
  };

  const stopTimer = () => {
    if (time === 0) {
      clearInterval(timerRef.current);
      dispatch(setNextQuestion(1));
    } else {
      console.log("time:", time);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(decreaseTime, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    stopTimer();
  }, [time]);

  const showTime = (time: number) => {
    return time;
  };

  return <div>{time}</div>;
};

export default TimeCounter;
