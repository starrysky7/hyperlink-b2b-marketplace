import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export default function ProductImageGrid() {
  const images = [
    {
      id: "1",
      source: "",
    },
    {
      id: "2",
      source: "",
    },
    {
      id: "3",
      source: "",
    },
    {
      id: "4",
      source: "",
    },
    {
      id: "5",
      source: "",
    },
    { id: "6", source: "" },
  ];

  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <Stack spacing={0.5}>
          {images.map((img) => {
            return (
              <Image
                key={img.id}
                src={img.source}
                width={40}
                height={50}
                style={{ border: "1px solid #e1e1e1" }}
              />
            );
          })}
        </Stack>
        <Image
          src={images[0].source}
          width={500}
          height={500}
          style={{ border: "1px solid #e1e1e1" }}
        />
      </Stack>
    </Box>
  );
}
