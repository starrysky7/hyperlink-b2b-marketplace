import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Email must be valid")
    .required("Email Address must not be empty"),
  password: Yup.string().required("Password must not be empty"),
});
