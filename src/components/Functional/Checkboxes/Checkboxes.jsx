import React, { useState, useEffect } from "react";
import "./Checkboxes.scss";

function Checkboxes({ changePassword }) {
  const [checkboxes, setCheckboxes] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });

  function handleChange(event) {
    if (typeof event.target.name === "string") {
      setCheckboxes((prev) => ({
        ...prev,
        [event.target.name]: event.target.checked,
      }));
    }
  }

  useEffect(() => {
    changePassword(checkboxes);
  }, [changePassword, checkboxes]);

  return (
    <div className="checkboxes">
      {Object.entries(checkboxes).map(([key, value]) => (
        <label htmlFor={key} className="label">
          <input
            type="checkbox"
            name={key}
            className={`checkboxes__${key} checkbox`}
            checked={value}
            onChange={handleChange}
            id={key}
          />
          <span>{key} letters</span>
        </label>
      ))}
    </div>
  );
}

export default Checkboxes;
