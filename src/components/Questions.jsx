import { useEffect, useState } from "react";
import { useFetchQestion } from "../Hooks/fetchQuestion";
import { updateResult } from "../Hooks/setResult";
import { useDispatch, useSelector } from "react-redux";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

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
    <div className="mb-5 bg-white rounded-lg border-slate-950 border-2 pt-5 md:mx-16 mx-2 desktop:mb-20 items-center">
      <h2 className="text-black mt-2 px-2 text-xl mx-2 md:text-2xl ml-3 md:ml-0 md:text-center font-semibold">
        {"Q" + questions?.id + " . " + questions?.question}
      </h2>
      <ul key={questions?.id} className="pb-10">
        {questions?.options.map((q, i) => (
          <li
            className="mt-3 md:mt-10 flex px-2 items-center ml-5 md:ml-10"
            key={i}
          >
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
              className="md:h-5 md:w-5 h-4 w-4 checked:bg-red-800 text-red-900"
            />
            <label
              htmlFor={`q${i}-option`}
              className="text-slate-700 text-lg ml-4 font-semibold"
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
