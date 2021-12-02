import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
