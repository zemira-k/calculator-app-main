import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({children}) => {
return(
    <ThemeContext.Provider value={useState("Theme-1")}>
        {children}
    </ThemeContext.Provider>
    )
}