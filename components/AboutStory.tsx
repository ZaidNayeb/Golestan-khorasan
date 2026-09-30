import { Reveal } from "@/components/reveal";
import { stats } from "@/data/site";

export function AboutStorySection() {
  return (
    <section className="story" id="about-story">
      <div className="container story-grid">
        <Reveal className="story-copy">
          <div className="section-eyebrow">داستان ما</div>
          <h2 className="section-title">از باغ‌های خراسان، تا سفره‌های شما</h2>
          <blockquote className="story-quote">
            «گاهی برخی طعم‌ها به بخشی از خاطره‌ی نسل‌ها بدل می‌شوند؛ پانسی برای ما همین قصه است.»
          </blockquote>
          <p className="story-text">
            گروه گلستان خراسان کار خود را با یک کارگاه کوچک تولید آبمیوه در هرات آغاز کرد؛ جایی
            که بهترین پرتقال‌ها و شفتالوهای منطقه به دست تیمی کوچک اما باورمند فرآوری می‌شدند.
            امروز، پس از سال‌ها رشد پیوسته، پانسی با خطوط تولید مدرن، آزمایش‌های مرحله‌ای کیفیت
            و شبکه‌ای گسترده از همکاران فروش، همچنان بر همان باور نخستین ایستاده است: طعمی اصیل،
            از دل طبیعت.
          </p>
          <div className="story-meta">
            {stats.map((s) => (
              <div key={s.lbl}>
                <span className="num en">{s.num}</span>
                <span className="lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="story-visual">
          <img src="/images/pansy-story.jpg" alt="خط تولید گلستان خراسان" />
          <div className="badge">
            <span className="badge-circle">P</span>
            از سال ۱۳۷۸ تا کنون
          </div>
        </Reveal>
      </div>
    </section>
  );
}
