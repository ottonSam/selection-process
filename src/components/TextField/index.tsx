import { Controller, useFormContext } from "react-hook-form";
import { TextFieldInput } from "./styles";

interface IProps {
  name: string;
  label: string;
}

const TextField = ({ label, name }: IProps) => {
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
