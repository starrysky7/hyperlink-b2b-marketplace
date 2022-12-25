import Head from "next/head";
import config from "../../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Categories from "../../components/admin/categories/categories";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddCategoryModal from "../../components/modals/add-category-modal";
import { useState } from "react";

export default function AdminManageCategories() {
  //state to manage create category modal
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Head>
        <title>{`Categories - Admin - ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <MyAppBar /> */}

      <AddCategoryModal open={open} setOpen={setOpen} />
      <Stack spacing={1} sx={{ width: "400px", margin: "200px 0 50px 400px" }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "fit-content" }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          New Category
        </Button>
        <Categories />
      </Stack>
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
