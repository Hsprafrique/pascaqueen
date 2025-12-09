import React from "react";

export default function Cart({ cart, updateCart }) {
  const items = Object.entries(cart).filter(([name, qty]) => qty > 0);

  const message = items
    .map(([name, qty]) => `${name} x${qty}`)
    .join(", ");

  const whatsappLink = `https://wa.me/14057656304?text=${encodeURIComponent(
    message || "My cart is empty"
  )}`;

  return (
    <div className="cart">
      <h3>Your Cart</h3>

      {items.length === 0 ? (
        <p className="empty">No items added yet.</p>
      ) : (
        <ul>
          {items.map(([name, qty]) => (
            <li key={name} className="cart-item">
              <span className="item-name">{name}</span>
              <span className="item-qty">x{qty}</span>

              <button
                className="remove-btn"
                onClick={() => updateCart(name, 0)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <button
          className="clear-btn"
          onClick={() => {
            Object.keys(cart).forEach((name) => updateCart(name, 0));
          }}
        >
          Clear Cart
        </button>
      )}

      <a href={whatsappLink} target="_blank" className="checkout-btn">
        Checkout via WhatsApp
      </a>
    </div>
  );
}
