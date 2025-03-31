import React from "react";
import ReactDOM from "react-dom/client";
import {Router as Routes} from "./routes";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);