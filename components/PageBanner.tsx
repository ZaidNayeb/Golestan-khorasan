import Link from "next/link";

interface PageBannerProps {
  crumb:   string;
  eyebrow: string;
  title:   string;
  desc?:   string;
}

export function PageBanner({ crumb, eyebrow, title, desc }: PageBannerProps) {
  return (
    <section className="page-banner">
      <div className="container">
        <div className="page-banner-crumb">
          <Link href="/">صفحه نخست</Link>
          <span className="sep">›</span>
          <span className="current">{crumb}</span>
        </div>
        <div className="page-banner-eyebrow">{eyebrow}</div>
        <h1 className="page-banner-title">{title}</h1>
        {desc && <p className="page-banner-desc">{desc}</p>}
      </div>
    </section>
  );
}
