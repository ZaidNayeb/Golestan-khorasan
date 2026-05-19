"use client";

import { useState } from "react";
import { PageBanner } from "@/components/PageBanner";
import { siteConfig }  from "@/data/site";

const CHANNELS = [
  {
    key:   "phone",
    label: "تماس تلفنی",
    value: siteConfig.phone,
    href:  `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    color: "#0E4FA3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key:   "ig",
    label: "اینستاگرام",
    value: "@pansy.official",
    href:  "#",
    color: "#E1306C",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key:   "fb",
    label: "فیسبوک",
    value: "Pansy Foods",
    href:  "#",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    key:   "tg",
    label: "تلگرام",
    value: "@pansyfoods",
    href:  "#",
    color: "#0088CC",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M21.93 3.24 2.56 10.9c-1.32.53-1.31 1.27-.24 1.6l4.84 1.51 11.2-7.06c.53-.32 1.01-.15.61.2L8.85 16.38l-.36 5.04c.52 0 .75-.24 1.04-.51l2.49-2.42 5.18 3.83c.95.53 1.64.26 1.87-.88l3.39-15.97c.35-1.4-.53-2.03-1.53-1.23z" />
      </svg>
    ),
  },
  {
    key:   "wa",
    label: "واتس‌اپ",
    value: "گفت‌وگوی فوری با تیم پشتیبانی",
    href:  "#",
    color: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07a8.17 8.17 0 0 1-2.4-1.48 9.03 9.03 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.91-2.2-.24-.57-.48-.5-.67-.5-.17 0-.37-.03-.57-.03s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.24-.7.24-1.29.17-1.41-.07-.12-.27-.2-.57-.35zm-5.4 7.37h-.02a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.73.98 1-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.19 6.64 6.56 2.27 12.08 2.27a9.81 9.81 0 0 1 6.98 2.9 9.8 9.8 0 0 1 2.89 6.97c0 5.52-4.37 9.89-9.88 9.89v.62z" />
      </svg>
    ),
  },
];

const HOURS = [
  { day: "شنبه",      time: "۸:۰۰ — ۱۷:۰۰" },
  { day: "یک‌شنبه",   time: "۸:۰۰ — ۱۷:۰۰" },
  { day: "دوشنبه",    time: "۸:۰۰ — ۱۷:۰۰" },
  { day: "سه‌شنبه",   time: "۸:۰۰ — ۱۷:۰۰" },
  { day: "چهارشنبه",  time: "۸:۰۰ — ۱۷:۰۰" },
  { day: "پنجشنبه",   time: "۸:۰۰ — ۱۳:۰۰" },
  { day: "جمعه",      time: "تعطیل", closed: true },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [topic,     setTopic]     = useState("general");

  return (
    <>
      <PageBanner
        crumb="تماس با ما"
        eyebrow="گفت‌وگو با تیم پانسی"
        title="هر زمان، از هر کانالی"
        desc="برای همکاری، نمایندگی، پرسش‌های فروشگاهی یا بازخورد محصول، یکی از روش‌های زیر را انتخاب کنید."
      />

      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Left: channels + hours */}
            <div className="contact-side">
              <div className="contact-channels">
                {CHANNELS.map(c => (
                  <a key={c.key} href={c.href} className="channel-card">
                    <span className="ch-ic" style={{ color: c.color }}>{c.icon}</span>
                    <span>
                      <span className="ch-lbl">{c.label}</span>
                      <div className="ch-val">{c.value}</div>
                    </span>
                    <span className="ch-arrow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>

              <div className="hours-strip">
                <h4>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  ساعات کاری دفتر
                </h4>
                <ul className="hours-list">
                  {HOURS.map(h => (
                    <li key={h.day}>
                      <span className="day">{h.day}</span>
                      <span className={h.closed ? "closed" : "time"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form */}
            <form
              className="contact-form"
              onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
            >
              <h3>پیام شما</h3>
              <p>تیم ما در ساعات کاری حداکثر طی ۲۴ ساعت پاسخگو خواهد بود.</p>

              {submitted ? (
                <div className="form-success">
                  <div className="form-success-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4>پیام شما ارسال شد</h4>
                  <p>به‌زودی با شما در تماس خواهیم بود.</p>
                </div>
              ) : (
                <>
                  <div className="field-row">
                    <div className="field">
                      <label>نام و نام خانوادگی</label>
                      <input type="text" placeholder="مثلاً: احمد رضایی" />
                    </div>
                    <div className="field">
                      <label>شماره تماس</label>
                      <input type="tel" placeholder="+93 ..." className="en" dir="ltr" />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>ایمیل</label>
                      <input type="email" placeholder="you@example.com" className="en" dir="ltr" />
                    </div>
                    <div className="field">
                      <label>موضوع</label>
                      <select value={topic} onChange={e => setTopic(e.target.value)}>
                        <option value="general">گفت‌وگوی عمومی</option>
                        <option value="b2b">همکاری / نمایندگی</option>
                        <option value="retail">پرسش فروشگاهی</option>
                        <option value="feedback">بازخورد محصول</option>
                        <option value="press">رسانه و خبرنگاران</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>پیام</label>
                    <textarea placeholder="کمی توضیح بدهید..." />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                    ارسال پیام
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
