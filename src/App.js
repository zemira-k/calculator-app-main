import "./App.css";
import React from "react";
import { ThemeButtons } from "./ThemeButtons.js";
import { ThemeContextProvider } from "./ThemeContextProvider.js";
import { Main } from "./Main.js";
import {Header} from "./Header.js";
import { Calculator } from "./Calculator.js";

function App() {  

  return (
    <ThemeContextProvider>     
      <Main>      
        <Header>       
          <ThemeButtons/>       
        </Header>
        <Calculator />       
      </Main>
    </ThemeContextProvider>
  );
}

export default App;
