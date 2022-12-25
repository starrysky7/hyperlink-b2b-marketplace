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
import { loginFormValidationSchema } from "./login-form-validation-schema";

export default function LoginForm() {
  //next router
  const router = useRouter();

  //auth reducer
  const [, dispatch] = useAuth();

  //login
  function handleSubmit(values) {
    dispatch({
      type: "login",
      payload: { emailAddress: values.emailAddress, password: values.password },
    });
  }

  const formikRef = useRef();

  return (
    <Formik
      innerRef={formikRef}
      enableReinitialize
      validationSchema={loginFormValidationSchema}
      initialValues={{
        emailAddress: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, ...rest }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={2}
            sx={{
              border: "1px solid var(--border-color-2)",
              width: "400px",
              padding: "20px 40px",
              borderRadius: "12px",
              backgroundColor: "var(--paper-color)",
            }}
          >
            <Grid item xs={12} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid var(--border-color-2)",
                  padding: "5px 10px",
                  backgroundColor: "#ccc",
                }}
              >
                <Typography variant="h1" sx={{ fontWeight: 700 }}>
                  logo
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h1">Login</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="emailAddress"
                name="emailAddress"
                label="Email Address"
                value={rest.values.emailAddress}
                onChange={rest.handleChange}
                error={
                  rest.touched.emailAddress && Boolean(rest.errors.emailAddress)
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
                error={rest.touched.password && Boolean(rest.errors.password)}
                helperText={rest.touched.password && rest.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                id="submit-button"
                onClick={(e) => {
                  e.preventDefault();
                  formikRef.current.submitForm();
                }}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Stack spacing={1}>
                <Button
                  type="text"
                  sx={{
                    alignSelf: "start",
                    color: "var(--link-color)",
                    padding: 0,
                    height: "fit-content",
                  }}
                >
                  Need help?
                </Button>
                <Button
                  type="text"
                  sx={{
                    alignSelf: "start",
                    color: "var(--link-color)",
                    padding: 0,
                    height: "fit-content",
                  }}
                  onClick={() => {
                    router.push("/account/signup");
                  }}
                >
                  Request Account
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
