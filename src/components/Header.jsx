import React, { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Header({ cart, updateCart }) {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => setShowCart(!showCart);

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Pascaqueen" />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <div className="cart-icon" onClick={toggleCart}>
          🛒 {Object.values(cart).reduce((a, b) => a + b, 0)}
        </div>
      </nav>
      {showCart && <Cart cart={cart} updateCart={updateCart} />}
    </header>
  );
}
