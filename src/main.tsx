import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApProvider } from "./context/ApContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApProvider>
      <App />
    </ApProvider>
  </React.StrictMode>
);
