import type { Metadata } from "next";
import Link from "next/link";
import { ContactDock } from "@/components/ContactDock";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان گروه گلستان خراسان — از باغ‌های نخستین تا خط تولید امروز.",
};

export default function AboutPage() {
  return (
    <>
      <section className="coming-soon">
        <div className="container cs-inner">
          <span className="cs-badge">
            <span className="dot" />
            <span>به زودی</span>
          </span>

          <h1 className="cs-title">
            صفحه‌ی <span className="accent">درباره ما</span>
            <br />در راه است
          </h1>

          <p className="cs-desc">
            داریم روی روایت کامل‌تری از مسیر گروه گلستان خراسان کار می‌کنیم؛ از باغ‌های نخستین
            تا خط تولید امروز، تیم پانسی، و باوری که بیش از دو دهه کنار سفره‌های شما بوده است.
          </p>

          <div className="cs-illustration">
            <img src="/images/pansy-orange-3d.png" alt="پانسی" />
          </div>

          <div className="cs-eta">
            <svg
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ color: "var(--orange)" }}
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>زمان انتشار تخمینی:</span>
            <span className="num en">۲ هفته</span>
          </div>

          <div className="cs-actions">
            <Link href="/products" className="btn btn-primary">
              مشاهده محصولات
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-ghost">تماس با ما</Link>
          </div>
        </div>
      </section>
      <ContactDock />
    </>
  );
}
