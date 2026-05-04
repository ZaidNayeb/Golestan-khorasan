import Link from "next/link";
import { categories, siteConfig } from "@/data/site";

const companyLinks = [
  { href: "/about",    label: "درباره ما"   },
  { href: "/blog",     label: "اخبار"       },
  { href: "/contact",  label: "تماس با ما"  },
  { href: "/mixology", label: "میکسولوژی"   },
];

function TreeSilhouettes() {
  const trees = [
    { cx: 60,   h: 220 },
    { cx: 180,  h: 170 },
    { cx: 320,  h: 250 },
    { cx: 480,  h: 190 },
    { cx: 640,  h: 270 },
    { cx: 800,  h: 210 },
    { cx: 960,  h: 240 },
    { cx: 1120, h: 185 },
    { cx: 1280, h: 255 },
    { cx: 1400, h: 200 },
  ];

  return (
    <svg
      className="footer-trees"
      viewBox="0 0 1440 320"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {trees.map(({ cx, h }, i) => {
        const base = 320;
        const top  = base - h;
        const w    = h * 0.14;
        const tw   = 4;

        return (
          <g key={i} fill="white">
            {/* Crown: stacked ellipses give a cypress/poplar feel */}
            <ellipse cx={cx} cy={top + h * 0.45} rx={w} ry={h * 0.5} />
            {/* Trunk */}
            <rect x={cx - tw / 2} y={base - 20} width={tw} height={20} />
          </g>
        );
      })}
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="footer-v2">
      <TreeSilhouettes />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              <span className="footer-brand-logo-circle">
                <img
                  src="/images/pansy-logo.svg"
                  alt=""
                  className="h-7 w-7 object-contain brightness-0 invert"
                />
              </span>
              <strong className="text-xl font-black">{siteConfig.brand}</strong>
            </div>
            <p className="footer-tagline">{siteConfig.tagline}</p>
            <div className="footer-socials">
              {/* LinkedIn */}
              <a href="#" aria-label="لینکدین" className="footer-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="اینستاگرام" className="footer-social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Aparat */}
              <a href="#" aria-label="آپارات" className="footer-social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <polygon points="10,8 16,12 10,16" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="footer-col-title">محصولات</h3>
            <ul className="footer-col-links">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products?category=${cat.slug}`}>{cat.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="footer-col-title">شرکت</h3>
            <ul className="footer-col-links">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer-col-title">گروه گلستان خراسان</h3>
            <div className="footer-address-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {siteConfig.address}
            </div>
            <div className="footer-address-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.phone}
            </div>
            <div className="footer-address-line">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {siteConfig.email}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © ۱۴۰۵ کلیه حقوق مادی و معنوی این سایت متعلق به گروه گلستان خراسان (پانسی) می‌باشد
          </p>
        </div>
      </div>
    </footer>
  );
}
