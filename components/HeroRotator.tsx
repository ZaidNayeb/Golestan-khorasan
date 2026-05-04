"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PRODUCTS = [
  { src: "/images/product-1-preview.jpg", alt: "رانی پرتقال پانسی" },
  { src: "/images/product-2-preview.jpg", alt: "رانی شفتالو پانسی" },
  { src: "/images/product-3-preview.jpg", alt: "خمیرمایه پانسی"    },
];

export function HeroRotator() {
  const [idx, setIdx]         = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % PRODUCTS.length);
        setVisible(true);
      }, 380);
    }, 3600);
    return () => clearInterval(t);
  }, []);

  const p = PRODUCTS[idx];

  return (
    <Image
      src={p.src}
      alt={p.alt}
      width={480}
      height={480}
      className="hero-product-img"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.38s ease" }}
      priority
    />
  );
}
