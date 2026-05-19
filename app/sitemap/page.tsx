import type { Metadata } from "next";
import Link from "next/link";
import { ContactDock } from "@/components/ContactDock";
import { navLinks, products } from "@/data/site";

export const metadata: Metadata = {
  title: "نقشه‌ی سایت",
  description: "نقشه‌ی کامل صفحات وب‌سایت گروه گلستان خراسان (پانسی).",
};

export default function SitemapPage() {
  return (
    <>
      <section className="coming-soon">
        <div className="container cs-inner">
          <h1 className="cs-title">
            <span className="accent">نقشه‌ی سایت</span>
          </h1>

          <p className="cs-desc">تمام صفحات وب‌سایت پانسی</p>

          <div style={{ textAlign: "right", width: "100%", maxWidth: "480px", margin: "0 auto" }}>
            <h3 style={{ marginBottom: "0.75rem", fontSize: "1rem", opacity: 0.6 }}>صفحات اصلی</h3>
            <ul className="footer-links" style={{ marginBottom: "2rem" }}>
              {navLinks.map((l) => (
                <li key={l.key}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>

            <h3 style={{ marginBottom: "0.75rem", fontSize: "1rem", opacity: 0.6 }}>محصولات</h3>
            <ul className="footer-links" style={{ marginBottom: "2rem" }}>
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products#${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>

            <h3 style={{ marginBottom: "0.75rem", fontSize: "1rem", opacity: 0.6 }}>قانونی</h3>
            <ul className="footer-links">
              <li><Link href="/privacy">حریم خصوصی</Link></li>
              <li><Link href="/terms">شرایط استفاده</Link></li>
            </ul>
          </div>

          <div className="cs-actions" style={{ marginTop: "2.5rem" }}>
            <Link href="/" className="btn btn-primary">
              صفحه نخست
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <ContactDock />
    </>
  );
}
