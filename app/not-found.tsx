import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "صفحه پیدا نشد",
  description: "صفحه‌ی درخواستی در وب‌سایت پانسی – گلستان خراسان وجود ندارد.",
};

export default function NotFound() {
  return (
    <section className="coming-soon">
      <div className="container cs-inner">
        <span className="cs-badge">
          <span className="dot" />
          <span className="en" style={{ fontSize: 13, fontWeight: 800 }}>404</span>
        </span>

        <h1 className="cs-title">
          صفحه‌ای که دنبالش بودید
          <br />
          <span className="accent">پیدا نشد</span>
        </h1>

        <p className="cs-desc">
          ممکن است این صفحه حذف شده باشد، آدرس آن تغییر کرده باشد، یا اشتباهاً وارد شده باشد.
        </p>

        <div className="cs-illustration">
          <img src="/images/pansy-orange-3d.png" alt="پانسی" />
        </div>

        <div className="cs-actions">
          <Link href="/" className="btn btn-primary">
            صفحه نخست
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
          </Link>
          <Link href="/products" className="btn btn-ghost">مشاهده‌ی محصولات</Link>
        </div>
      </div>
    </section>
  );
}
