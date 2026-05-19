import { Reveal } from "@/components/reveal";
import { promises } from "@/data/site";

const ICONS = [
  // Natural / Leaf
  <svg key="0" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 56C32 56 12 42 12 26a20 20 0 0 1 40 0c0 16-20 30-20 30z" />
    <path d="M32 36V56" />
    <path d="M22 30 Q32 24 42 30" />
    <path d="M18 36 Q32 28 46 36" />
  </svg>,
  // Quality / Shield check
  <svg key="1" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 8 L52 16 V32 C52 44 42 54 32 58 C22 54 12 44 12 32 V16 Z" />
    <path d="M22 32 L29 39 L42 26" />
  </svg>,
  // Trust / Heart hands
  <svg key="2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 20 C32 20 20 10 14 18 C8 26 20 34 32 44 C44 34 56 26 50 18 C44 10 32 20 32 20Z" />
    <path d="M16 50 H48" />
    <path d="M20 56 H44" />
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
            <Reveal key={p.name} delay={i * 0.12} className="promise-cell">
              <div className="promise-icon">{ICONS[i]}</div>
              <div className="promise-icon-line" />
              <h3 className="promise-name">{p.name}</h3>
              <p className="promise-desc">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
