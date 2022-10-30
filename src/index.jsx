/* REACT-LIB */
import React from "react";
import ReactDOM from "react-dom/client";

/* REACT-FILE */
import App from "./App";

/* CSS-FILE */
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
