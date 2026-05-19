const ITEMS = [
  "از دل طبیعت", "گلستان خراسان", "آبمیوه‌های طبیعی",
  "خمیرمایه‌ی باکیفیت", "همراه چند نسل", "بسته‌بندی نوین",
  "از دل طبیعت", "گلستان خراسان", "آبمیوه‌های طبیعی",
  "خمیرمایه‌ی باکیفیت", "همراه چند نسل", "بسته‌بندی نوین",
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.7 5.7 21l2.3-7.2L2 9.4h7.6L12 2z" />
    </svg>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {ITEMS.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-star"><StarIcon /></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
