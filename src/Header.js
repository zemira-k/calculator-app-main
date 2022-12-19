import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider.js";

export const Header = ({ children }) => {
  const [myTheme] = useContext(ThemeContext);

  const headerText = { color: `var(--${myTheme}-header-text)` };

  return (
    <div className="calculator-header" style={headerText}>
      <div>
        <p style={headerText}>calc</p>
      </div>
      {children}
    </div>
  );
};
