import { TextFieldInput } from "./styles";

interface IProps {
  name: string;
  label: string;
}

const TextField = ({ label, name }: IProps) => {
  return <TextFieldInput label={label} />;
};

export default TextField;
