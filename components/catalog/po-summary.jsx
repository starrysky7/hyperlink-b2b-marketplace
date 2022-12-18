import Link from "next/link";
import Box from "@mui/material/Box";

export default function POSummary() {
  const categories = [
    {
      id: 1,
      name: "laptops",
    },
    {
      id: 2,
      name: "tablets",
    },
  ];
  return (
    <Box
      sx={{
        padding: "5px 10px",
        border: "1px solid var(--border-color-2)",
        backgroundColor: "var(--paper-color)",
        height: "93%",
      }}
    >
      {categories.map((category) => (
        <Link variant="text" href={`/catalog?category=${category.id}`}>
          {category.name}
        </Link>
      ))}
    </Box>
  );
}
