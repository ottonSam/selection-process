import { styled } from "@mui/material/styles";
import MuiToolbar from "@mui/material/Toolbar";

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 44,
  [theme.breakpoints.up("sm")]: {
    height: 50,
  },
}));
