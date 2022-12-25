import Paper from "../paper";
import Image from "next/image";
import { Typography, Button, Grid } from "@mui/material";
import ProductCard from "./product-card";
import { useQuery } from "react-query";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import { useState } from "react";

export default function ProductGrid() {
  const [productsInCart, setProductsInCart] = useState([]);

  //get all categories query
  async function getAllProducts() {
    const res = await axios.get(
      `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/product-getAllProducts`
    );
    if (res.data.status) return res.data.data;
  }

  //run get all categories query
  const { isLoading, isError, data, error } = useQuery(["products"], () =>
    getAllProducts()
  );

  /*
   *
   *loading
   *
   */
  if (isLoading) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="rounded" height={50} width={50} />
        <Skeleton variant="rounded" height={50} width={50} />
        <Skeleton variant="rounded" height={50} width={50} />
      </Stack>
    );
  } else if (isError) {
    /*
     *
     *error
     *
     */
    return <Typography type="body1">{error}</Typography>;
  } else
  /*
   *
   *loaded
   *
   */
    return (
      <Grid
        container
        columnSpacing={1.5}
        rowSpacing={2}
        sx={{ margin: "10px 0 20px 0" }}
      >
        {(data ?? []).map((product, i) => (
          <Grid item xs={6} sm={4} md={3} lg={3} xl={3}>
            <ProductCard
              key={i}
              product={product}
              inCart={
                productsInCart.filter(
                  (productId) => productId === product?.id
                )[0]
                  ? true
                  : false
              }
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          </Grid>
        ))}
      </Grid>
    );
}
