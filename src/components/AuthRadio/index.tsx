import {
  Checkbox,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

import { Container } from "./styles";

const AuthRadio = () => {
  const { watch, setValue } = useFormContext();

  return (
    <Container>
      <FormLabel>Autorizo o uso dos meus dados</FormLabel>
      <RadioGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("auth") || false}
              onClick={(e) => setValue("auth", !watch("auth"))}
            />
          }
          labelPlacement="end"
          label={"Sim"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={!watch("auth") || false}
              onClick={(e) => setValue("auth", !watch("auth"))}
            />
          }
          labelPlacement="end"
          label={"Não"}
        />
      </RadioGroup>
    </Container>
  );
};

export default AuthRadio;
