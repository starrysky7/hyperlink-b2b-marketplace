import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function FiltersArray() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "100%",
      }}
    >
      <Button>
        <Typography variant="body2" sx={{ fontSize: "13px", fontWeight: 700 }}>
          TYPE
        </Typography>
        <KeyboardArrowDown sx={{ width: "20px" }} />
      </Button>
      <Button>
        <Typography variant="body2" sx={{ fontSize: "13px", fontWeight: 700 }}>
          MARGIN
        </Typography>
        <KeyboardArrowDown sx={{ width: "20px" }} />
      </Button>
      <Button>
        <Typography variant="body2" sx={{ fontSize: "13px", fontWeight: 700 }}>
          WAREHOUSE
        </Typography>
        <KeyboardArrowDown sx={{ width: "20px" }} />
      </Button>
    </Stack>
  );
}
