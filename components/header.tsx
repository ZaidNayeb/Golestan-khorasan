"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

const rightLinks = navLinks.filter((l) => l.side === "right");
const leftLinks  = navLinks.filter((l) => l.side === "left");

export function Header() {
  const pathname = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "shadow-md" : "border-b border-slate-100"
        )}
      >
        {/* ── Desktop: 3-col grid [right-nav | logo | left-nav] ── */}
        <div className="container header-desktop-grid hidden h-20 items-center lg:grid">
          <nav className="flex items-center justify-start gap-1" aria-label="منوی اصلی">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition hover:text-brand-blue",
                  isActive(link.href) ? "text-brand-blue" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center">
            <Link href="/" className="flex items-center justify-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-700 shadow-soft">
                <img
                  src="/images/pansy-logo.svg"
                  alt="پانسی"
                  className="h-7 w-7 object-contain brightness-0 invert"
                />
              </span>
            </Link>
          </div>

          <nav className="flex items-center justify-end gap-1" aria-label="منوی فرعی">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition hover:text-brand-blue",
                  isActive(link.href) ? "text-brand-blue" : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Mobile: logo + hamburger ── */}
        <div className="container flex h-20 items-center justify-between lg:hidden">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-700">
              <img
                src="/images/pansy-logo.svg"
                alt="پانسی"
                className="h-6 w-6 object-contain brightness-0 invert"
              />
            </span>
            <span className="text-base font-black text-blue-900">پانسی</span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700"
            aria-label="باز کردن منو"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-black text-blue-900">پانسی</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-700"
                aria-label="بستن منو"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-bold transition",
                    isActive(link.href)
                      ? "bg-blue-700 text-white"
                      : "bg-slate-50 text-slate-800 hover:bg-blue-50 hover:text-blue-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
