import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductGrid from "../../components/catalog/product-grid";
import CategoryBrowser from "../../components/catalog/category-browser";
import theme from "../../styles/theme";
import AppBar from "../../components/nav/appbar";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>{`Home -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AppBar />
      <Grid
        container
        columnSpacing={2}
        rowSpacing={0}
        sx={{
          [theme.breakpoints.up("xs")]: { padding: "0 10px 0 0" },
          [theme.breakpoints.up("sm")]: { padding: "0 20px" },
          [theme.breakpoints.up("md")]: { padding: "0 60px" },
          [theme.breakpoints.up("lg")]: { padding: "0 200px" },
        }}
      >
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={10}></Grid>
        <Grid item xs={1.4} sm={1.2} sx={{ position: "relative" }}>
          <Box sx={{ position: "fixed", top: 0 }}>
            <CategoryBrowser />
          </Box>
        </Grid>
        <Grid item xs={10.6} sm={10.8}>
          <ProductGrid />
        </Grid>
      </Grid>
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
