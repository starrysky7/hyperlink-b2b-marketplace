import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "./forms/elements/text-field";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Page({ children }) {
  return (
    <Box
      sx={{
        padding: "50px 100px",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
}

Page.propTypes = {
  children: PropTypes.children,
};
