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

  // ⭐ Slow slider to 2 seconds and allow manual arrows
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 2000); // 2 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <main className="home">

      {/* FIX STRETCHING + FORCE GRID EVERYWHERE */}
      <style>{`
        /* Keep layout centered + premium */
        .home {
          max-width: 1200px;
          margin: 0 auto;
          padding: 10px;
        }

        /* Slider */
        .slider {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          border-radius: 14px;
          margin-bottom: 30px;
        }

        .slider-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.4);
          color: white;
          border: none;
          padding: 12px;
          cursor: pointer;
          border-radius: 50%;
          font-size: 22px;
        }

        .slider-btn.left { left: 15px; }
        .slider-btn.right { right: 15px; }

        /* PRODUCTS GRID FIX (mobile → 2, tablet → 3, desktop → 4) */
        .products-grid {
          display: grid !important;
          gap: 20px !important;
          padding-top: 20px;
          grid-template-columns: repeat(2, 1fr) !important;
        }

        @media (min-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }

        /* Product cards shouldn’t stretch on big screens */
        .products-grid > * {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }

        /* Mobile fix: prevent long stretched card */
        @media (max-width: 480px) {
          .products-grid > * {
            max-width: 90%;
          }
        }
      `}</style>

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