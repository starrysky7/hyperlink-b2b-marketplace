import { AccountCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography, Button } from "@mui/material";
import theme from "../../styles/theme";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import AccountMenu from "./accountMenu";
import TextField from "../forms/elements/text-field";
import { useState } from "react";

export default function AppBar() {
  //next router
  const router = useRouter();
  //state to manage search
  const [search, setSearch] = useState("");
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 999,
        padding: "10px 0",
        width: "100%",
        backgroundColor: "var(--paper-color)",
        borderBottom: "1px solid var(--border-color-2)",
        [theme.breakpoints.up("xs")]: { padding: "10px 20px" },
        [theme.breakpoints.up("sm")]: { padding: "10px 20px" },
        [theme.breakpoints.up("md")]: { padding: "10px 60px" },
        [theme.breakpoints.up("lg")]: { padding: "10px 200px" },
      }}
    >
      {/*
       *
       * logo
       *
       */}
      <Typography
        sx={{ fontWeight: "900", fontSize: "22px", cursor: "pointer" }}
        onClick={() => {
          router.push("/");
        }}
      >
        hyperlink
      </Typography>

      {/*
       *
       * search field
       *
       */}

      <TextField
        placeholder="Search for items"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        sx={{ width: "600px", borderColor: "var(--border-color-2)" }}
      />

      {/*
       *
       * view cart button
       *
       */}

      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          variant="text"
          size="small"
          sx={{ color: "var(--text-color-1)" }}
          onClick={() => {
            router.push("/cart");
          }}
        >
          VIEW CART
        </Button>

        {/*
         *
         * account menu
         *
         */}

        <Box
          sx={{ position: "relative" }}
          onMouseEnter={() => {
            document.getElementById("account-menu").style.display = "block";
          }}
          onMouseLeave={() => {
            document.getElementById("account-menu").style.display = "none";
          }}
        >
          <IconButton>
            <AccountCircle />
          </IconButton>
          <Box
            id="account-menu"
            sx={{ position: "absolute", right: "-40px", display: "none" }}
            onMouseEnter={() => {
              document.getElementById("account-menu").style.display = "block";
            }}
            onMouseLeave={() => {
              document.getElementById("account-menu").style.display = "none";
            }}
          >
            <AccountMenu />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
