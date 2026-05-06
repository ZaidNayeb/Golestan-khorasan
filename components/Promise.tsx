import { Reveal } from "@/components/reveal";
import { promises } from "@/data/site";

const ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 2 5 5 5 9c0 4 3 7 7 7s7-3 7-7c0-4-3-7-7-7z" />
    <path d="M12 16v6" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="9" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>,
];

export function PromiseSection() {
  return (
    <section className="promise">
      <div className="container">
        <div className="promise-head">
          <div className="section-eyebrow">باور پانسی</div>
          <h2 className="section-title">سه اصلی که هر روز به آن پایبندیم</h2>
        </div>
        <div className="promise-grid">
          {promises.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1} className="promise-cell">
              <div className="promise-icon">{ICONS[i]}</div>
              <span className="promise-num en">{p.num}</span>
              <h3 className="promise-name">{p.name}</h3>
              <p className="promise-desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
