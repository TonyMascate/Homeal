import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { LikesProvider } from "./context/LikesContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <LikesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LikesProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
