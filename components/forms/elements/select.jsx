import { React } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";

export default function Select({
  placeholder,
  label,
  variant,
  size,
  color,
  startAdornment,
  options,
  value,
  setValue,
  setFormikValue,
  sx,
  error,
  helperText,
  id,
  required,
  disabled,
  onChange,
  actions,
  valueAccessor,
  labelAccessor,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {label ? <InputLabel required={required}>{label}</InputLabel> : null}
      <Button
        id={id}
        fullWidth
        variant={variant}
        size={size}
        color={color}
        onClick={disabled ? null : handleClick}
        sx={[
          {
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 500,
          },
          size === "medium" ? { height: "38px" } : null,
          error ? { borderColor: "var(--error-color)" } : null,
          sx,
        ]}
      >
        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Box>{startAdornment}</Box>
          <Box
            sx={{
              width: "100%",
              whiteSpace: "nowrap",
              textAlign: "left",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {(() => {
              if (value === "" || value === null) {
                return placeholder;
              } else {
                return options?.filter(
                  (opt) => opt?.[valueAccessor] === value
                )[0]?.[labelAccessor];
              }
            })()}
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            {value && (
              <IconButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setValue("");
                  setFormikValue(id, "");
                }}
              >
                <CancelIcon
                  fontSize="small"
                  sx={{ color: "#ccc", "&:hover": { color: "#bbb" } }}
                />
              </IconButton>
            )}
            <KeyboardArrowDown sx={{ marginLeft: "5px", width: "15px" }} />
          </Stack>
        </Stack>
      </Button>
      {error ? (
        <Typography variant="body2" sx={{ color: "var(--error-color)" }}>
          {helperText}
        </Typography>
      ) : null}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ maxHeight: "240px" }}
        PaperProps={{ sx: { minWidth: anchorEl && anchorEl.offsetWidth } }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        {options?.map((option, i) => (
          <MenuItem
            key={i}
            onClick={(e) => {
              e.preventDefault();
              setValue(option?.[valueAccessor]);
              setFormikValue(id, option?.[valueAccessor]);
              onChange();
              handleClose();
            }}
            sx={
              valueAccessor
                ? value === option?.[valueAccessor]
                  ? { backgroundColor: "primary.main" }
                  : null
                : null
            }
          >
            {option?.[labelAccessor]}
          </MenuItem>
        ))}

        {actions.map((item, i) => {
          return (
            <Box
              key={i}
              onClick={() => {
                handleClose();
              }}
            >
              {item}
            </Box>
          );
        })}
      </Menu>
    </Box>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  options: PropTypes.array,
  startAdornment: PropTypes.node,
  value: PropTypes.string,
  sx: PropTypes.object,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  setValue: PropTypes.func,
  setFormikValue: PropTypes.func,
  id: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  actions: PropTypes.array,
  valueAccessor: PropTypes.string,
  labelAccessor: PropTypes.string,
};

Select.defaultProps = {
  placeholder: null,
  label: null,
  variant: "outlined",
  size: "medium",
  color: "secondary",
  options: [],
  startAdornment: <></>,
  value: null,
  sx: {},
  error: false,
  helperText: null,
  setValue: function () {},
  setFormikValue: function () {},
  id: null,
  required: false,
  disabled: false,
  onChange: function () {},
  actions: [],
  valueAccessor: "value",
  labelAccessor: "label",
};
