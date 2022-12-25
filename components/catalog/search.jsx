import { useState } from "react";
import TextField from "../forms/elements/text-field";
import Stack from "@mui/material/Stack";

export default function CategoryBrowser() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <TextField
      value={searchValue}
      onChange={() => {
        setSearchValue(e.target.value);
      }}
      sx={{ borderRadius: "4px" }}
    />
  );
}

CategoryBrowser.propTypes = {};
