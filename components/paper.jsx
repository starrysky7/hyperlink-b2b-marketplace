import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export default function Paper({ children, rest, sx }) {
  return (
    <Box
      {...rest}
      sx={[
        {
          padding: "20px 40px",
          border: "1px solid #e1e1e1",
          borderRadius: "6px",
          width: "fit-content",
          height: "fit-content",
        },
        sx,
      ]}
    >
      {children}
    </Box>
  );
}

Paper.propTypes = {
  children: PropTypes.children,
};
