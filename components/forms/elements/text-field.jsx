import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

export default function TextField({
  required, //adds a * to the label
  id, //input field id
  label, //input field label
  value, //input field value
  placeholder, //input field placeholder
  sx, //input field styles
  startAdornment, //optional start adornment
  error, //input field error flag
  helperText, //input field error text
  min, //min value for input types number/ date
  max, //max value for input types number/ date
  step, //step value for input types date
  ...rest
}) {
  return (
    <Box>
      {label ? <InputLabel required={required}>{label}</InputLabel> : null}
      <Input
        id={id}
        fullWidth
        value={value}
        placeholder={placeholder}
        startAdornment={startAdornment}
        inputProps={{ step: step, min: min, max: max }}
        {...rest}
        sx={[sx, error ? { borderColor: "var(--error-color)" } : null]}
      />
      {error ? (
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: "var(--error-color)",
          }}
        >
          {helperText}
        </Typography>
      ) : null}
    </Box>
  );
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  startAdornment: PropTypes.node,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

TextField.defaultProps = {
  id: null,
  placeholder: null,
  sx: {},
  startAdornment: null,
  label: null,
  error: false,
  helperText: null,
  required: false,
  value: "",
  min: null,
  max: null,
  step: 1,
};
