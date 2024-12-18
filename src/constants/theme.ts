// IMPORTS
import { ThemeOptions } from "@mui/material";

export const AppTheme: ThemeOptions = {
  typography: {
    fontFamily: "IranYekan",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: 300,
          padding: "3px 15px",
          boxShadow: "none",
          borderRadius: "2.5px",
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#2e3456",
    },
    success: {
      main: "#1f5423",
    },
    warning: {
      main: "#8f4103",
    },
    background: {
      default: "#fff",
      paper: "#1e2436",
    },
  },
};
