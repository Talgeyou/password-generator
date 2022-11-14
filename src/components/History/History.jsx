import React from "react";
import "./History.scss";
function History(props) {
  if (props.history.length > 5) {
    props.history.shift();
  }
  return (
    <div className="history">
      <h2 className="history__title">password History</h2>
      <button
        className="history__button"
        onClick={() => {
          localStorage.setItem("history", JSON.stringify([]));
          props.setHistory(JSON.parse(localStorage.getItem("history")));
        }}
      >
        Clear history
      </button>
      <div className="history__list">
        {props.history.map((historyItem, index) => {
          // eslint-disable-next-line array-callback-return
          if (historyItem === "Select length and security") return;
          console.log("fisting");
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
