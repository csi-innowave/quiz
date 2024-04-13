import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { BackgroundBeams } from "./ui/background-beams";
import ResultTable from "./resultTable";
import { useDispatch, useSelector } from "react-redux";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";

/** import actions  */
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { usePublishResult } from "../Hooks/setResult";

export default function Result() {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  /** store user result */
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  return (
    <div className="bg-black h-screen text-white pt-10">
      <h1 className="bg-clip-text font-bold text-transparent drop-shadow-2xl text-3xl text-center md:text-4xl lg:text-7xl bg-gradient-to-b from-white/80 to-blue-700/20">
        Your Score
      </h1>

      <div className="z-10 relative result flex mt-10 items-center flex-col">
        <div className="flex gap-5">
          <span className="text-2xl font-sans font-bold">
            Max Points :{"   "}
          </span>
          <span className="text-2xl font-sans font-bold">
            {"  " + totalPoints || 0}
          </span>
        </div>
        <div className="flex gap-5 mt-5">
          <span className="text-2xl font-sans font-bold">
            Total Questions Attempted:{" "}
          </span>
          <span className="text-2xl font-sans font-bold">
            {queue.length || 0}
          </span>
        </div>

        <div className="flex gap-5 mt-5">
          <span className="text-2xl font-sans font-bold">Your Points : </span>
          <span className="text-2xl font-sans font-bold">{earnPoints}</span>
        </div>
      </div>

      <div className="start relative z-10 flex">
        <Link
          to={"/"}
          onClick={onRestart}
          className="p-[3px] relative mx-auto mt-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Restart
          </div>
        </Link>
        <Link to={"/leaderboard"} className="p-[3px] relative mx-auto mt-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Leaderboard
          </div>
        </Link>
      </div>

      <BackgroundBeams />
    </div>
  );
}
