import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Fastfood } from "@mui/icons-material";
import { useState } from "react";
import theme from "../../styles/theme";
import { useRouter } from "next/router";

export default function CategoryLink({ name, id, isSelected }) {
  //state to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  //next router
  const router = useRouter();

  return (
    <Stack
      spacing={0.5}
      alignItems="center"
      sx={[
        {
          cursor: "pointer",
          borderRadius: "16px",
          padding: "5px",
        },
        isSelected ? { borderColor: "var(--pop-color)" } : null,
      ]}
      onClick={() => {
        router.push(`/browse?c=${id}`);
      }}
    >
      <Box
        sx={[
          {
            backgroundColor: "var(--paper-color)",
            border: "1px solid var(--border-color-2)",
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
              borderRadius: "12px",
            },
          },
          isSelected
            ? {
                background:
                  "var(--pop-color) linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))",
              }
            : null,
        ]}
      >
        <Fastfood
          sx={[isSelected ? { fontSize: "36px" } : { fontSize: "30px" }]}
        />
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
