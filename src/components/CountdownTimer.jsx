import React from "react";
import { useCountdown } from "../Hooks/useCountDown";
import { Navigate } from "react-router-dom";
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="absolute z-20 text-white">
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={minutes <= 1} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (targetDate > 0) {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  } else {
    return <Navigate to={"/result"} replace={true} />;
  }
};

export default CountdownTimer;
