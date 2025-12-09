import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState({}); // { productName: quantity }

  const updateCart = (product, qty) => {
    setCart((prev) => ({ ...prev, [product]: qty }));
  };

  const clearCart = () => setCart({});

  return (
   <Router>
  <Header cart={cart} updateCart={updateCart} />
  
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home cart={cart} updateCart={updateCart} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>

  <Footer />
</Router>

  );
}
