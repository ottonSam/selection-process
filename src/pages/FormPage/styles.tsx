import styled from "styled-components";
import { Button, styled as MuiStyled } from "@mui/material";

export const FormContainer = styled.div`
  margin: auto;
  padding: 5px;
  margin-top: 2rem;
  max-width: 720px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.h2`
  font-size: 2rem;
  align-self: center;
  margin-bottom: 1rem;
`;

export const SubmitButton = MuiStyled(Button)`
display: flex;  
margin: auto;
font-size: 1rem;
margin-top: 2rem;
`;
