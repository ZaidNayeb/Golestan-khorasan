import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function StorySection() {
  return (
    <section className="story" id="story">
      <div className="container story-grid">
        {/* Copy — right column in RTL */}
        <Reveal className="story-copy">
          <div className="section-eyebrow">داستان ما</div>
          <h2 className="section-title">از باغ‌های خراسان، تا سفره‌های شما</h2>
          <blockquote className="story-quote">
            «گاهی برخی طعم‌ها به بخشی از خاطره‌ی نسل‌ها بدل می‌شوند؛ پانسی برای ما همین قصه است.»
          </blockquote>
          <p className="story-text">
            گروه گلستان خراسان با سال‌ها تجربه در تولید نوشیدنی‌های طبیعی و فرآورده‌های پخت،
            افتخار دارد همراه نسل‌های مختلف بوده است. داستان پانسی از زمینی آغاز شد که بهترین
            پرتقال‌ها و شفتالوهایش را به ما هدیه داد. امروز با بهره‌گیری از فناوری‌های نوین و مواد
            اولیه‌ی طبیعی، محصولات پانسی در سراسر کشور توزیع می‌شود.
          </p>
          <div className="story-meta">
            <div><span className="num">۲۵+</span><span className="lbl">سال تجربه</span></div>
            <div><span className="num">۱۲</span><span className="lbl">محصول فعال</span></div>
            <div><span className="num">۳۴</span><span className="lbl">استان توزیع</span></div>
          </div>
          <div style={{ marginTop: 8 }}>
            <Link href="/news" className="btn btn-ghost" style={{ alignSelf: "flex-start" }}>
              آخرین اخبار
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* Visual — left column in RTL */}
        <Reveal delay={0.15} className="story-visual">
          {/* TODO: Replace with a real factory / orchard photo when available. */}
          <div
            className="story-placeholder"
            style={{
              background: "linear-gradient(160deg, #0E4FA3 0%, #1565c0 55%, #0a3d7a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/images/pansy-logo-new.png"
              alt="پانسی"
              style={{ width: 88, opacity: 0.18, filter: "brightness(10) saturate(0)" }}
            />
          </div>
          <div className="badge">
            <span className="badge-circle">
              <img
                src="/images/pansy-logo-new.png"
                alt="پانسی"
                style={{ width: 28, height: 28, objectFit: "contain" }}
              />
            </span>
            از سال ۱۳۷۸ تا کنون
          </div>
        </Reveal>
      </div>
    </section>
  );
}
