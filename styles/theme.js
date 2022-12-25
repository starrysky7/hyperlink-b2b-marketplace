import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Avenir",
    h1: {
      fontSize: "22px",
      fontWeight: 500,
      color: "var(--text-color-1)",
    },
    h2: {
      fontSize: "15px",
      fontWeight: 700,
      color: "var(--text-color-1)",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 700,
      color: "var(--text-color-1)",
    },
    h4: {
      fontSize: "14px",
      fontWeight: 900,
      color: "var(--text-color-1)",
    },
    body1: {
      fontSize: "14px",
      color: "var(--text-color-1)",
      fontWeight: 300,
    },
    body2: {
      fontSize: "14px",
      color: "var(--text-color-1)",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "13px",
      color: "var(--text-color-1)",
    },
    subtitle2: {
      fontSize: "12px",
      color: "var(--text-color-1)",
      fontWeight: 500,
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--paper-background-color)",
          border: "1px solid var(--border-color-1)",
          outline: "none",
          fontSize: "15px",
          fontWeight: 500,
          color: "var(--text-color-1)",
          height: "38px",
          padding: "3px 0 3px",
          borderRadius: "4px",
          "&:before": {
            content: "none",
          },
          "&:after": {
            content: "none",
          },
        },
        input: {
          paddingLeft: "15px",
          "&::placeholder": {
            color: "var(--text-color-2)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "var(--text-color-1)",
          marginBottom: "2px",
          fontWeight: 500,
        },
        asterisk: {
          color: "#f02711",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "rgba(68, 68, 68, 0.5)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 0,
          fontWeight: 700,
          borderRadius: "4px",
        },
        containedPrimary: {
          backgroundColor: "var(--pop-color)",
          "&:hover": {
            backgroundColor: "var(--pop-color)",
            filter: "brightness(85%)",
          },
        },
        outlinedSecondary: {
          color: "var(--text-color-1)",
          borderColor: "var(--border-color-1)",
          backgroundColor: "var(--paper-color)",
        },
        text: {
          fontSize: "14px",
          color: "var(--text-color-1)",
          borderRadius: 0,
          minWidth: 0,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        sizeSmall: {
          fontSize: "13px",
          height: "32px",
        },
        sizeMedium: {
          fontSize: "14px",
          height: "38px",
        },
        sizeLarge: {
          fontSize: "16px",
        },
        iconSizeSmall: {
          width: "13px",
          height: "auto",
          marginRight: "4px",
        },
        iconSizeMedium: {
          width: "15px",
          height: "auto",
        },
        iconSizeLarge: {
          width: "15px",
          height: "auto",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

export default theme;
