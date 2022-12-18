import Head from "next/head";
import config from "../config";
import Box from "@mui/material/Box";
import Departments from "../components/nav/departments-bar";
import MyAppBar from "../components/nav/app-bar";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>{`Home -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MyAppBar />
      <Departments />
    </Box>
  );
}
