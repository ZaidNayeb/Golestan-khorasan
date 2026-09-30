"use client";

import { useState } from "react";
import { ContactDock } from "@/components/ContactDock";
import { posts } from "@/data/site";

const TABS = [
  { key: "all",     label: "همه"             },
  { key: "company", label: "اخبار شرکت"      },
  { key: "product", label: "محصول جدید"       },
  { key: "retail",  label: "نکات فروشگاهی"   },
  { key: "tech",    label: "تکنولوژی"        },
];

function NewsImg({ src, alt }: { src: string | null; alt: string }) {
  if (src) return <img src={src} alt={alt} />;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg,#0E4FA3 0%,#1565c0 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/images/pansy-logo-new.png"
        alt=""
        aria-hidden="true"
        style={{ width: 56, opacity: 0.2, filter: "brightness(10) saturate(0)" }}
      />
    </div>
  );
}

export function NewsClient() {
  const [tab, setTab] = useState("all");

  const featured = posts.find(p => p.featured) ?? posts[0];
  const rest      = posts.filter(p => p !== featured);
  const filtered  = tab === "all" ? rest : rest.filter(p => p.catKey === tab);

  return (
    <>
      <section className="news-page">
        <div className="container">
          {/* Featured + mini grid */}
          <div className="news-hero-grid">
            <article className="news-hero">
              <div className="news-hero-img">
                <NewsImg src={featured.img} alt={featured.title} />
              </div>
              <div className="news-hero-body">
                <span className="news-hero-cat">{featured.cat}</span>
                <h2 className="news-hero-title">{featured.title}</h2>
                <div className="news-hero-meta">
                  <span className="en">{featured.date}</span>
                  <span>·</span>
                  <span>{featured.read}</span>
                </div>
                <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", opacity: 0.85 }}>
                  {featured.excerpt}
                </p>
              </div>
            </article>

            <div className="news-secondary">
              {rest.slice(0, 3).map(p => (
                <article key={p.slug} className="news-mini">
                  <div className="news-mini-img">
                    <NewsImg src={p.img} alt={p.title} />
                  </div>
                  <div>
                    <span className="news-mini-cat">{p.cat}</span>
                    <h3 className="news-mini-title">{p.title}</h3>
                    <span className="news-mini-date en">{p.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Category tabs */}
          <div className="news-tabs">
            {TABS.map(t => (
              <button
                key={t.key}
                className={tab === t.key ? "active" : ""}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* News grid */}
          <div className="news-grid">
            {filtered.map(p => (
              <article key={p.slug} className="news-card">
                <div className="news-card-img">
                  <NewsImg src={p.img} alt={p.title} />
                </div>
                <div className="news-card-body">
                  <div className="news-card-meta">
                    <span className="cat">{p.cat}</span>
                    <span className="dot" />
                    <span className="en">{p.date}</span>
                    <span className="dot" />
                    <span>{p.read}</span>
                  </div>
                  <h3 className="news-card-title">{p.title}</h3>
                  <p className="news-card-excerpt">{p.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactDock />
    </>
  );
}
