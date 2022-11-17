import React, { useState, useEffect } from "react";
import "./InputRange.scss";
function InputRange({ setLength }) {
  const [rangeValue, setRangeValue] = useState(5);

  const outputUpdate = (event) => {
    setRangeValue(event.target.value);
  };

  useEffect(() => {
    setLength(rangeValue);
  }, [rangeValue, setLength]);

  return (
    <div className="input">
      <output className="valume" htmlFor="range">
        Password length: {rangeValue}
      </output>
      <input
        type="range"
        min="0"
        max="50"
        id="range"
        value={rangeValue}
        onInput={outputUpdate}
      />
    </div>
  );
}

export default InputRange;
