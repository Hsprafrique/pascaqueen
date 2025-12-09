import React, { useEffect, useState } from "react";

export default function OrdersCounter() {
  const [count, setCount] = useState(0);
  const target = 10000;

  useEffect(() => {
    let animationFrame;
    const update = () => {
      setCount((prev) => {
        const next = prev + Math.ceil(target / 200);
        return next > target ? target : next;
      });
      if(count < target) animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="orders-counter">
      <h2>Trusted by Millions of Africans</h2>
      <p>{count.toLocaleString()} orders delivered</p>
    </section>
  );
}
