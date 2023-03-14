import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 44,
  [theme.breakpoints.up("sm")]: {
    height: 50,
  },
}));

export const Logo = styled(Typography)`
  font-family: "Monoton", sans-serif;
  font-size: 30px;
`;
