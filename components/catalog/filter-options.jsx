import {
  AccountCircle,
  ShoppingCartCheckoutOutlined,
  ShoppingCartRounded,
  Star,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Search from "./search";
import FiltersArray from "./filters-array";
import { Typography, Button } from "@mui/material";
import theme from "../../styles/theme";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

export default function FilterOptions() {
  return (
    <Grid
      boxShadow={1}
      container
      sx={{
        padding: "10px 0",
        width: "100%",
        backgroundColor: "var(--paper-color)",
        [theme.breakpoints.up("xs")]: { padding: "10px 0px" },
        [theme.breakpoints.up("sm")]: { padding: "10px 20px" },
        [theme.breakpoints.up("md")]: { padding: "10px 60px" },
        [theme.breakpoints.up("lg")]: { padding: "10px 160px" },
      }}
    >
      <Grid item xs={0} sm={2.3}>
        <Typography sx={{ fontWeight: "900", fontSize: "22px" }}>
          MOTHERSHIP
        </Typography>
      </Grid>
      <Grid item xs={12} sm={9.7}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Stack spacing={0}>
            <Search />
            <FiltersArray />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<Star fill="#000" />}
            >
              STARRED ITEMS
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              size="small"
              startIcon={<ShoppingCartRounded fill="#000" />}
            >
              DRAFT ORDER
            </Button>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
