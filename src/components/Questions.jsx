import { useEffect, useState } from "react";
import data from "../constants";
import { useFetchQestion } from "../Hooks/fetchQuestion";
import { updateResult } from "../Hooks/setResult";
import { useDispatch, useSelector } from "react-redux";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();
  console.log(apiData);

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  }

  return isLoading === true ? (
    <h1 className="text-white text-3xl mb-10 text-center">Loading....</h1>
  ) : (
    <div className="mb-5 desktop:mb-20 items-center">
      <h2 className="text-white mt-5 md:mt-10 text-xl md:text-2xl text-center font-semibold">
        {"Q" + questions?.id + " . " + questions?.question}
      </h2>
      <ul key={questions?.id} className="">
        {questions?.options.map((q, i) => (
          <li className="mt-10 flex items-center ml-10" key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
              className="md:h-5 md:w-5 h-3 w-3 checked:bg-red-800 text-red-900"
            />
            <label
              htmlFor={`q${i}-option`}
              className="text-white ml-4 font-semibold"
            >
              {" "}
              {q}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
