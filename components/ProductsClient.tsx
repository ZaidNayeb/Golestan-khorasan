"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/site";

const SLUG_TO_CAT: Record<string, string> = {
  orange: "juice",
  peach:  "juice",
  yeast:  "yeast",
};

const CATS = [
  { key: "all",   label: "همه محصولات"    },
  { key: "juice", label: "آبمیوه‌های طبیعی" },
  { key: "yeast", label: "خمیرمایه"        },
];

const SORTS = [
  { key: "popular", label: "محبوب‌ترین" },
  { key: "new",     label: "جدیدترین"   },
  { key: "az",      label: "الفبایی"    },
];

export function ProductsClient() {
  const searchParams = useSearchParams();
  const [cat,  setCat]  = useState("all");
  const [sort, setSort] = useState("popular");

  useEffect(() => {
    const slug = searchParams.get("category") ?? "";
    setCat(SLUG_TO_CAT[slug] ?? "all");
  }, [searchParams]);

  const filtered = cat === "all" ? products : products.filter(p => p.cat === cat);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "az") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <section className="products-page">
      <div className="container">
        <div className="products-toolbar">
          <div className="products-count">
            مجموع <strong>{products.length}</strong> محصول در سبد پانسی
          </div>
          <div className="products-sort">
            {SORTS.map(s => (
              <button
                key={s.key}
                className={sort === s.key ? "active" : ""}
                onClick={() => setSort(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "28px", flexWrap: "wrap" }}>
          {CATS.map(c => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              style={{
                border:        `1.5px solid ${cat === c.key ? "var(--brand-blue)" : "var(--line)"}`,
                background:    cat === c.key ? "var(--brand-blue)" : "#fff",
                color:         cat === c.key ? "#fff" : "var(--ink-soft)",
                borderRadius:  "999px",
                padding:       "8px 18px",
                fontSize:      "14px",
                fontWeight:    700,
                cursor:        "pointer",
                fontFamily:    "inherit",
                transition:    "all .2s",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="products-list-grid-wide">
          {sorted.map(p => (
            <div key={p.slug} id={p.slug} className={`pp-card ${p.cls}`}>
              <div className="pp-card-head">
                <span className="pp-tag">{p.catLbl}</span>
              </div>
              <img src={p.img} alt={p.name} className="pp-card-img" />
              <div className="pp-card-body">
                <span className="pp-cat-lbl">{p.catLbl}</span>
                <h3 className="pp-name">{p.name}</h3>
              </div>
              <div className="pp-foot">
                <span className="pp-vol en">{p.vol}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
