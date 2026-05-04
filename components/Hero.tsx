"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { HeroRotator } from "./HeroRotator";

export type HomepageData = {
  heroLead?: string;
  heroTitle?: string;
  heroStrap?: string;
};

export function Hero({ data }: { data: HomepageData }) {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        {/* ── Stage (rotator) ── */}
        <div className="hero-stage-wrap">
          <HeroRotator />
        </div>

        {/* ── Copy ── */}
        <div className="hero-copy reveal">
          <p className="hero-lead">طعم تازه برای فروش حرفه‌ای</p>
          <h1 className="hero-word">پانسی</h1>
          <p className="hero-strap">
            آبمیوه‌های طبیعی، مخمر باکیفیت و محصولات غذایی بسته‌بندی شده — از هرات برای بازارهای افغانستان.
          </p>
          <div className="hero-ctas">
            <Link href="/products" className="btn-primary">
              مشاهده محصولات <ChevronLeft className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
