// IMPORTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import "./index.css";
import "./styles/main.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppTheme } from "./constants/theme";

const theme = createTheme(AppTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
