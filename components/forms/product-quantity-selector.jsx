import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "./elements/text-field";

export default function ProductQuantitySelector({ callback, variant }) {
  const [value, setValue] = useState(1);

  //call callback function on count change
  useEffect(() => {
    callback(parseInt(value));
  }, [value]);

  return (
    <Stack
      direction="row"
      spacing={0}
      alignItems="center"
      sx={{ border: "1px solid var(--pop-color)", borderRadius: "6px" }}
    >
      <Button
        size="small"
        variant={variant === "outlined" ? "outlined" : "contained"}
        sx={{
          borderRadius: "4px 0 0 4px",
          minWidth: "30px",
          border: 0,
          "&:hover": {
            border: 0,
          },
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
        style={
          variant === "outlined"
            ? {
                height: "32px",
                width: "30px",
                borderRadius: 0,
                padding: 0,
                textAlign: "center",
                border: 0,
                outline: "none",
                color: "var(--pop-color)",
                fontWeight: 700,
              }
            : {
                height: "32px",
                width: "42px",
                borderRadius: 0,
                padding: 0,
                textAlign: "center",
                border: 0,
                outline: "none",
                color: "#fff",
                fontWeight: 700,
                backgroundColor: "var(--pop-color)",
              }
        }
      />
      <Button
        size="small"
        variant={variant === "outlined" ? "outlined" : "contained"}
        sx={{
          borderRadius: "0 4px 4px 0",
          minWidth: "30px",
          border: 0,
          "&:hover": {
            border: 0,
          },
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
