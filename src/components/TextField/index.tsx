import { TextFieldInput } from "./styles";

interface IProps {
  name: string;
  label: string;
}

const TextFieldComponent = ({ label, name }: IProps) => {
  return <TextFieldInput label={label} />;
};

export default TextFieldComponent;
