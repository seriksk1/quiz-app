import { TIME_TO_ANSWER } from "../contants";

export const getTimeRemaining = (e: any) => {
  const newDate = new Date();
  const total = Date.parse(e) - Date.parse(newDate.toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
  return {
    total,
    hours,
    minutes,
    seconds,
  };
};

export const getDeadTime = () => {
  let deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + TIME_TO_ANSWER);
  return deadline;
};
