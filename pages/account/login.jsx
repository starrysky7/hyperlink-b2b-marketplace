import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import LoginForm from "../../components/forms/login-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Login() {
  //next router
  const router = useRouter();

  //check auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("token") ? true : false);
  }, []);
  if (isAuthenticated) {
    router.push("/");
    return <>loading..</>;
  } else
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Head>
          <title>Login - {config.name}</title>
          <meta name="description" content={config.description} />
        </Head>
        <Box marginTop="100px">
          <LoginForm />
        </Box>
      </Box>
    );
}
