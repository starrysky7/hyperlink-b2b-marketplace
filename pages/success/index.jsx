import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Check } from "@mui/icons-material";
import AppBar from "../../components/nav/appbar";
import Stack from "@mui/material/Stack";
import Page from "../../components/page";

export default function OrderSuccess() {
  //next router
  const router = useRouter();

  return (
    <Box>
      <Head>
        <title>{`Cart -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AppBar />
      <Page>
        <Stack
          spacing={1}
          justifyContent="center"
          alignItems="center"
          sx={{ height: "400px" }}
        >
          <Check sx={{ fontSize: "40px", color: "var(--color-success)" }} />
          <Typography variant="h1">Order placed successfully</Typography>

          <Stack direction="row" spacing={1}>
            <Typography variant="body2" sx={{ color: "var(--link-color)" }}>
              Continue Shopping &gt;
            </Typography>
            <Typography variant="body2" sx={{ color: "var(--link-color)" }}>
              Track Order &gt;
            </Typography>
          </Stack>
        </Stack>
      </Page>
    </Box>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}
