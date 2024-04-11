import { useState } from "react";
import data from "../constants";
const Questions = () => {
  const [selectedOption, setSelectedOption] = useState(-1);

  const onSelection = (optionIndex: number) => {
    setSelectedOption(optionIndex); // Update the selected option state
  };

  const question = data[0];

  return (
    <div className=" mt-20 mb-40 items-center">
      <h2 className="text-white mt-10 text-2xl text-center font-semibold">
        {question.question}
      </h2>
      <ul key={question.id} className="">
        {question.options.map((q, i) => (
          <li className="mt-10 flex items-center ml-10" key={i}>
            <input
              type="radio"
              value={i}
              name="options"
              id={`q${i}-option`}
              checked={selectedOption === i} // Check if the current option is selected
              onChange={() => onSelection(i)} // Pass the index to the onSelection function
              className="h-5 w-5 checked:bg-green-500 text-green-500"
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
