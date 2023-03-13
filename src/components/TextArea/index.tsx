import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { TextAreaInput } from "./styles";

const TextArea = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name="description"
      control={control}
      defaultValue=""
      render={({ field }) => {
        return (
          <TextAreaInput
            {...field}
            label="Descrição profissional"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description?.message?.toString()}
          />
        );
      }}
    />
  );
};

export default TextArea;
