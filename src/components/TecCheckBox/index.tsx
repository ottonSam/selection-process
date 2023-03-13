import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React from "react";

// import { Container } from './styles';

const TecCheckBox = () => {
  return (
    <FormGroup>
      <FormLabel>Tecnologias que domino</FormLabel>
      <FormControlLabel control={<Checkbox defaultChecked />} label="React" />
      <FormControlLabel control={<Checkbox />} label="Node" />
      <FormControlLabel control={<Checkbox />} label="Docker" />
      <FormControlLabel control={<Checkbox />} label="Git" />
      <FormControlLabel control={<Checkbox />} label="Insomnia" />
    </FormGroup>
  );
};

export default TecCheckBox;
