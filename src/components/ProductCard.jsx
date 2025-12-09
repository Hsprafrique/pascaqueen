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
      {/* Image */}
      <div className="product-img-box">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Name + Desc */}
      <h3 className="product-title">{product.name}</h3>
      <p className="product-desc">{product.desc}</p>

      {/* Qty Controls */}
      <div className="qty-control">
        <button onClick={decrement} className="qty-btn">-</button>
        <span className="qty-number">{qty}</span>
        <button onClick={increment} className="qty-btn">+</button>
      </div>

      {/* Order Button */}
      <a href={checkoutLink} target="_blank" className="order-btn">
        ORDER
      </a>
    </div>
  );
}