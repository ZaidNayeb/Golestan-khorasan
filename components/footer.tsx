import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks, categories, siteConfig } from "@/data/site";

const socialIcons = [
  {
    label: "اینستاگرام",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    label: "فیسبوک",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  {
    label: "لینکدین",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                <img src="/images/pansy-logo.svg" alt="" className="h-7 w-7 brightness-0 invert" />
              </span>
              <strong className="text-xl">گلستان خراسان</strong>
            </div>
            <p className="mt-5 leading-7 text-white/60">
              تولیدکننده آبمیوه، مخمر و محصولات غذایی بسته‌بندی شده در هرات.
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-blue-600"
                >
                  {item.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white">دسترسی سریع</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/60">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white">محصولات</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/60">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products?category=${cat.slug}`} className="transition hover:text-white">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white">تماس</h3>
            <ul className="mt-5 grid gap-4 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-400" />
                {siteConfig.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <span>© ۱۴۰۵ گلستان خراسان. تمامی حقوق محفوظ است.</span>
          <span>{siteConfig.workingHours}</span>
        </div>
      </div>
    </footer>
  );
}
