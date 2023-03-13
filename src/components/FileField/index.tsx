import { FormLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Container, FileFieldComponent } from "./styles";

const FileField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Container>
      <FormLabel>Currículo</FormLabel>
      <Controller
        name="curriculum"
        control={control}
        defaultValue=""
        render={({ field }) => {
          return (
            <FileFieldComponent
              {...field}
              type="file"
              variant="outlined"
              error={!!errors.curriculum}
              helperText={errors.curriculum?.message?.toString()}
            />
          );
        }}
      />
    </Container>
  );
};

export default FileField;
