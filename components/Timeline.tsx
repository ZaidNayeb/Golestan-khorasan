import { Reveal } from "@/components/reveal";
import { milestones } from "@/data/site";

export function TimelineSection() {
  return (
    <section className="timeline">
      <div className="container">
        <div className="timeline-head promise-head">
          <div className="section-eyebrow">مسیر ما</div>
          <h2 className="section-title">قدم‌به‌قدم تا امروز</h2>
        </div>

        <div className="timeline-list">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.08} className="timeline-item">
              <span className="timeline-dot" />
              <span className="timeline-year en">{m.year}</span>
              <h3 className="timeline-title">{m.title}</h3>
              <p className="timeline-desc">{m.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
