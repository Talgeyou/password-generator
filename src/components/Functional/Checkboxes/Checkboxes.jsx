import React, { useState, useEffect } from "react";
import "./Checkboxes.scss";
function Checkboxes(props) {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  useEffect(() => {
    props.generatePassword(checkboxes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxes]);
  useEffect(() => {
    props.generatePassword(checkboxes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.length]);
  return (
    <div className="checkboxes">
      <label htmlFor="uppercase" className="label">
        <input
          type="checkbox"
          name="uppercase"
          className="checkboxes__uppercase checkbox"
          checked={uppercase}
          onChange={() => {
            setUppercase((prev) => !prev);
            setCheckboxes({
              ...checkboxes,
              uppercase: !uppercase,
            });
            // props.generatePassword(checkboxes);
          }}
          id="uppercase"
        />
        <span>Uppercase letters</span>
      </label>
      <label htmlFor="lowercase" className="label">
        <input
          type="checkbox"
          name="lowercase"
          className="checkboxes__lowercase checkbox"
          checked={lowercase}
          onChange={() => {
            setLowercase((prev) => !prev);
            setCheckboxes({
              ...checkboxes,
              lowercase: !lowercase,
            });
            // props.generatePassword(checkboxes);
          }}
          id="lowercase"
        />
        <span>Lowercase letters</span>
      </label>
      <label htmlFor="Numbers" className="label">
        <input
          type="checkbox"
          name="Numbers"
          className="checkboxes__numbers checkbox"
          checked={numbers}
          onChange={() => {
            setNumbers((prev) => !prev);
            setCheckboxes({
              ...checkboxes,
              numbers: !numbers,
            });
            // props.generatePassword(checkboxes);
          }}
          id="Numbers"
        />
        <span> Numbers</span>
      </label>
      <label htmlFor="symbols" className="label">
        <input
          type="checkbox"
          name="symbols"
          className="checkboxes__symbols checkbox"
          checked={symbols}
          onChange={() => {
            setSymbols((prev) => !prev);
            setCheckboxes({
              ...checkboxes,
              symbols: !symbols,
            });
            // props.generatePassword(checkboxes);
          }}
          id="symbols"
        />
        <span>Symbols</span>
      </label>
    </div>
  );
}

export default Checkboxes;
