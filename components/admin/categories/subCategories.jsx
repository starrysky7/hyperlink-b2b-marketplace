import React, { useState } from "react";
import CategoryItem from "./category-item";
import { AddCircle } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";
import { Skeleton, Typography } from "@mui/material";
import axios from "axios";

export default function SubCategories({ categoryId }) {
  //get all subcategories query
  async function getCategories() {
    const res = await axios.get(
      `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-getCategories?parent=${categoryId}`
    );

    if (res.data.status) {
      return res.data.data;
    }
  }

  //run get all sub categories query
  const { isLoading, isError, data, error } = useQuery(
    [`categories-${categoryId}`],
    () => getCategories()
  );

  /*
   *
   * loading
   *
   */
  if (isLoading) {
    <Stack spacing={1}>
      <Skeleton variant="rounded" height={50} width={50} />
      <Skeleton variant="rounded" height={50} width={50} />
      <Skeleton variant="rounded" height={50} width={50} />
    </Stack>;
  } else if (isError) {
    /*
     *
     * error
     *
     */
    return <Typography type="body1">An unexpected error occured</Typography>;
  } else
  /*
   *
   * loaded
   *
   */
    return (
      <Stack spacing={1}>
        {data?.map((category) => {
          return (
            <CategoryItem
              key={category?.id}
              id={category?.id}
              name={category?.name}
              parent={category?.parent}
            />
          );
        })}
      </Stack>
    );
}
