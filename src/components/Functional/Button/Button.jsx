import React from "react";

function Button(props) {
  return (
    <div className="functional__button" onClick={props.write}>
      <p>Copy password_</p>
      <img src={require("./Icon.png")} alt="icon" />
      <div className="functional__rectangle">
        <p>R25</p>
      </div>
    </div>
  );
}

export default Button;
