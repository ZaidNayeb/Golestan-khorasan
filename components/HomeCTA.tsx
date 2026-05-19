import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div>
            <h2 className="cta-title">با پانسی همراه شوید</h2>
            <p className="cta-desc">
              برای دریافت کاتالوگ محصولات، فرصت‌های همکاری یا اطلاعات بیشتر درباره‌ی
              فروشگاه‌ها و توزیع‌کنندگان رسمی، با ما در ارتباط باشید.
            </p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-on-blue">
                تماس با ما
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                </svg>
              </Link>
              <Link href="/products" className="btn btn-on-blue-ghost">
                دانلود کاتالوگ
              </Link>
            </div>
          </div>
          <div className="cta-visual">
            <img src="/images/pansy-orange-3d.png" alt="پانسی" />
          </div>
        </div>
      </div>
    </section>
  );
}
