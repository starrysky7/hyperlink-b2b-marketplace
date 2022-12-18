import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import LoginForm from "../components/LoginForm";
import "../styles/variables.css";
import "../styles/globals.css";
import "../styles/fontface.css";

export default {
  title: "Login Form",
  component: LoginForm,
};

export function Primary() {
  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  );
}
