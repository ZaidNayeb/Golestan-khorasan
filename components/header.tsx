"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";

export function Header() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = (key: string) => {
    if (key === "home") return pathname === "/";
    return pathname.startsWith(`/${key}`);
  };

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-row">
          <Link href="/" className="brand-mark">
            <span className="mark-circle">
              <img src="/images/pansy-logo.svg" alt="پانسی" />
            </span>
            <span>
              <span className="brand-name">پانسی</span>
              <span className="brand-tag">از دل طبیعت</span>
            </span>
          </Link>

          <nav className="nav-main" aria-label="منوی اصلی">
            {navLinks.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className={active(l.key) ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="lang-switch">
            <button className="active">FA</button>
            <button>EN</button>
          </div>

          <button
            className="mobile-toggle"
            aria-label="باز کردن منو"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-drawer-bg" onClick={() => setOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-head">
              <span className="brand-name" style={{ color: "var(--brand-blue-deep)" }}>پانسی</span>
              <button onClick={() => setOpen(false)} aria-label="بستن">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="mobile-drawer-nav">
              {navLinks.map((l) => (
                <Link
                  key={l.key}
                  href={l.href}
                  className={active(l.key) ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
