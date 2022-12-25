import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

export default function CartSummary() {
  //next router
  const router = useRouter();

  return (
    <Stack
      spacing={1}
      sx={{
        border: "1px solid var(--border-color-2)",
        borderRadius: "12px",
        padding: "20px 20px",
        position: "sticky",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ alignSelf: "end" }}
      >
        <Typography variant="body1">Cart Sub-total:</Typography>
        <Typography variant="body2">$100.00</Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ alignSelf: "end" }}
      >
        <Typography variant="body1">Cart total:</Typography>
        <Typography variant="body2">$100.00</Typography>
      </Stack>
      <Typography variant="body1">Billing Address</Typography>
      <Typography
        variant="body2"
        sx={{
          padding: "20px 0",
          backgroundColor: "var(--paper-color)",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        + Add Billing Address
      </Typography>
      <Typography variant="body1">Shipping Address</Typography>
      <Typography
        variant="body2"
        sx={{
          padding: "20px 0",
          backgroundColor: "var(--paper-color)",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        + Add Shipping Address
      </Typography>
      <Typography variant="body1">Payment Method</Typography>
      <Typography
        variant="body2"
        sx={{
          padding: "20px 0",
          backgroundColor: "var(--paper-color)",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        + Add Payment Method
      </Typography>
      <Button
        fullWidth
        size="small"
        variant="contained"
        sx={{ alignSelf: "center" }}
        onClick={() => {
          router.push("/success");
        }}
      >
        Place Order & Pay
      </Button>
    </Stack>
  );
}
