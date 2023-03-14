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
import { Divider } from "@mui/material";
import { apiPost } from "../../services/apiPost";

interface IProps {
  goToThanks: () => void;
}

interface IFormInputs {
  git_user: string;
  name: string;
  image?: string;
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

const FormPage = ({ goToThanks }: IProps) => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    apiPost(data);
    goToThanks();
  };
  return (
    <FormContainer>
      <FormLabel>Trabalhe conosco</FormLabel>
      <Divider />
      <FormProvider {...methods}>
        <form
          autoComplete="off"
          onSubmit={methods.handleSubmit(formSubmitHandler)}
        >
          <GitData />
          <TextField name="email" label="Email" type="email" />
          <TextArea />
          <TecCheckBox />
          <FileField />
          <AuthRadio />
          <SubmitButton type="submit" variant="outlined" color="primary">
            Enviar currículo
          </SubmitButton>
        </form>
      </FormProvider>
    </FormContainer>
  );
};

export { FormPage };
