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
    <div className="bg-black  text-white">
      <div className="absolute flex justify-center w-full items-center">
        <div className="flex flex-col w-full">
          <div className="">
            <div class="laptop:text-[7rem] text-[4rem] font-bold text-center relative">
              <span class="text-white shadow-neon">GOOD JOB!</span>
              <div class="absolute -inset-0 opacity-75  blur-lg"></div>
            </div>
          </div>
          <div className="flex laptop:flex-row flex-col justify-around">
            <div className=" laptop:w-3/12  h-[30rem] flex flex-col items-center justify-around rounded-3xl  border-8 ">
              <div className=" w-full ">
                <img
                  className="object-cover h-full scale-150 w-full "
                  src="https://res.cloudinary.com/dzkldv06d/image/upload/v1713198409/InShot_20240415_002359224_uneatj.png"
                  alt=""
                />
              </div>
              <div className="shadow-neon -mt-20 font-bold text-3xl">
                You got {earnPoints / 2}% marks
              </div>
            </div>
            <div className=" h-[30rem]">
              <div className="">
                <div className="flex  flex-col">
                  <div className="flex flex-row justify-center">
                    <div className="laptop:m-4 laptop:text-4xl text-2xl laptop:w-4/12 font-extrabold text-center p-4">
                      CORRECT ANSWERS
                    </div>
                    <div className="laptop:m-4 laptop:text-4xl text-2xl laptop:w-4/12 font-extrabold text-center p-4">
                      INCORRECT ANSWERS
                    </div>
                  </div>

                  <div className="flex flex-row laptop:justify-center justify-around">
                    <div className="laptop:m-4 laptop:text-4xl text-2xl laptop:w-4/12 font-extrabold text-center p-3">
                      <span className="text-xl rounded-full bg-blue-500 font-sans font-bold p-2">
                        {earnPoints / 10}
                      </span>
                    </div>
                    <div className="laptop:m-4 laptop:text-4xl text-2xl laptop:w-4/12 font-extrabold text-center p-3">
                      <span className="text-xl rounded-full bg-blue-500 font-sans  font-bold p-2">
                        {(totalPoints - earnPoints) / 10}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-row laptop:justify-center justify-around">
                    <div className="laptop:m-4 laptop:text-4xl text-2xl laptop:w-4/12 font-extrabold text-center p-4">
                      SKIPPED
                    </div>
                    <div className="laptop:m-4 laptop:text-4xl text-2xl laptop:w-4/12 font-extrabold text-center p-4">
                      MARKS
                    </div>
                  </div>

                  <div className="flex flex-row laptop:justify-center justify-around">
                    <div className="laptop:m-4 laptop:text-4xl text-2xl w-4/12 font-extrabold text-center p-3">
                      <span className="text-xl font-sans rounded-full bg-blue-500 font-bold p-2">
                        {totalPoints / 10 - attempts}
                      </span>
                    </div>
                    <div className="laptop:m-4 laptop:text-4xl text-2xl w-4/12 font-extrabold text-center p-3">
                      <span className="text-xl rounded-full bg-blue-500 font-sans font-bold p-2">
                        {earnPoints}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center ">
                  <div className="my-2 laptop:mx-16 mx-2 ">
                    <Link
                      to={"/leaderboard"}
                      className="p-[3px] relative mx-auto mt-10"
                    >
                      <div className="absolute inset-0  rounded-lg" />
                      <div className="px-8 py-2  bg-transparent rounded-full text-xl border-2 font-bold border-white relative group transition duration-200 text-pink-400/80 hover:bg-transparent hover:drop-shadow-2xl">
                        LEADERBOARD
                      </div>
                    </Link>
                  </div>
                  <div className="my-2 laptop:mx-16 mx-2">
                    <Link
                      to={"/"}
                      onClick={onRestart}
                      className="p-[3px] relative mx-auto mt-10"
                    >
                      <div className="absolute inset-0  rounded-lg" />
                      <div className="px-8 py-2  bg-transparent rounded-full text-xl border-2 font-bold border-white relative group transition duration-200 text-pink-400/80 hover:bg-transparent hover:drop-shadow-2xl">
                        RESTART
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full fixed -z-50">
        <img
          className="object-cover w-full"
          src="https://res.cloudinary.com/dzkldv06d/image/upload/v1713116969/1_y8dsvd.png"
          alt=""
        />
      </div>
    </div>
  );
}
