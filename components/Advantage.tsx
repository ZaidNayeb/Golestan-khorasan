import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function StorySection() {
  return (
    <section className="story-section">
      <div className="container story-inner">
        {/* Copy — first in DOM = right column in RTL grid */}
        <div className="story-copy reveal">
          <h2 className="story-title">داستان ما</h2>
          <p className="story-text">
            گاهی برخی طعم‌ها تبدیل به بخشی از خاطرات نسل‌ها می‌شوند. گلستان خراسان
            با سال‌ها تجربه در تولید نوشیدنی‌های طبیعی، افتخار دارد که همراه نسل‌های
            متفاوت بوده است. داستان پانسی از خراسان آغاز شد، از زمینی که بهترین
            پرتقال‌ها و شفتالوهایش را به ما هدیه داد. با بهره‌گیری از مواد اولیه
            طبیعی، محصولات پانسی امروز در سراسر کشور توزیع می‌شود.
          </p>
          <Link href="/blog" className="btn-ghost-story">
            آخرین اخبار <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>

        {/* Circular image — second in DOM = left column in RTL grid */}
        <div className="story-image-wrap">
          <div className="story-circle">
            <img src="/images/pansy-story.png" alt="داستان پانسی" />
          </div>
        </div>
      </div>
    </section>
  );
}
