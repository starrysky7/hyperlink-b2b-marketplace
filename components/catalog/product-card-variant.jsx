import Paper from "../paper";
import Image from "next/image";
import { Typography, Button, Stack } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { ShoppingCart } from "@mui/icons-material";

export default function ProductCardVariant({
  product,
  inCart,
  productsPerRow,
  inStarred,
}) {
  return (
    <Stack
      direction="row"
      sx={[
        {
          maxWidth: "100%",
          height: "100%",
          position: "relative",
          border: "1px solid var(--border-color-2)",
          backgroundColor: "var(--paper-color)",
          borderRadius: "6px",
        },
        inCart
          ? {
              border: "1px solid",
              borderColor: "primary.main",
            }
          : { border: "1px solid var(--border-color-1)" },
      ]}
      onClick={() => {
        window.location.href = `/catalog/${product.sku}`;
      }}
    >
      <Box
        sx={[
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "160px",
            height: "inherit",
            borderRight: "1px solid var(--border-color-2)",
            objectFit: "contain",
            cursor: "pointer",
            overflow: "hidden",
          },
        ]}
      >
        <img
          width="inherit"
          height="140"
          src={product?.image}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography
            onClick={() => {
              //go to product details
            }}
            noWrap
            variant="h2"
            sx={{
              width: "inherit",
              cursor: "pointer",
            }}
          >
            {product?.name}
          </Typography>
          <Typography
            noWrap
            variant="body1"
            sx={{
              fontSize: "13px",
              overflow: "hidden !important",
              width: "inherit",
              marginBottom: "3px",
            }}
          >
            {product?.sku}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ paddingBottom: "5px" }}>
            <Typography variant="body2">
              <span style={{ fontWeight: 300 }}>Cost: &nbsp;</span>$
              {product?.cost}
            </Typography>
            <Typography variant="body2">
              <span style={{ fontWeight: 300 }}>MSRP: &nbsp;</span> $
              {product?.msrp}
            </Typography>
          </Stack>
          {/* <Stack direction="row" spacing={0.4} sx={{ paddingBottom: "10px" }}>
          {product?.variants?.map((variant, i) => {
            return (
              <Button size="small" variant="outlined" color="secondary">
                {variant.name}
              </Button>
            );
          })}
        </Stack> */}
        </Box>
        <Box sx={{ width: "100px" }}>
          {inCart ? (
            <Button
              fullWidth
              size="small"
              variant="contained"
              startIcon={<CancelIcon fill="var(--dynamic-button-color)" />}
              disabled={false}
              onClick={() => {
                //
              }}
              sx={{
                backgroundColor: "var(--pop-color)",
              }}
            >
              {productsPerRow > 3 ? "Remove" : "Remove From Cart"}
            </Button>
          ) : (
            <Button
              fullWidth
              size="small"
              variant="contained"
              startIcon={<ShoppingCart fill="#000" />}
              disabled={false}
              onClick={() => {
                //
              }}
              sx={{ backgroundColor: "var(--border-color-1)", color: "#000" }}
            >
              {productsPerRow > 3 ? "Add" : "Add To Cart"}
            </Button>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}
