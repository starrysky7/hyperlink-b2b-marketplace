import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import ProductDetails from "../../components/product-details/product-details";
import ProductImageGrid from "../../components/product-details/product-image-grid";
import ProductCheckoutOptions from "../../components/product-details/product-checkout-options";
import AppBar from "../../components/nav/appbar";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box>
      <Head>
        <title>{`${id} -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AppBar />
      <Grid container columnSpacing={3} sx={{ padding: "50px 100px" }}>
        <Grid item xs={0} sm={5}>
          <ProductImageGrid />
        </Grid>
        <Grid item xs={12} sm={4.7}>
          <ProductDetails />
        </Grid>
        <Grid item xs={12} sm={2.3}>
          <ProductCheckoutOptions />
        </Grid>
      </Grid>
    </Box>
  );
}
