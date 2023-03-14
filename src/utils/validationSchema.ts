import * as yup from "yup";

const validationSchema = yup.object().shape({
  git_user: yup.string().required("É necessário informar os dados do Git."),
  name: yup
    .string()
    .required("Houve algum erro em recuperar os dados da api do Git."),
  image: yup.string().default("Imagem não informada."),
  repository: yup.object({
    label: yup
      .string()
      .required("Houve algum erro em recuperar os dados da api do Git."),
    value: yup
      .string()
      .required("Houve algum erro em recuperar os dados da api do Git."),
  }),
  email: yup.string().required("O email é necessário."),
  description: yup
    .string()
    .max(1000, "A descrição está muito longa.")
    .required("A descrição é obrigatório."),
  react: yup.boolean().required().default(false),
  node: yup.boolean().required().default(false),
  docker: yup.boolean().required().default(false),
  git: yup.boolean().required().default(false),
  insomnia: yup.boolean().required().default(false),
  curriculum: yup.mixed().required("É necessário informar seu currículo."),
  auth: yup
    .boolean()
    .required("Você precisa autorizar o uso dos dados")
    .oneOf(
      [true],
      "É preciso aceitar o uso dos dados para o envio do formulário."
    ),
});

export default validationSchema;
