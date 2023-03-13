import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

// import { Container } from './styles';

const AuthRadio = () => {
  return (
    <FormControl>
      <FormLabel>Autorizo o uso dos meus dados</FormLabel>
      <RadioGroup>
        <FormControlLabel value="female" control={<Radio />} label="Sim" />
        <FormControlLabel value="male" control={<Radio />} label="Não" />
      </RadioGroup>
    </FormControl>
  );
};

export default AuthRadio;
