import GitData from "../../components/GitData";
import { FormContainer, FormLabel, SubmitButton } from "./styles";
interface IProps {
  goToHome: () => void;
}

const FormPage = ({ goToHome }: IProps) => {
  return (
    <FormContainer>
      <FormLabel>Formulário de submissão</FormLabel>
      <GitData />
      <SubmitButton onClick={goToHome} variant="outlined" color="secondary">
        Voltar para a home
      </SubmitButton>
    </FormContainer>
  );
};

export { FormPage };
