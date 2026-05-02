"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "shadow-md" : "border-b border-slate-100"
        )}
      >
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-700">
              <img
                src="/images/pansy-logo.svg"
                alt="گلستان خراسان"
                className="h-6 w-6 object-contain brightness-0 invert"
              />
            </span>
            <div>
              <span className="block text-base font-black text-blue-900">گلستان خراسان</span>
              <span className="hidden text-xs text-slate-500 md:block">تولیدکننده مواد غذایی</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="منوی اصلی">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition hover:bg-blue-50 hover:text-blue-900",
                  pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                    ? "bg-blue-700 text-white hover:bg-blue-800 hover:text-white"
                    : "text-slate-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn-primary hidden lg:inline-flex">
              درخواست همکاری
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 lg:hidden"
              aria-label="باز کردن منو"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
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
              <span className="text-lg font-black text-blue-900">گلستان خراسان</span>
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
                    pathname === link.href
                      ? "bg-blue-700 text-white"
                      : "bg-slate-50 text-slate-800 hover:bg-blue-50 hover:text-blue-800"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-auto text-center"
            >
              درخواست همکاری
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
