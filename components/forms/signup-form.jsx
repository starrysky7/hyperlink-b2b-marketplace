import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "./elements/text-field";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { useRef } from "react";
import { Formik } from "formik";
import { Grid } from "@mui/material";
import Select from "./elements/select";
import { signupFormValidationSchema } from "./signup-form-validation-schema";

export default function SignupForm() {
  //next router
  const router = useRouter();

  //auth reducer
  const [, dispatch] = useAuth();

  //signup form active step
  const [step, setStep] = useState(1);

  //sign up
  function handleSubmit(values) {
    dispatch({
      type: "createUser",
      payload: values,
    });
  }

  const formikRef = useRef();

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize
      validationSchema={signupFormValidationSchema}
      initialValues={{
        fullName: "",
        emailAddress: "",
        password: "",
        retypePassword: "",
        businessName: "",
        licenseType: "GSTIN",
        licenseNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postCode: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...rest }) => (
        <form onSubmit={handleSubmit}>
          <Button
            variant="text"
            sx={{ color: "var(--link-color)", marginBottom: "20px" }}
            onClick={() => {
              router.push("/account/login");
            }}
          >
            &lt;Go back to login
          </Button>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            sx={{
              border: "1px solid var(--border-color-2)",
              width: "500px",
              padding: "10px 20px 20px 10px",
              borderRadius: "12px",
              backgroundColor: "var(--paper-color)",
            }}
          >
            {/**
             *
             * step 1
             *
             */}
            {step === 1 ? (
              <>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h1">Step 1</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    value={rest.values.fullName}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.fullName && Boolean(rest.errors.fullName)
                    }
                    helperText={rest.touched.fullName && rest.errors.fullName}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="emailAddress"
                    name="emailAddress"
                    label="Email Address"
                    value={rest.values.emailAddress}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.emailAddress &&
                      Boolean(rest.errors.emailAddress)
                    }
                    helperText={
                      rest.touched.emailAddress && rest.errors.emailAddress
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    value={rest.values.password}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.password && Boolean(rest.errors.password)
                    }
                    helperText={rest.touched.password && rest.errors.password}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="retypePassword"
                    name="retypePassword"
                    label="Retype Password"
                    value={rest.values.retypePassword}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.retypePassword &&
                      Boolean(rest.errors.retypePassword)
                    }
                    helperText={
                      rest.touched.retypePassword && rest.errors.retypePassword
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Stack justifyContent="right" alignItems="end">
                    <Button
                      variant="contained"
                      id="submit-button"
                      onClick={() => {
                        rest.setFieldTouched("fullname");
                        rest.setFieldTouched("emailAddress");
                        rest.setFieldTouched("password");
                        rest.setFieldTouched("retypePassword");
                        rest.validateField("fullName");
                        rest.validateField("emailAddress");
                        rest.validateField("password");
                        rest.validateField("retypePassword");
                        if (
                          !rest.errors.fullName &&
                          !rest.errors.emailAddress &&
                          !rest.errors.password &&
                          !rest.errors.retypePassword
                        ) {
                          setStep(2);
                        }
                      }}
                      sx={{ width: "fit-content" }}
                    >
                      Continue
                    </Button>
                  </Stack>
                </Grid>
              </>
            ) : null}

            {/**
             *
             *
             * step 2
             *
             *
             */}
            {step === 2 ? (
              <>
                <Grid item xs={12} sm={12}>
                  <Typography variant="h1">Business Information</Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="businessName"
                    name="businessName"
                    label="Business Name"
                    value={rest.values.businessName}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.businessName &&
                      Boolean(rest.errors.businessName)
                    }
                    helperText={
                      rest.touched.businessName && rest.errors.businessName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    id="licenseType"
                    name="licenseType"
                    label="License Type"
                    value={rest.values.licenseType}
                    setFormikValue={rest.setFieldValue}
                    error={
                      rest.touched.licenseType &&
                      Boolean(rest.errors.licenseType)
                    }
                    helperText={
                      rest.touched.licesneType && rest.errors.licenseType
                    }
                    options={[
                      {
                        label: "Business PAN",
                        value: "businessPAN",
                      },
                      {
                        label: "GSTIN",
                        value: "GSTIN",
                      },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="licenseNumber"
                    name="licenseNumber"
                    label="License Number"
                    value={rest.values.licenseNumber}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.licenseNumber &&
                      Boolean(rest.errors.licenseNumber)
                    }
                    helperText={
                      rest.touched.licenseNumber && rest.errors.licenseNumber
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant="h2"
                    sx={{
                      borderBottom: "1px solid var(--border-color-2)",
                      padding: "10px 0 5px 0",
                    }}
                  >
                    Business Address
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="addressLine1"
                    name="addressLine1"
                    label="Address Line 1"
                    value={rest.values.addressLine1}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.addressLine1 &&
                      Boolean(rest.errors.addressLine1)
                    }
                    helperText={
                      rest.touched.addressLine1 && rest.errors.addressLine1
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="addressLine2"
                    name="addressLine2"
                    label="Address Line 2"
                    value={rest.values.addressLine2}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.addressLine2 &&
                      Boolean(rest.errors.addressLine2)
                    }
                    helperText={
                      rest.touched.addressLine2 && rest.errors.addressLine2
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    value={rest.values.city}
                    onChange={rest.handleChange}
                    error={rest.touched.city && Boolean(rest.errors.city)}
                    helperText={rest.touched.city && rest.errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="state"
                    value={rest.values.state}
                    onChange={rest.handleChange}
                    error={rest.touched.state && Boolean(rest.errors.state)}
                    helperText={rest.touched.state && rest.errors.state}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="postCode"
                    name="postCode"
                    label="Post Code"
                    value={rest.values.postCode}
                    onChange={rest.handleChange}
                    error={
                      rest.touched.postCode && Boolean(rest.errors.postCode)
                    }
                    helperText={rest.touched.postCode && rest.errors.postCode}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Stack direction="row" spacing={1} justifyContent="right">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setStep(1);
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      id="submit-button"
                      onClick={() => {
                        formikRef.current.submitForm();
                      }}
                    >
                      Sign up
                    </Button>
                  </Stack>
                </Grid>
              </>
            ) : null}
          </Grid>
        </form>
      )}
    </Formik>
  );
}
