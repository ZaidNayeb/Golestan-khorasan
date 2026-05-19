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
            <div><span className="num">25+</span><span className="lbl">سال تجربه</span></div>
            <div><span className="num">12</span><span className="lbl">محصول فعال</span></div>
            <div><span className="num">34</span><span className="lbl">استان توزیع</span></div>
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
          <div className="story-placeholder">FACTORY / ORCHARD PHOTO · 4:5</div>
          <div className="badge">
            <span className="badge-circle">P</span>
            از سال ۱۳۷۸ تا کنون
          </div>
        </Reveal>
      </div>
    </section>
  );
}
