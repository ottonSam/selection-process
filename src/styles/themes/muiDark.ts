import { createTheme } from "@mui/material";
import { orange, yellow } from "@mui/material/colors";

const muiDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: yellow[400],
      dark: yellow[600],
      light: yellow[300],
    },
    secondary: {
      main: orange[400],
      dark: orange[600],
      light: orange[300],
    },
  },
});

export default muiDark;
