import React from "react";

export default function ProductCard({ product, cart, updateCart }) {
  const qty = cart[product.name] || 0;

  const increment = () => updateCart(product.name, qty + 1);
  const decrement = () => updateCart(product.name, qty > 0 ? qty - 1 : 0);

  const checkoutLink = `https://wa.me/14057656304?text=${encodeURIComponent(
    `I want ${product.name} x${qty}`
  )}`;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>{product.desc}</p>
      <div className="qty-control">
        <button onClick={decrement}>-</button>
        <span>{qty}</span>
        <button onClick={increment}>+</button>
      </div>
      <a href={checkoutLink} target="_blank" className="order-btn">
        ORDER
      </a>
    </div>
  );
}
