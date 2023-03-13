import styled from "styled-components";
import { styled as MuiStyled, TextField } from "@mui/material";

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
export const FileFieldComponent = MuiStyled(TextField)`
  margin-top: 0.5rem;
  width: 100%
`;
