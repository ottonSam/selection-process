import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "./AppBar";
import { Logo, Toolbar } from "./styles";

interface IProps {
  goToHome: () => void;
  toggleTheme: () => void;
}

function AppAppBar({ goToHome, toggleTheme }: IProps) {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#121212" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            onClick={goToHome}
          >
            <Logo color="primary">techV</Logo>
          </Link>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button variant="contained" onClick={toggleTheme} size="small">
              Mudar o tema
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
