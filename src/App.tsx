import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";

import { FormPage } from "./pages/FormPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const [showForm, setShowForm] = useState(false);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {!showForm ? (
        <LandingPage goToForm={handleShowForm} />
      ) : (
        <FormPage goToHome={handleShowForm} />
      )}
      <button onClick={toggleTheme}>Change theme</button>
    </ThemeProvider>
  );
}

export default App;
