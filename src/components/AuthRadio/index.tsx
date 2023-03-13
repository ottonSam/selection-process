import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Container, ErroField } from "./styles";

const AuthRadio = () => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleAuth = (value: boolean) => {
    setValue("auth", value);
  };
  console.log();

  return (
    <Container>
      <FormLabel>Autorizo o uso dos meus dados</FormLabel>
      <RadioGroup>
        <FormControlLabel
          control={<Radio />}
          labelPlacement="end"
          label={"Sim"}
          value={true}
          onClick={() => handleAuth(true)}
        />
        <FormControlLabel
          control={<Radio />}
          labelPlacement="end"
          label={"Não"}
          value={false}
          onClick={() => handleAuth(false)}
        />
      </RadioGroup>
      <ErroField>{errors.auth?.message?.toString()}</ErroField>
    </Container>
  );
};

export default AuthRadio;
