import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@brpartners/core";
import { CssBaseline } from "@mui/material";
import { worker } from "./mocks/browser";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

worker.start();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
