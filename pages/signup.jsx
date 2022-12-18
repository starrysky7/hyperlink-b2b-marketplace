import Head from "next/head";
import config from "../config";
import Box from "@mui/material/Box";
import SignupForm from "../components/forms/signup-form";

export default function Signup() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "#fafbfd",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        paddingTop: "100px",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Login - {config.name}</title>
        <meta name="description" content={config.description} />
      </Head>
      <SignupForm />
    </Box>
  );
}
