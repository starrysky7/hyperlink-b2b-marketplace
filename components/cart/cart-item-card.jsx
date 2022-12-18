import { React } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CartItemCard({ name, qty, msrp }) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1} justifyContent="top">
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h2">{msrp}</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Qty: {qty}</Typography>
        <Button variant="text">Delete</Button>
      </Stack>
    </Stack>
  );
}

CartItemCard.propTypes = {
  name: PropTypes.string,
  qty: PropTypes.number,
  msrp: PropTypes.msrp,
};
