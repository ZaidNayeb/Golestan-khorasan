"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/site";

const SLUG_TO_CATEGORY: Record<string, string> = {
  orange:   "آبمیوه",
  peach:    "آبمیوه",
  yeast:    "مخمر",
  packaged: "",
};

const FILTER_OPTIONS = [
  { label: "همه",    value: ""        },
  { label: "آبمیوه", value: "آبمیوه"  },
  { label: "مخمر",   value: "مخمر"   },
];

export function ProductsClient() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const slug = searchParams.get("category") ?? "";
    setActive(SLUG_TO_CATEGORY[slug] ?? "");
  }, [searchParams]);

  const filtered = active
    ? products.filter((p) => p.category === active)
    : products;

  return (
    <section className="products-page-content">
      <div className="container">
        <div className="products-filter">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActive(opt.value)}
              className={`products-filter-btn${active === opt.value ? " products-filter-btn--active" : ""}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.06}>
              <div className="product-card">
                <div className="product-card-img-wrap">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-card-img"
                  />
                </div>
                <div className="product-card-body">
                  <span className="product-card-cat">{product.category}</span>
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-excerpt">{product.excerpt}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="products-card-cta"
                  >
                    مشاهده محصول <ChevronLeft className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
