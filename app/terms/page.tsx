import type { Metadata } from "next";
import Link from "next/link";
import { ContactDock } from "@/components/ContactDock";

export const metadata: Metadata = {
  title: "شرایط استفاده",
  description: "شرایط و ضوابط استفاده از وب‌سایت گروه گلستان خراسان (پانسی).",
};

export default function TermsPage() {
  return (
    <>
      <section className="coming-soon">
        <div className="container cs-inner">
          <span className="cs-badge">
            <span className="dot" />
            <span>به زودی</span>
          </span>

          <h1 className="cs-title">
            صفحه‌ی <span className="accent">شرایط استفاده</span>
            <br />در راه است
          </h1>

          <p className="cs-desc">
            شرایط و ضوابط استفاده از وب‌سایت و خدمات گروه گلستان خراسان به زودی
            در این صفحه منتشر خواهد شد.
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
            <Link href="/contact" className="btn btn-ghost">تماس با ما</Link>
          </div>
        </div>
      </section>
      <ContactDock />
    </>
  );
}
