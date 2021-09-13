import { TIME_TO_ANSWER } from "../contants";

export const getTimeRemaining = (deadTime: Date) => {
  const currentTime = new Date();

  const total =
    Date.parse(deadTime.toString()) - Date.parse(currentTime.toString());
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

export const getTransformedTime = (
  hours: number,
  minutes: number,
  seconds: number
) => {
  return (
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds)
  );
};
