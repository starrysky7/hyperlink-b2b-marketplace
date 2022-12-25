import { Typography, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import ProductQuantitySelector from "../forms/product-quantity-selector";
import theme from "../../styles/theme";

export default function ProductCard({
  product,
  inCart,
  productsInCart,
  setProductsInCart,
}) {
  return (
    <Box
      sx={[
        {
          maxWidth: "100%",
          height: "280px",
          position: "relative",
          backgroundColor: "var(--paper-color)",
          borderRadius: "12px",
        },
        inCart
          ? {
              border: "2px solid",
              borderColor: "primary.main",
            }
          : { border: "1px solid var(--border-color-2)" },
      ]}
      // onClick={() => {
      //   window.location.href = `/catalog/${product.sku}`;
      // }}
    >
      <Box
        sx={[
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "inherit",
            borderBottom: "1px solid var(--border-color-2)",
            objectFit: "contain",
            cursor: "pointer",
            overflow: "hidden",
          },
          inCart
            ? {
                height: "169px",
              }
            : { height: "170px" },
        ]}
      >
        <img
          width="inherit"
          height="140"
          src={product?.image}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Stack
        justifyContent="space-between"
        sx={[
          { height: "110px" },
          inCart ? { padding: "8px 9px" } : { padding: "8px 10px" },
        ]}
      >
        <Typography
          onClick={() => {
            //go to product details
          }}
          variant="body2"
          sx={{
            width: "inherit",
            cursor: "pointer",
          }}
        >
          {product?.name}
        </Typography>

        <Stack
          direction="row"
          spacing={0.5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2" sx={{ fontSize: "16px" }}>
            ${product?.cost}
          </Typography>
          {inCart ? (
            <ProductQuantitySelector
              callback={(count) => {
                if (count === 0) {
                  let arr = productsInCart.filter(
                    (productId) => productId !== product?.id
                  );
                  setProductsInCart(arr);
                }
              }}
            />
          ) : (
            <Button
              variant="outlined"
              size="small"
              onClick={() => {
                setProductsInCart([...productsInCart, product?.id]);
              }}
              sx={{ borderWidth: "2px", "&:hover": { borderWidth: "2px" } }}
            >
              ADD
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
