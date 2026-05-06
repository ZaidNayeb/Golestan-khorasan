import Link from "next/link";

const SOCIALS = [
  {
    key:   "ig",
    label: "اینستاگرام",
    href:  "#",
    color: "#E1306C",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key:   "fb",
    label: "فیسبوک",
    href:  "#",
    color: "#1877F2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    key:   "tg",
    label: "تلگرام",
    href:  "#",
    color: "#0088CC",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.93 3.24 2.56 10.9c-1.32.53-1.31 1.27-.24 1.6l4.84 1.51 11.2-7.06c.53-.32 1.01-.15.61.2L8.85 16.38l-.36 5.04c.52 0 .75-.24 1.04-.51l2.49-2.42 5.18 3.83c.95.53 1.64.26 1.87-.88l3.39-15.97c.35-1.4-.53-2.03-1.53-1.23z" />
      </svg>
    ),
  },
  {
    key:   "wa",
    label: "واتس‌اپ",
    href:  "#",
    color: "#25D366",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07a8.17 8.17 0 0 1-2.4-1.48 9.03 9.03 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.2-.24-.57-.48-.5-.67-.5-.17 0-.37-.03-.57-.03s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.24-.7.24-1.29.17-1.41-.07-.12-.27-.2-.57-.35zm-5.4 7.37h-.02a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98 1-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.19 6.64 6.56 2.27 12.08 2.27a9.81 9.81 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.97c0 5.52-4.37 9.89-9.88 9.89v.62z" />
      </svg>
    ),
  },
];

export function ContactDock() {
  return (
    <div className="contact-dock">
      <div className="contact-dock-accent" />
      <div className="contact-dock-icons">
        {SOCIALS.map((s) => (
          <Link
            key={s.key}
            href={s.href}
            aria-label={s.label}
            className="contact-dock-icon"
            style={{ color: s.color }}
          >
            {s.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
