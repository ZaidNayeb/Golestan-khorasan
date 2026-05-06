import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { homeProductCards } from "@/data/site";

export function ProductsSection() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">محصولات پانسی</div>
            <h2 className="section-title">طعم‌هایی که سال‌هاست همراه شماست</h2>
          </div>
          <p className="section-sub">
            سبد محصولات گلستان خراسان از آبمیوه‌های طبیعی تا خمیرمایه‌ی صنعتی را در بر می‌گیرد؛
            هر کدام با تمرکز بر کیفیت، طعم و سلامت تولید می‌شود.
          </p>
        </div>

        <div className="product-grid">
          {homeProductCards.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <Link href="/products" className={`product-card ${p.cls}`}>
                <span className="product-card-bg-circle" />
                <div className="product-card-head">
                  <span className="product-card-cat">{p.cat}</span>
                  <span className="product-card-num en">{p.num} / 03</span>
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3 className="product-card-name">{p.name}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                </div>
                <img src={p.img} alt={p.name} className="product-card-img" />
                <span className="product-card-cta">
                  مشاهده محصول
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
