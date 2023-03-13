import * as yup from "yup";

const validationSchema = yup.object().shape({
  git_user: yup.string().min(3).required(),
  name: yup.string().required(),
  image: yup.string(),
  repository: yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
  }),
  email: yup.string().required(),
  description: yup.string().min(50).max(1000).required(),
  react: yup.boolean().required().default(false),
  node: yup.boolean().required().default(false),
  docker: yup.boolean().required().default(false),
  git: yup.boolean().required().default(false),
  insomnia: yup.boolean().required().default(false),
  curriculum: yup.mixed().required(),
  auth: yup.boolean().required(),
});

export default validationSchema;
