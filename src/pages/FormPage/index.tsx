import AuthRadio from "../../components/AuthRadio";
import FileField from "../../components/FileField";
import GitData from "../../components/GitData";
import TecCheckBox from "../../components/TecCheckBox";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import { FormContainer, FormLabel, SubmitButton } from "./styles";
interface IProps {
  goToHome: () => void;
}

const FormPage = ({ goToHome }: IProps) => {
  return (
    <FormContainer>
      <FormLabel>Formulário de submissão</FormLabel>
      <GitData />
      <TextField name="email" label="Email" />
      <TextArea />
      <TecCheckBox />
      <FileField />
      <AuthRadio />
      <SubmitButton onClick={goToHome} variant="outlined" color="secondary">
        Enviar currículo
      </SubmitButton>
    </FormContainer>
  );
};

export { FormPage };
