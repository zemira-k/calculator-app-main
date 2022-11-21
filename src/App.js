import "./App.css";
import React from "react";

function App() {
  const buttonsArr = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
  ];

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator-header">
          <div>
            <p>calc</p>
          </div>
          <div className="calculator-theme">
            <div>THEME</div>
            <div className="calculator-theme-info">
              <div className="calculator-theme-num">1 2 3</div>
              <div className="calculator-theme-btns">
                <button className="calculator-theme-btn"></button>
                <button className="calculator-theme-btn"></button>
                <button className="calculator-theme-btn"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator-sum">399,981</div>
        <div className="all-buttons-container">
          <div className="small-buttons-container">
            {buttonsArr.map((btn) => {
              return (
                <button className="btn small-btn" value={btn}>
                  {btn}
                </button>
              );
            })}
          </div>
          <div className="buttom-btns">
            <button className="btn big-btn" value="RESET">
              RESET
            </button>
            <button className="btn big-btn">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
