import React from "react";
import { buttonsArr, MyStyle } from "./consts.js";

export const KeypadButtons = ({ handleClickBtn }) => {
  const { styles } = MyStyle();

  return (
    <div
      className="all-buttons-container"
      style={styles.toggleKeypadBackground}
    >
      <div
        className="small-buttons-container"
        style={styles.toggleKeypadBackground}
      >
        {buttonsArr.map((btn, i) => {
          return (
            <button
              key={i}
              className="btn"
              onClick={(e) => {
                handleClickBtn(e);
              }}
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
          onClick={(e) => {
            handleClickBtn(e);
          }}
          value="RESET"
          style={styles.keyBackground}
        >
          RESET
        </button>
        <button
          className="btn big-btn"
          onClick={(e) => {
            handleClickBtn(e);
          }}
          value="="
          style={styles.keyBackgroundToggle}
        >
          =
        </button>
      </div>
    </div>
  );
};
