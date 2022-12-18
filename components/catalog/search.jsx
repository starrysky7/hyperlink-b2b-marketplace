import { useState } from "react";
import TextField from "../forms/elements/text-field";
import Stack from "@mui/material/Stack";

export default function CategoryBrowser() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Stack direction="row" spacing={0}>
      <TextField
        value={searchValue}
        onChange={() => {
          setSearchValue(e.target.value);
        }}
        sx={{ width: "600px", borderRadius: "4px" }}
      />
    </Stack>
  );
}

CategoryBrowser.propTypes = {};
