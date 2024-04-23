import React from "react";

const DateTimeDisplay = ({ value, isDanger }) => {
  return (
    <div className={isDanger ? "text-red-700" : "countdown"}>
      <p>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
