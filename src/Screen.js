import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider.js";

export const Screen = ({ screenText }) => {
  const [myTheme] = useContext(ThemeContext);

  const screenBackground = {
    backgroundColor: `var(--${myTheme}-screen-background)`,
    color: `var(--${myTheme}-header-text)`,
  };

  return (
    <div className="calculator-sum" style={screenBackground}>
      {screenText}
    </div>
  );
};
