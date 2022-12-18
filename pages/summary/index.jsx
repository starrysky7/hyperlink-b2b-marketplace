import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FilterOptions from "../../components/catalog/filter-options";
import theme from "../../styles/theme";
import ProductGrid from "../../components/order-summary/product-grid";

export default function Summary() {
  return (
    <Box>
      <Head>
        <title>{`Summary -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <MyAppBar /> */}
      <FilterOptions />
      <Grid
        container
        columnSpacing={0}
        rowSpacing={0.5}
        sx={{
          [theme.breakpoints.up("xs")]: { padding: "10px 0" },
          [theme.breakpoints.up("sm")]: { padding: "10px 0" },
          [theme.breakpoints.up("md")]: { padding: "10px 60px" },
          [theme.breakpoints.up("lg")]: { padding: "10px 200px" },
        }}
      >
        <Grid item xs={0} sm={2.3}></Grid>
        <Grid item xs={12} sm={9.7}></Grid>
        <Grid item xs={10} sm={8}>
          <ProductGrid />
        </Grid>
        <Grid item xs={2} sm={4}></Grid>
      </Grid>
    </Box>
  );
}
