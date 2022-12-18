import Head from "next/head";
import config from "../config";
import Box from "@mui/material/Box";
import LoginForm from "../components/forms/login-form";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        marginTop: "100px",
      }}
    >
      <Head>
        <title>Login - {config.name}</title>
        <meta name="description" content={config.description} />
      </Head>
      <Stack spacing={2} alignItems="center">
        <LoginForm />

        <Typography>-- OR --</Typography>
        <Button variant="outlined" color="secondary">
          Create a new account
        </Button>
      </Stack>
    </Box>
  );
}
