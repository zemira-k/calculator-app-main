import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider.js";

export const buttonsArr = [
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

export const MyStyle = () => {
  const [myTheme] = useContext(ThemeContext);

  const styles = {
    toggleKeypadBackground: {
      backgroundColor: `var(--${myTheme}-toggle-keypad-background)`,
    },
    keyBackground: {
      backgroundColor: `var(--${myTheme}-key-background)`,
      boxShadow: `0px 3px var(--${myTheme}-key-shadow)`,
      color: `var(--${myTheme}-del-reset-text)`,
      fontSize: "16px",
    },
    keyBackgroundToggle: {
      backgroundColor: `var(--${myTheme}-key-background-toggle)`,
      boxShadow: `0px 3px var(--${myTheme}-key-shadow-toggle)`,
      color: `var(--${myTheme}-equal-text)`,
    },
    LightOrangeKeyBackground: {
      backgroundColor: `var(--${myTheme}-Light-orange-key-background)`,
      boxShadow: `0px 3px var(--${myTheme}-orange-key-shadow)`,
      color: `var(--${myTheme}-numbers-text)`,
    },
    mainBackground: {
      backgroundColor: `var(--${myTheme}-main-background)`,
    },
    screenBackground: {
      backgroundColor: `var(--${myTheme}-screen-background)`,
      color: `var(--${myTheme}-header-text)`,
    },
    headerText: {
      color: `var(--${myTheme}-header-text)`,
    },
  };

  return { styles };
};
