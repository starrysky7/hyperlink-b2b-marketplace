import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Box from "@mui/material/Box";

export default function MyAppBar() {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          position: "relative",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#000",
          padding: "0 100px 0 100px",
          height: "36px",
        }}
      >
        <Stack direction="row" spacing={4}>
          <Link href="/">HOME</Link>
          <Link href="/">DASHBOARD</Link>
          <Link href="/">ACTIVE POs</Link>
        </Stack>
        <Link href="/account">MY ACCOUNT</Link>
      </Stack>
    </Box>
  );
}
