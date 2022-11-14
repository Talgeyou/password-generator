import React from "react";
import "./History.scss";
function History(props) {
  //Если пришедший массив больше 5 элементов вырезаем его начало
  if (props.history.length > 5) {
    props.history.shift();
  }
  return (
    <div className="history">
      <h2 className="history__title">password History</h2>
      <button
        className="history__button"
        onClick={() => {
          //Запись истории в локальное хранилище
          localStorage.setItem("history", JSON.stringify([]));
          //Устанавливаем исторю в соответствии с локальным хранилищем
          props.setHistory(JSON.parse(localStorage.getItem("history")));
        }}
      >
        Clear history
      </button>
      <div className="history__list">
        {/* мапим для каждого элемента массива текст и иконку */}
        {props.history.map((historyItem, index) => {
          // eslint-disable-next-line array-callback-return
          if (historyItem === "Select length and security") return;
          return (
            <div key={index} className="history__div">
              <p className="history__item">{historyItem}</p>
              <img
                src={require("./Icon.png")}
                alt=""
                className="history__icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
