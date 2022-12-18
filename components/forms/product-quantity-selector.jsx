import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "./elements/text-field";

export default function ProductQuantitySelector() {
  const [value, setValue] = useState(0);
  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{ marginBottom: "5px" }}
      alignItems="center"
    >
      <Button
        size="small"
        variant="outlined"
        color="secondary"
        sx={{
          borderRadius: "0",
          height: "28px",
          minWidth: "30px",
        }}
        onClick={() => {
          if (parseInt(value) > 0) setValue(parseInt(value) - 1);
        }}
      >
        -
      </Button>
      <input
        value={value}
        type="number"
        min="0"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        style={{
          width: "56px",
          height: "28px",
          borderRadius: 0,
          borderLeft: 0,
          borderRight: 0,
          padding: 0,
          textAlign: "center",
          border: "1px solid var(--border-color-1)",
          outline: "none",
        }}
      />
      <Button
        size="small"
        variant="outlined"
        color="secondary"
        sx={{
          borderRadius: "0",
          height: "28px",
          minWidth: "30px",
        }}
        onClick={() => {
          setValue(parseInt(value) + 1);
        }}
      >
        +
      </Button>
    </Stack>
  );
}
