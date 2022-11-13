import React, { useState, useRef, useEffect } from "react";
import "./InputRange.scss";
function InputRange(props) {
  const [rangeValue, setRangeValue] = useState(5);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const { setLength } = props;
  const outputUpdate = (event) => {
    setRangeValue(event.target.value);
  };
  useEffect(() => {
    setLength(rangeValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeValue]);

  return (
    <div className="input">
      <output className="valume" htmlFor="range" ref={outputRef}>
        Password length: {rangeValue}
      </output>
      <input
        type="range"
        min="0"
        max="50"
        id="range"
        value={rangeValue}
        onInput={outputUpdate}
        ref={inputRef}
      />
    </div>
  );
}

export default InputRange;
