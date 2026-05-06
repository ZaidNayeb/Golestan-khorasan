"use client";

import { useState } from "react";
import { PageBanner }  from "@/components/PageBanner";
import { ContactDock } from "@/components/ContactDock";
import { posts }       from "@/data/site";

const TABS = [
  { key: "all",     label: "همه"             },
  { key: "company", label: "اخبار شرکت"      },
  { key: "product", label: "محصول جدید"       },
  { key: "retail",  label: "نکات فروشگاهی"   },
  { key: "tech",    label: "تکنولوژی"        },
];

function PlaceholderImg({ label }: { label: string }) {
  return (
    <div className="story-placeholder" style={{ fontSize: 11 }}>{label}</div>
  );
}

export default function NewsPage() {
  const [tab, setTab] = useState("all");

  const featured = posts.find(p => p.featured) ?? posts[0];
  const rest      = posts.filter(p => p !== featured);
  const filtered  = tab === "all" ? rest : rest.filter(p => p.catKey === tab);

  return (
    <>
      <PageBanner
        crumb="اخبار"
        eyebrow="گزارش‌ها و رویدادها"
        title="آخرین خبرهای پانسی"
        desc="گزارش از مسیر توسعه‌ی گروه گلستان خراسان، محصولات جدید، رویدادهای صنعت غذا و دیدگاه‌های تیم ما."
      />

      <section className="news-page">
        <div className="container">
          {/* Featured + mini grid */}
          <div className="news-hero-grid">
            <a href="#" className="news-hero">
              {featured.img
                ? <img src={featured.img} alt={featured.title} />
                : <PlaceholderImg label="FEATURED PHOTO" />
              }
              <div className="news-hero-body">
                <span className="news-hero-cat">{featured.cat}</span>
                <h2 className="news-hero-title">{featured.title}</h2>
                <div className="news-hero-meta">
                  <span className="en">{featured.date}</span>
                  <span>·</span>
                  <span>{featured.read}</span>
                </div>
              </div>
            </a>

            <div className="news-secondary">
              {rest.slice(0, 3).map(p => (
                <a key={p.slug} href="#" className="news-mini">
                  <div className="news-mini-img">
                    {p.img
                      ? <img src={p.img} alt={p.title} />
                      : <PlaceholderImg label="THUMB" />
                    }
                  </div>
                  <div>
                    <span className="news-mini-cat">{p.cat}</span>
                    <h3 className="news-mini-title">{p.title}</h3>
                    <span className="news-mini-date en">{p.date}</span>
                  </div>
                </a>
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
              <a key={p.slug} href="#" className="news-card">
                <div className="news-card-img">
                  {p.img
                    ? <img src={p.img} alt={p.title} />
                    : <PlaceholderImg label="EDITORIAL PHOTO" />
                  }
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
                  <span className="news-card-cta">
                    ادامه‌ی مطلب
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactDock />
    </>
  );
}
