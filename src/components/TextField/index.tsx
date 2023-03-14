import { Controller, useFormContext } from "react-hook-form";
import { TextFieldInput } from "./styles";

interface IProps {
  name: string;
  label: string;
  type?: string;
}

const TextField = ({ label, name, type }: IProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => {
        return (
          <TextFieldInput
            {...field}
            label={label}
            type={type || "text"}
            variant="outlined"
            error={!!errors[name]}
            helperText={errors[name]?.message?.toString()}
          />
        );
      }}
    />
  );
};

export default TextField;
