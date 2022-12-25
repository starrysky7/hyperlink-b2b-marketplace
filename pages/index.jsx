import Head from "next/head";
import config from "../config";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import theme from "../styles/theme";
import AppBar from "../components/nav/appbar";
import CategoryCard from "../components/home/category-card";
import TextField from "../components/forms/elements/text-field";
import AddBillingAddressModal from "../components/modals/add-billing-address-modal";
import { useState } from "react";
import AddShippingAddressModal from "../components/modals/add-shipping-address-modal";
import AddPaymentMethodModal from "../components/modals/add-payment-method-modal";
import AddUserModal from "../components/modals/add-user-form";
import AddProductModal from "../components/modals/add-product-modal";
import AddCategoryModal from "../components/modals/add-category-modal";

export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Head>
        <title>{`Home -  ${config.name}`}</title>
        <meta name="description" content={config.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <AppBar />

      {/* <AddBillingAddressModal open={open} setOpen={setOpen} /> */}
      {/* <AddShippingAddressModal open={open} setOpen={setOpen} /> */}
      {/* <AddPaymentMethodModal open={open} setOpen={setOpen} /> */}
      {/* <AddUserModal open={open} setOpen={setOpen} /> */}
      {/* <AddProductModal open={open} setOpen={setOpen} /> */}
      <AddCategoryModal open={open} setOpen={setOpen} />
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
