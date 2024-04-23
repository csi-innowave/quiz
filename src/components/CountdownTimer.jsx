import React, { useEffect } from "react";
import { useCountdown } from "../Hooks/useCountDown";
import { Navigate } from "react-router-dom";
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="absolute z-20 justify-center text-3xl top-7 left-6 md:top-10 md:text-4xl  md:left-8 flex text-white">
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={minutes <= 5} />
      :
      <DateTimeDisplay
        value={seconds}
        type={"Seconds"}
        isDanger={minutes <= 1}
      />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);

  if (minutes + seconds > 0) {
    return <ShowCounter minutes={minutes} seconds={seconds} />;
  } else {
    return <Navigate to={"/result"} replace={true} />;
  }
};

export default CountdownTimer;
