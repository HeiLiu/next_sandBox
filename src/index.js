import React from "react";
import ReactDOM from "react-dom";

import CurrencyConvert from "./currencyConvert";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Change Some Curreny</h1>
      <CurrencyConvert />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
