"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const PRODUCTS = [
  {
    src: "/images/product-1-preview.jpg",
    alt: "آبمیوه انبه گلستان خراسان",
    title: "آبمیوه انبه",
    caption: "طعم گرم و شیرین"
  },
  {
    src: "/images/product-2-preview.jpg",
    alt: "آبمیوه پرتقال گلستان خراسان",
    title: "آبمیوه پرتقال",
    caption: "تازه و طبیعی"
  },
  {
    src: "/images/product-3-preview.jpg",
    alt: "آبمیوه سیب گلستان خراسان",
    title: "آبمیوه سیب",
    caption: "انتخابی سبک"
  }
]

export function HeroRotator() {
  const [idx, setIdx]         = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(i => (i + 1) % PRODUCTS.length)
        setVisible(true)
      }, 380)
    }, 3600)
    return () => clearInterval(t)
  }, [])

  const p = PRODUCTS[idx]

  return (
    <div className="hero-stage" aria-label="نمایش محصول">
      {/* Large decorative words — visible only on the blue panel */}
      <span className="hero-display hero-display--top"   aria-hidden="true">FRESH</span>
      <span className="hero-display hero-display--bottom" aria-hidden="true">JUICE</span>

      {/* Glow halo */}
      <div className="hero-halo" aria-hidden="true" />

      {/* Glass disc with product image */}
      <div className="hero-disc" style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.38s ease' }}>
        <Image
          src={p.src}
          alt={p.alt}
          width={280}
          height={280}
          className="hero-disc-img"
          priority
        />
      </div>

      {/* Tag pill */}
      <span className="hero-tag" aria-hidden="true">Fresh product lineup</span>

      {/* Mini info card — fades with image */}
      <div
        className="hero-mini-card"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.38s ease' }}
      >
        <strong>{p.title}</strong>
        <span>{p.caption}</span>
      </div>
    </div>
  )
}
