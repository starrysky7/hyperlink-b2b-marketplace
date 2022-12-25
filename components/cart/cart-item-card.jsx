import { React } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProductQuantitySelector from "../forms/product-quantity-selector";

export default function CartItemCard({ name, qty, msrp }) {
  return (
    <Stack
      direction="row"
      spacing={12}
      justifyContent="space-between"
      alignItems="start"
      sx={{
        borderBottom: "1px solid var(--border-color-2)",
        padding: "0 0 20px 0",
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2">${msrp}</Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="end"
      >
        <ProductQuantitySelector variant="outlined" callback={() => {}} />
        <Button variant="text" sx={{ color: "var(--error-color)" }}>
          Delete
        </Button>
      </Stack>
    </Stack>
  );
}

CartItemCard.propTypes = {
  name: PropTypes.string,
  qty: PropTypes.number,
  msrp: PropTypes.msrp,
};
