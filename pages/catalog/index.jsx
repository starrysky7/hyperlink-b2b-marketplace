import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductGrid from "../../components/catalog/product-grid";
import FilterOptions from "../../components/catalog/filter-options";
import CategoryBrowser from "../../components/catalog/category-browser";
import MyAppBar from "../../components/nav/app-bar";
import POSummary from "../../components/catalog/po-summary";
import Stack from "@mui/material/Stack";
import theme from "../../styles/theme";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>{`Home -  ${config.name}`}</title>
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
          [theme.breakpoints.up("lg")]: { padding: "10px 160px" },
        }}
      >
        <Grid item xs={0} sm={2.3}></Grid>
        <Grid item xs={12} sm={9.7}></Grid>
        <Grid item xs={2} sm={2.3}>
          <CategoryBrowser />
        </Grid>
        <Grid item xs={10} sm={9.7}>
          <ProductGrid />
        </Grid>
      </Grid>
    </Box>
  );
}
