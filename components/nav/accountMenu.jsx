import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../contexts/AuthContext";

export default function AccountMenu() {
  const [, dispatch] = useAuth();
  return (
    <Box
      sx={{
        width: "fit-content",
        backgroundColor: "var(--paper-color)",
        border: "1px solid var(--border-color-1)",
        borderRadius: "12px",
      }}
    >
      <MenuItem
        disabled
        sx={{
          borderBottom: "1px solid var(--border-color-2)",
        }}
      >
        <Typography variant="body2" sx={{ color: "var(--text-color-1)" }}>
          Manage Orders
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">Order History</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">Active Orders</Typography>
      </MenuItem>
      <MenuItem
        disabled
        sx={{ borderBottom: "1px solid var(--border-color-2)" }}
      >
        <Typography variant="body2" sx={{ color: "var(--text-color-1)" }}>
          Account Information
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">Add / Edit Addresses</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">Add / Edit Payment Methods</Typography>
      </MenuItem>
      <MenuItem>
        <Typography variant="body1">View / Update Profile</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          dispatch({ type: "logout" });
        }}
      >
        <Typography variant="body1">Logout</Typography>
      </MenuItem>
    </Box>
  );
}
