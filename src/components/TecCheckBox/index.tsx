import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";
import React from "react";

import { Container, CheckBoxContainer } from "./styles";

const TecCheckBox = () => {
  return (
    <Container>
      <FormLabel>Tecnologias que domino</FormLabel>
      <CheckBoxContainer>
        <FormControlLabel control={<Checkbox defaultChecked />} label="React" />
        <FormControlLabel control={<Checkbox />} label="Node" />
        <FormControlLabel control={<Checkbox />} label="Docker" />
        <FormControlLabel control={<Checkbox />} label="Git" />
        <FormControlLabel control={<Checkbox />} label="Insomnia" />
      </CheckBoxContainer>
    </Container>
  );
};

export default TecCheckBox;
