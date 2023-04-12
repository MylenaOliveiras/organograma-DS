import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@brpartners/core";
import { CssBaseline } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
