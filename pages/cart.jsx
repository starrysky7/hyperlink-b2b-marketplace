import Head from "next/head";
import config from "../config";
import Box from "@mui/material/Box";
import Nav from "../components/nav/app-bar";
import CartItems from "../components/cart/cart-items";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Page from "../components/page";

export default function Cart() {
  return (
    <Box>
      <Head>
        <title>{`Cart -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Nav />
      <Departments />

      <Page>
        <Grid container columnSpacing={6}>
          <Grid item xs={12} sm={9.7}>
            <CartItems />
          </Grid>
          <Grid item xs={12} sm={2.3}>
            <Button variant="contained">Proceed to buy</Button>
          </Grid>
        </Grid>
      </Page>
    </Box>
  );
}
