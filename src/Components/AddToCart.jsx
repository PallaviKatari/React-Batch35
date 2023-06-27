//npm install react-use-cart --force
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import CartProducts from "./CartProducts";
import React from "react";
import Nav from "./Navbar";

function AddToCart() {
  return (
    <div style={{ marginLeft: 200, marginRight: 200 }}>
      <CartProvider>
        <Nav />
        <CartProducts />
        <hr />
        <Cart />
      </CartProvider>
    </div>
  );
}
export default AddToCart;
