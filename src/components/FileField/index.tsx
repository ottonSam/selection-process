import { FormLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Container, FileFieldComponent } from "./styles";

const FileField = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFile = (e: any) => {
    if (e.target.files[0]["type"] === "application/pdf") {
      setValue("curriculum", e.target.value);
    } else {
      e.target.value = null;
      setValue("curriculum", null);
    }
  };

  return (
    <Container>
      <FormLabel>Currículo</FormLabel>
      <Controller
        name="curriculum"
        control={control}
        render={({ field }) => {
          return (
            <FileFieldComponent
              id="fileInput"
              type="file"
              variant="outlined"
              error={!!errors.curriculum}
              helperText={errors.curriculum?.message?.toString()}
              onChange={(e) => handleFile(e)}
            />
          );
        }}
      />
    </Container>
  );
};

export default FileField;
