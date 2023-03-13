import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { Theme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import usePersistedState from "./utils/usePersistedState";

import muiLight from "./styles/themes/muiLight";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";

import { FormPage } from "./pages/FormPage";
import { LandingPage } from "./pages/LandingPage";
import muiDark from "./styles/themes/muiDark";

const themes: [DefaultTheme, Theme][] = [
  [light, muiLight],
  [dark, muiDark],
];

function App() {
  const [theme, setTheme] = usePersistedState<number>("theme", 0);
  const [showForm, setShowForm] = useState(true);

  const toggleTheme = () => {
    setTheme(theme === 0 ? 1 : 0);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <ThemeProvider theme={themes[theme][0]}>
      <MuiThemeProvider theme={themes[theme][1]}>
        <GlobalStyle />
        {!showForm ? (
          <LandingPage goToForm={handleShowForm} />
        ) : (
          <FormPage goToHome={handleShowForm} />
        )}
        <button onClick={toggleTheme}>Change theme</button>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
