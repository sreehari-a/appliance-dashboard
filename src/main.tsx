import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker as mockServiceWorker } from "./mocks/browser";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

mockServiceWorker.start().then(() =>
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </React.StrictMode>
  )
);
