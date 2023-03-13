import styled from "styled-components";
import { Button, styled as MuiStyled } from "@mui/material";

export const FormContainer = styled.div`
  margin: auto;
  margin-top: 2rem;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLabel = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SubmitButton = MuiStyled(Button)`
  margin-top: 2rem
`;
