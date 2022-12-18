import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ProductCheckoutOptions() {
  return (
    <Box>
      <Stack spacing={1}>
        <Button variant="contained">Add to cart</Button>
        <Button variant="outlined">Buy now</Button>
      </Stack>
    </Box>
  );
}
