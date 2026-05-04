"use client";

import Link from "next/link";
import { HeroRotator } from "./HeroRotator";

export function Hero() {
  return (
    <section className="hero-v2">
      <div className="container hero-v2-inner">
        {/* Copy — first in DOM = right column in RTL grid */}
        <div className="hero-v2-copy reveal">
          <div className="hero-v2-accent" aria-hidden="true" />
          <h1 className="hero-v2-title">
            پانسی،<br />از دل طبیعت
          </h1>
          <p className="hero-v2-desc">
            پانسی سال‌هاست همراه لحظه‌های شیرین زندگی شماست. از صبحانه‌های دلنشین
            تا جشن‌های خانوادگی، هر جا که نگاه کنی ردِ پای پانسی را می‌بینی.
            داستان ما از قلب خراسان و از دل طبیعت آغاز شد، از باغ‌های سرسبز و
            میوه‌های رسیده‌ای که با عشق به دست شما می‌رسند.
          </p>
          <Link href="/products" className="hero-v2-btn">
            مشاهده محصولات
          </Link>
        </div>

        {/* Image — second in DOM = left column in RTL grid */}
        <div className="hero-v2-image">
          <HeroRotator />
        </div>
      </div>
    </section>
  );
}
