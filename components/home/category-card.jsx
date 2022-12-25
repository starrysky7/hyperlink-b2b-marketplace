import Box from "@mui/material/Box";
import { Fastfood } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import theme from "../../styles/theme";
import { useRouter } from "next/router";

export default function CategoryCard({ name }) {
  //next router
  const router = useRouter();

  return (
    <Stack
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
      sx={{
        borderRadius: "16px",
        padding: "5px",
        border: "1px solid var(--border-color-2)",
        borderRadius: "24px",
        padding: "20px 0",
      }}
      onClick={() => {
        router.push("/browse");
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.up("xs")]: {
            width: "38px",
            height: "38px",
            borderRadius: "19px",
          },
          [theme.breakpoints.up("sm")]: {
            width: "70px",
            height: "70px",
            borderRadius: "35px",
          },
        }}
      >
        <Fastfood sx={{ fontSize: "50px" }} />
      </Box>
      <Typography
        variant="body2"
        textAlign="center"
        sx={{
          [theme.breakpoints.up("xs")]: {
            display: "none",
          },
          [theme.breakpoints.up("sm")]: {
            display: "block",
            fontSize: "14px",
          },
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
}
