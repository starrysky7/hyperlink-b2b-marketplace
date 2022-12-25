import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import CartItems from "../../components/cart/cart-items";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Page from "../../components/page";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import CartSummary from "../../components/cart/cart-summary";

export default function Cart() {
  //next router
  const router = useRouter();

  return (
    <Box sx={{ marginTop: "20px", padding: "0 250px 0 250px" }}>
      <Head>
        <title>{`Cart -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Button
        variant="text"
        sx={{ color: "var(--link-color)" }}
        onClick={() => {
          router.push("/browse");
        }}
      >
        &lt; Back to shopping
      </Button>
      <Box>
        <Grid container columnSpacing={6}>
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h1"
              sx={{
                borderBottom: "1px solid var(--border-color-2)",
                padding: "10px 0 10px 0",
              }}
            >
              Review Your Order
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} sx={{ marginTop: "20px" }}>
            <CartItems />
          </Grid>
          <Grid item xs={12} sm={5}>
            <CartSummary />
          </Grid>
        </Grid>
      </Box>
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
