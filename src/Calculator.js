import React, { useState, useCallback, useEffect } from "react";
import { KeypadButtons } from "./KeypadButtons.js";
import { Screen } from "./Screen.js";

export const Calculator = () => {
  const [screenText, setScreenText] = useState("0");
  const [prev, setPrev] = useState("");
  const [operation, setOperation] = useState("l");
  const [flag, setFlag] = useState("up");

  const joinStr = (str, num) => {
    return str.length < 7
      ? [str.slice(0, num), ",", str.slice(num)].join("")
      : str.length < 10
      ? [
          str.slice(0, num),
          ",",
          str.slice(num, num + 3),
          ",",
          str.slice(num + 3),
        ].join("")
      : [
          str.slice(0, num),
          ",",
          str.slice(num, num + 3),
          ",",
          str.slice(num + 3, num + 6),
          ",",
          str.slice(num + 6),
        ].join("");
  };

  const resetScreen = () => {
    setPrev("");
    setOperation("l");
    setScreenText("0");
    setFlag("down");
  };

  const leftString = (str) => {
    return str.split(".")[0];
  };

  const rightString = (str) => {
    return str.split(".")[1];
  };

  const action = useCallback(
    (myKey) => {
      const formatText = (str) => {
        let myStr = str.replaceAll(",", "");
        return joinStr(myStr, myStr.length % 3 || 3);
      };

      const updateText = (num) => {
        setScreenText(
          num.length > 15
            ? "error"
            : leftString(num).length > 3
            ? num.includes(".")
              ? [formatText(leftString(num)), ".", rightString(num)].join("")
              : formatText(num)
            : num,
        );
      };

      const equal = () => {
        const prevNum = (num) => {
          return parseFloat(num.replaceAll(",", ""));
        };

        const currentNum = (num) => {
          return parseFloat(num.replaceAll(",", ""));
        };

        const setMyStates = () => {
          setOperation("=");
          setFlag("up");
          setPrev("");
        };

        let myNum;
        switch (operation) {
          case "+":
            myNum = (
              parseFloat(prevNum(prev)) + parseFloat(currentNum(screenText))
            ).toString();
            updateText(myNum);
            setMyStates();
            break;
          case "-":
            myNum = (prevNum(prev) - currentNum(screenText)).toString();
            updateText(myNum);
            setMyStates();
            break;
          case "x":
            myNum = (prevNum(prev) * currentNum(screenText)).toString();
            updateText(myNum);
            setMyStates();
            break;
          default:
            myNum = (prevNum(prev) / currentNum(screenText)).toString();
            updateText(myNum);
            setMyStates();
            break;
        }
      };

      const deleteFromScreen = () => {
        setScreenText(
          screenText.length > 5
            ? formatText(screenText.slice(0, screenText.length - 1))
            : screenText.length > 1
            ? screenText.slice(0, screenText.length - 1).replace(",", "")
            : "0",
        );
      };

      const setMyStates = () => {
        setPrev(prev + screenText);
        setFlag("up");
      };

      switch (myKey) {
        case "DEL":
          deleteFromScreen();
          break;
        case "RESET":
          resetScreen();
          break;
        case "+":
          setOperation("+");
          setMyStates();
          break;
        case "-":
          setOperation("-");
          setMyStates();
          break;
        case "x":
          setOperation("x");
          setMyStates();
          break;
        case "/":
          setOperation("/");
          setMyStates();
          break;
        case "=":
          equal();
          break;
        case ".":
          if (!screenText.includes(".")) {
            setScreenText(screenText + myKey);
          }
          break;
        default:
          // eslint-disable-next-line eqeqeq
          (screenText == 0 && !screenText.includes(".")) ||
          (operation !== "l" && flag === "up")
            ? setScreenText(myKey)
            : leftString(screenText).length < 3 ||
              (leftString(screenText).length === 3 && screenText.includes("."))
            ? setScreenText(
                screenText.includes(".")
                  ? [
                      leftString(screenText),
                      ".",
                      rightString(screenText) + myKey,
                    ].join("")
                  : screenText + myKey,
              )
            : leftString(screenText).length < 15
            ? setScreenText(
                screenText.includes(".")
                  ? [
                      formatText(leftString(screenText)),
                      ".",
                      rightString(screenText) + myKey,
                    ].join("")
                  : formatText(screenText + myKey),
              )
            : console.log("too big");
          setFlag("down");
          break;
      }
    },
    [flag, operation, prev, screenText],
  );

  const handleClickBtn = (e) => {
    e.preventDefault();
    action(e.target.value);
  };

  useEffect(() => {
    const checkKey = (e) => {
        e.preventDefault();
      if (
        (e.key >= 0 && e.key <= 9) ||
        e.key === "+" ||
        e.key === "-" ||       
        e.key === "/" ||
        e.key === "."
      ) {
        action(e.key);
      } else if (e.key === "Enter") {
        action("=");
      } else if (e.key === "Escape") {
        action("RESET");
      } else if (e.key === "Backspace") {
        action("DEL");
      } else if (e.key === "*") {
        action("x"); }
    };
    document.addEventListener("keydown", checkKey);
    return () => document.removeEventListener("keydown", checkKey);
  }, [action]);

  return (
    <div>
      <Screen screenText={screenText} />
      <KeypadButtons handleClickBtn={handleClickBtn} action={action} />
    </div>
  );
};
