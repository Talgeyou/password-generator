import React, { useState, useEffect } from "react";
import "./InputRange.scss";
function InputRange(props) {
  //Стейт для управляемого инпута
  const [rangeValue, setRangeValue] = useState(5);

  //Деструктуризация пропсов
  const { setLength } = props;

  //Изменения стейта инпута
  const outputUpdate = (event) => {
    setRangeValue(event.target.value);
  };

  //При обновлении стейта инпута вызывается функция обновления стейта длины пароля в Арр-е
  useEffect(() => {
    setLength(rangeValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeValue]);

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
