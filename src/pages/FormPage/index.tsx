import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormContainer, FormLabel, SubmitButton } from "./styles";

import AuthRadio from "../../components/AuthRadio";
import FileField from "../../components/FileField";
import GitData from "../../components/GitData";
import TecCheckBox from "../../components/TecCheckBox";
import TextArea from "../../components/TextArea";
import TextField from "../../components/TextField";
import validationSchema from "../../utils/validationSchema";

interface IProps {
  goToHome: () => void;
}

interface IFormInputs {
  git_user: string;
  name: string;
  image: string;
  repository: {
    label: string;
    value: string;
  };
  email: string;
  description: string;
  react: boolean;
  node: boolean;
  docker: boolean;
  git: boolean;
  insomnia: boolean;
  curriculum: File;
  auth: boolean;
}

const FormPage = ({ goToHome }: IProps) => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    fetch("http://api.webhookinbox.com/i/h2OWKJqx/in/", {
      // Enter your IP address here

      method: "POST",
      mode: "cors",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };
  return (
    <FormContainer>
      <FormProvider {...methods}>
        <form
          autoComplete="off"
          onSubmit={methods.handleSubmit(formSubmitHandler)}
        >
          <FormLabel>Formulário de submissão</FormLabel>
          <GitData />
          <TextField name="email" label="Email" />
          <TextArea />
          <TecCheckBox />
          <FileField />
          <AuthRadio />
          <SubmitButton type="submit" variant="outlined" color="secondary">
            Enviar currículo
          </SubmitButton>
        </form>
      </FormProvider>
    </FormContainer>
  );
};

export { FormPage };
