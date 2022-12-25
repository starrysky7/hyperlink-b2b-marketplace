import * as Yup from "yup";

export const signupFormValidationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .email("Email must be valid")
    .required("Email Address must not be empty"),
  fullName: Yup.string().required("Full name is required"),
  password: Yup.string().required("Password must not be empty"),
  retypePassword: Yup.string().required("Re-Type password must not be empty"),
  businessName: Yup.string().required("Business name must not be empty"),
  licenseType: Yup.string().required("License Type must not be empty"),
  licenseNumber: Yup.string().required("License Number must not be empty"),
  addressLine1: Yup.string().required("Address Line 1 must not be empty"),
  city: Yup.string().required("City must not be empty"),
  state: Yup.string().required("State must not be empty"),
  postCode: Yup.string().required("Post Code password must not be empty"),
});
