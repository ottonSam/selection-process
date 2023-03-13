import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";
import { useFormContext } from "react-hook-form";

import { Container, CheckBoxContainer } from "./styles";

const TecCheckBox = () => {
  const { watch, setValue } = useFormContext();

  return (
    <Container>
      <FormLabel>Tecnologias que domino</FormLabel>
      <CheckBoxContainer>
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("react") || false}
              onChange={(e) => setValue("react", !watch("react"))}
            />
          }
          labelPlacement="top"
          label={"React"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("node") || false}
              onChange={(e) => setValue("node", !watch("node"))}
            />
          }
          labelPlacement="top"
          label={"Node"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("docker") || false}
              onChange={(e) => setValue("docker", !watch("docker"))}
            />
          }
          labelPlacement="top"
          label={"Docker"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("git") || false}
              onChange={(e) => setValue("git", !watch("git"))}
            />
          }
          labelPlacement="top"
          label={"Git"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={watch("insomnia") || false}
              onChange={(e) => setValue("insomnia", !watch("insomnia"))}
            />
          }
          labelPlacement="top"
          label={"Insomnia"}
        />
      </CheckBoxContainer>
    </Container>
  );
};

export default TecCheckBox;
