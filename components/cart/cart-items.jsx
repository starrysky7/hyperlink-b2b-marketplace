import { React } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import CartItemCard from "./cart-item-card";

export default function CartItems() {
  const cartItems = [
    {
      id: 1,
      name: "Microsoft Surface Studio 14.4 inches Touchscreen Intel ® Core i7 Laptop (32GB Memory, Windows 11 Home, 2TB SSD - Platinum, 2.664Kg)ps",
      qty: 1,
      msrp: 110000,
    },
    {
      id: 2,
      name: "Microsoft FHD-00020 Bluetooth Arc Mouse (Black)",
      qty: 1,
      msrp: 9000,
    },
  ];

  return (
    <Stack spacing={1}>
      {cartItems.map((item) => (
        <CartItemCard name={item.name} qty={item.qty} msrp={item.msrp} />
      ))}
    </Stack>
  );
}

CartItems.propTypes = {};
