import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider.js";

export const Main = ({ children }) => {
  const [myTheme] = useContext(ThemeContext); 

  return (
    <div
      className="App"
      style={{ backgroundColor: `var(--${myTheme}-main-background)`, }}
    >
      <div className="calculator">{children}</div>
    </div>
  );
};
