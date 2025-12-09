import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import OrdersCounter from "../components/OrdersCounter";

const products = [
  { name: "Blood Booster Tea", desc: "Natural Energy Booster.", image: "/images/product1.jpg" },
  { name: "Insulin Liquid", desc: "Supports Body Growth.", image: "/images/product2.jpg" },
  { name: "Queen Bitters", desc: "Body Cleansing.", image: "/images/product3.jpg" },
  { name: "Ulcer Tea", desc: "Stomach system support.", image: "/images/product4.jpg" },
  { name: "Queen Seed Milk", desc: "Tasty Milk from Seeds.", image: "/images/product5.jpg" },
  { name: "Queen Herbal Mix", desc: "Immune system boost.", image: "/images/product6.jpg" },
  { name: "Body Detox Tea", desc: "Full body cleanse.", image: "/images/product7.jpg" },
  { name: "Memory Sharpener", desc: "Supports brain focus.", image: "/images/product8.jpg" },
  { name: "Sugar Control Mix", desc: "Balances sugar levels.", image: "/images/product9.jpg" },
  { name: "Liver Purifier", desc: "Cleans liver naturally.", image: "/images/product10.jpg" },
  { name: "Hormone Balance Tea", desc: "Helps regulate hormones.", image: "/images/product11.jpg" },
  { name: "Queen Fertility Mix", desc: "Supports women fertility.", image: "/images/product12.jpg" }
];

const sliderImages = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider5.jpg"
];

export default function Home({ cart, updateCart }) {
  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <main className="home">

      {/* SLIDER */}
      <section className="slider">
        <img src={sliderImages[index]} alt="Slider" className="slider-img" />

        <button className="slider-btn left" onClick={prevSlide}>❮</button>
        <button className="slider-btn right" onClick={nextSlide}>❯</button>
      </section>

      {/* PRODUCTS */}
      <section className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} cart={cart} updateCart={updateCart} />
        ))}
      </section>

      <OrdersCounter />
    </main>
  );
}