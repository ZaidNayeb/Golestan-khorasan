import Link from "next/link";
import { navLinks, products, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="brand-mark">
            <span className="mark-circle">
              <img src="/images/pansy-logo.svg" alt="پانسی" />
            </span>
            <span>
              <span className="brand-name">پانسی</span>
              <span className="brand-tag">از دل طبیعت</span>
            </span>
          </div>
          <p className="footer-brand-text">
            گروه گلستان خراسان، تولیدکننده‌ی نوشیدنی‌های طبیعی، خمیرمایه و محصولات بسته‌بندی
            شده با بیش از دو دهه تجربه در صنعت غذای منطقه.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social" aria-label="اینستاگرام">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="لینکدین">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="آپارات">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l6 4-6 4z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="footer-col-title">محصولات</h4>
          <ul className="footer-links">
            {products.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link href={`/products#${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="footer-col-title">شرکت</h4>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.key}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="footer-col-title">گروه گلستان خراسان</h4>
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{siteConfig.address}</span>
          </div>
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="en">{siteConfig.phone}</span>
          </div>
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="en">{siteConfig.email}</span>
          </div>
          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>شنبه تا پنجشنبه، ۸ تا ۱۷</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">
          © ۱۴۰۵ کلیه حقوق متعلق به گروه گلستان خراسان (پانسی) است.
        </p>
        <div className="footer-extra">
          <Link href="#">حریم خصوصی</Link>
          <Link href="#">شرایط استفاده</Link>
          <Link href="#">نقشه‌ی سایت</Link>
        </div>
      </div>
    </footer>
  );
}
