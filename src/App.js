import "./App.css";
import React from "react";

function App() {
  const [myTheme, setMyTheme] = React.useState("Theme-1");
  const [themeButton, setThemeButton] = React.useState(1);
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

  const themes = {
    mainBackground: `var(--${myTheme}-main-background)`,
    toggleKeypadBackground: `var(--${myTheme}-toggle-keypad-background)`,
    screenBackground: `var(--${myTheme}-screen-background)`,
    keyBackground: `var(--${myTheme}-key-background)`,
    keyShadow: `var(--${myTheme}-key-shadow)`,
    keyBackgroundToggle: `var(--${myTheme}-key-background-toggle)`,
    keyShadowToggle: `var(--${myTheme}-key-shadow-toggle)`,
    LightOrangeKeyBackground: `var(--${myTheme}-Light-orange-key-background)`,
    orangeKeyShadow: `var(--${myTheme}-orange-key-shadow)`,
    headerText: `var(--${myTheme}-header-text)`,
    numbersText: `var(--${myTheme}-numbers-text)`,
    delResetText: `var(--${myTheme}-del-reset-text)`,
    equalText: `var(--${myTheme}-equal-text)`,
  };

  const styles = {
    mainBackground: {
      backgroundColor: themes.mainBackground,
    },
    toggleKeypadBackground: {
      backgroundColor: themes.toggleKeypadBackground,
    },
    screenBackground: {
      backgroundColor: themes.screenBackground,
      color: themes.headerText,
    },
    keyBackground: {
      backgroundColor: themes.keyBackground,
      boxShadow: `0px 3px ${themes.keyShadow}`,
      color: themes.delResetText,
      fontSize: "16px",
    },
    keyBackgroundToggle: {
      backgroundColor: themes.keyBackgroundToggle,
      boxShadow: `0px 3px ${themes.keyShadowToggle}`,
      color: themes.equalText,
    },
    LightOrangeKeyBackground: {
      backgroundColor: themes.LightOrangeKeyBackground,
      boxShadow: `0px 3px ${themes.orangeKeyShadow}`,
      color: themes.numbersText,
    },
    headerText: {
      color: themes.headerText,
    },
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.id === "theme-switch1") {
      setMyTheme("Theme-1");
      setThemeButton(1);
    }
    if (e.target.id === "theme-switch2") {
      setMyTheme("Theme-2");
      setThemeButton(2);
    }
    if (e.target.id === "theme-switch3") {
      setMyTheme("Theme-3");
      setThemeButton(3);
    }
  };

  return (
    <div className="App" style={styles.mainBackground}>
      <div className="calculator">
        <div className="calculator-header" style={styles.headerText}>
          <div>
            <p style={styles.headerText}>calc</p>
          </div>
          <div className="calculator-theme">
            <div style={styles.headerText}>THEME</div>
            <div className="calculator-theme-info">
              <div className="calculator-theme-num" style={styles.headerText}>
                1 2 3
              </div>
              <div
                className="calculator-theme-btns"
                style={styles.toggleKeypadBackground}
              >
                <button
                  className={`calculator-theme-btn ${
                    themeButton === 1 ? "calculator-theme-btn-visible" : ""
                  }`}
                  id="theme-switch1"
                  style={styles.keyBackgroundToggle}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                ></button>
                <button
                  className={`calculator-theme-btn ${
                    themeButton === 2 ? "calculator-theme-btn-visible" : ""
                  }`}
                  id="theme-switch2"
                  style={styles.keyBackgroundToggle}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                ></button>
                <button
                  className={`calculator-theme-btn ${
                    themeButton === 3 ? "calculator-theme-btn-visible" : ""
                  }`}
                  id="theme-switch3"
                  style={styles.keyBackgroundToggle}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator-sum" style={styles.screenBackground}>
          399,981
        </div>
        <div
          className="all-buttons-container"
          style={styles.toggleKeypadBackground}
        >
          <div
            className="small-buttons-container"
            style={styles.toggleKeypadBackground}
          >
            {buttonsArr.map((btn) => {
              return (
                <button
                  className="btn"
                  value={btn}
                  style={
                    btn === "DEL"
                      ? styles.keyBackground
                      : styles.LightOrangeKeyBackground
                  }
                >
                  {btn}
                </button>
              );
            })}
          </div>
          <div className="buttom-btns">
            <button
              className="btn big-btn"
              value="RESET"
              style={styles.keyBackground}
            >
              RESET
            </button>
            <button className="btn big-btn" style={styles.keyBackgroundToggle}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
