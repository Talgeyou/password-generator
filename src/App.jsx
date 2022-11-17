import React, { useState, useEffect, useCallback } from "react";
import Title from "./components/Title";
import Functional from "./components/Functional/Functional";
import History from "./components/History/History";
import { generatePassword } from "./helpers";
import { DEFAULT_LENGTH } from "./constants";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(DEFAULT_LENGTH);
  const [history, setHistory] = useState([]);

  const changePassword = useCallback(
    ({ uppercase, lowercase, numbers, symbols }) => {
      setPassword(
        generatePassword(length, { uppercase, lowercase, numbers, symbols })
      );
    },
    [length]
  );

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")) || []);
  }, []);

  const writeHistory = useCallback(() => {
    setHistory((prev) => [...prev, password]);
  }, [password]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div className="app">
      <Title />
      <Functional
        changePassword={changePassword}
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
