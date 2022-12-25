import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import SignupForm from "../../components/forms/signup-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Signup() {
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
