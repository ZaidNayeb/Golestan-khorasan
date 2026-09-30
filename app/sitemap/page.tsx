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
      <section className="legal-page">
        <div className="container">
          <div className="legal-inner">
            <h1>نقشه‌ی سایت</h1>
            <p className="legal-lead">تمام صفحات وب‌سایت پانسی – گروه گلستان خراسان</p>

            <h2>صفحات اصلی</h2>
            <ul>
              {navLinks.map((l) => (
                <li key={l.key}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>

            <h2>محصولات</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products#${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>

            <h2>قانونی</h2>
            <ul>
              <li><Link href="/privacy">حریم خصوصی</Link></li>
              <li><Link href="/terms">شرایط استفاده</Link></li>
              <li><Link href="/sitemap">نقشه‌ی سایت</Link></li>
            </ul>

            <div className="legal-actions">
              <Link href="/" className="btn btn-primary">
                صفحه نخست
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactDock />
    </>
  );
}
