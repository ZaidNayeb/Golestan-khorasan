"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/site";

export function Hero() {
  const [idx,  setIdx]  = useState(0);
  const [swap, setSwap] = useState(false);

  const goto = (i: number) => {
    setSwap(true);
    setTimeout(() => { setIdx(i); setSwap(false); }, 350);
  };

  useEffect(() => {
    const t = setInterval(() => goto((idx + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, [idx]);

  const slide = heroSlides[idx];

  return (
    <section className="hero">
      <div className="hero-stage">
        {/* Copy — right column in RTL */}
        <div className="hero-copy">
          <div className="hero-eyebrow reveal reveal-1">
            <img src="/images/pansy-logo.svg" alt="پانسی" className="hero-logo" />
          </div>

          <h1 className="hero-title reveal reveal-2">
            <span className="accent">
              {slide.title[0]}
              <br />
              {slide.title[1]}
            </span>
          </h1>

          <p className="hero-desc reveal reveal-3">{slide.desc}</p>

          <div className="hero-actions reveal reveal-4">
            <Link href="/products" className="btn btn-primary">
              مشاهده محصولات
            </Link>
          </div>
        </div>

        {/* Visual — left column in RTL */}
        <div className="hero-visual">
          <span className="hero-deco hero-deco-circle-lg" />
          <span className="hero-deco hero-deco-circle-sm" />
          <span className="hero-deco hero-deco-ring" />
          <img
            src={slide.img}
            alt={slide.cat}
            className={`hero-product${swap ? " swapping" : ""}`}
          />
          <div className="hero-pips">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`hero-pip${i === idx ? " active" : ""}`}
                onClick={() => goto(i)}
                aria-label={`اسلاید ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
