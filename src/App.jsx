import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Functional from "./components/Functional/Functional";
import History from "./components/History/History";
function App() {
  const [password, setPassword] = useState("Select length and security");
  const [length, setLength] = useState(5);
  const [history, setHistory] = useState([]);
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const num = "0123456789";
  const symb = "!@#$%^&*?/";
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);
  function generatePassword({ uppercase, lowercase, numbers, symbols }) {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      setPassword("Select length and security");
    } else {
      let passwordString = "";
      if (uppercase) {
        passwordString += upper;
      }
      if (lowercase) {
        passwordString += lower;
      }
      if (numbers) {
        passwordString += num;
      }
      if (symbols) {
        passwordString += symb;
      }
      let passwordForState = "";
      for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * passwordString.length);
        // setPassword("");
        passwordForState += passwordString.substring(
          randomNumber,
          randomNumber + 1
        );
      }
      setPassword(passwordForState);
    }
  }
  function writeHistory() {
    setHistory([...history, password]);
  }
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);
  return (
    <div className="app">
      <Title />
      <Functional
        generatePassword={generatePassword}
        password={password}
        setLength={setLength}
        length={length}
        writeHistory={writeHistory}
      />
      <History history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
