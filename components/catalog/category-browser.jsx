import theme from "../../styles/theme";
import Stack from "@mui/material/Stack";
import { Fastfood } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Skeleton } from "@mui/material";
import axios from "axios";
import CategoryLink from "./category-link";
import Button from "@mui/material/Button";

export default function CategoryBrowser() {
  //next router
  const router = useRouter();
  //get selected category id from url params
  const { c } = router.query;

  //get all categories query
  async function getAllCategories() {
    const res = await axios.get(
      `http://127.0.0.1:5001/hyperlink-b2b-ecommerce/us-central1/category-getCategories?parent=${
        c ?? ""
      }`
    );
    if (res.data.status) return res.data.data;
  }

  //run get all categories query
  const { isLoading, isError, data, error } = useQuery(
    ["categories", c ?? ""],
    () => getAllCategories({ selectedCategory: c })
  );

  return (
    <Stack
      className="hide-scroll"
      sx={{
        padding: "100px 0 100px 0",
        height: "700px",
        overflowX: "scroll",
        [theme.breakpoints.up("xs")]: {
          width: "60px",
        },
        [theme.breakpoints.up("sm")]: {
          width: "90px",
        },
      }}
    >
      <Stack spacing={1.2}>
        {(() => {
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
            return (
              <Typography type="body1">An unexpected error occured</Typography>
            );
          } else {
            /*
             *
             *loaded
             *
             */
            return (
              <Stack>
                {c ? (
                  <Button
                    variant="text"
                    onClick={() => {
                      router.push("/browse");
                    }}
                  >
                    &lt; Back
                  </Button>
                ) : null}
                <Stack spacing={1}>
                  {data?.map((category) => {
                    return (
                      <CategoryLink
                        key={category?.id}
                        id={category?.id}
                        name={category?.name}
                      ></CategoryLink>
                    );
                  })}
                </Stack>
              </Stack>
            );
          }

          //do not remove
        })()}
      </Stack>
    </Stack>
  );
}
