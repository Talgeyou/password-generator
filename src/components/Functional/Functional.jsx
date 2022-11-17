import React, { useCallback, useRef } from "react";
import "./Functional.scss";
import Button from "./Button/Button";
import InputRange from "./InputRange/InputRange";
import Checkboxes from "./Checkboxes/Checkboxes";

function Functional({
  password,
  length,
  writeHistory,
  setLength,
  changePassword,
}) {
  const alertRef = useRef(null);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(password).then(() => {
      console.log(password, Boolean(password));
      if (!password) {
        return;
      }

      alertRef.current.classList.add("show");
      setTimeout(() => {
        alertRef.current.classList.remove("show");
      }, 1000);
      writeHistory();
    });
  }, [password, writeHistory]);

  return (
    <div className="functional">
      <h4 className="alert" ref={alertRef}>
        Copied!
      </h4>
      <div className="functional__clipboard">
        <p className="functional__password">{password}</p>
      </div>
      <Button copy={copy} />
      <InputRange setLength={setLength} />
      <Checkboxes changePassword={changePassword} length={length} />
    </div>
  );
}

export default Functional;
