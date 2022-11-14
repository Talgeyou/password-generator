import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Functional from "./components/Functional/Functional";
import History from "./components/History/History";
function App() {
  //Сам пароль
  const [password, setPassword] = useState("Select length and security");
  //Длина пароля(по умолчанию 5)
  const [length, setLength] = useState(5);
  //Массив истории
  const [history, setHistory] = useState([]);
  //Строки символов для генерации пароля
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const num = "0123456789";
  const symb = "!@#$%^&*?/";

  //Функция генерации пароля
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
        passwordForState += passwordString.substring(
          randomNumber,
          randomNumber + 1
        );
      }
      setPassword(passwordForState);
    }
  }

  //При монтировании App данные из локального хранилища записываются в массив истории
  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  //Функция добавления нового пароля в историю
  function writeHistory() {
    setHistory([...history, password]);
  }

  //При обновлении истории запись в локальное хранилище
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
