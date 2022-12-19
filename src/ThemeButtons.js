import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContextProvider.js";
import { MyStyle} from "./consts.js"; 

export const ThemeButtons = () => {
  const [, setMyTheme] = useContext(ThemeContext);
  const [themeButton, setThemeButton] = useState(1);
  const {styles} = MyStyle(); 

  const HandleClass = (num) => {
    return `calculator-theme-btn ${
      themeButton === num ? "calculator-theme-btn-visible" : ""
    }`;
  };

  const themeButtons = [
    {
      myClass: HandleClass(1),
      id: "Theme-1",
    },
    {
      myClass: HandleClass(2),
      id: "Theme-2",
    },
    {
      myClass: HandleClass(3),
      id: "Theme-3",
    },
  ];

  const handleClickTheme = (e) => {
    e.preventDefault();
    setMyTheme(e.target.id);
    setThemeButton(parseInt((e.target.id).slice((e.target.id).length-1, (e.target.id).length)));  
  };

  return (
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
          {themeButtons.map((themeButton) => {
            return (
              <button
                key={themeButton.id}
                className={themeButton.myClass}
                id={themeButton.id}
                style={styles.keyBackgroundToggle}
                onClick={(e) => {
                  handleClickTheme(e);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
