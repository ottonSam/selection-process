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
import AppAppBar from "./components/AppAppBar";

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

  const goToHome = () => {
    setShowForm(false);
  };

  const goToForm = () => {
    setShowForm(true);
  };
  return (
    <ThemeProvider theme={themes[theme][0]}>
      <MuiThemeProvider theme={themes[theme][1]}>
        <GlobalStyle />
        <AppAppBar goToHome={goToHome} toggleTheme={toggleTheme} />
        {!showForm ? (
          <LandingPage goToForm={goToForm} />
        ) : (
          <FormPage goToHome={goToHome} />
        )}
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
