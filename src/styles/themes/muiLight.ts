import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

const muiLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: blue[600],
      dark: blue[800],
      light: blue[400],
    },
    secondary: {
      main: purple[600],
      dark: purple[800],
      light: purple[400],
    },
  },
});

export default muiLight;
