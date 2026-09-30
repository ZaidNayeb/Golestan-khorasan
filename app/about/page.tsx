import type { Metadata } from "next";
import { PageBanner }        from "@/components/PageBanner";
import { AboutStorySection } from "@/components/AboutStory";
import { TimelineSection }   from "@/components/Timeline";
import { PromiseSection }    from "@/components/Promise";
import { ContactDock }       from "@/components/ContactDock";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان گروه گلستان خراسان — از باغ‌های نخستین تا خط تولید امروز.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        crumb="درباره ما"
        eyebrow="گروه گلستان خراسان"
        title="داستانی که از باغ‌های خراسان شروع شد"
        desc="بیش از دو دهه تجربه در تولید آبمیوه‌های طبیعی و خمیرمایه‌ی باکیفیت؛ با باوری که هیچ‌وقت تغییر نکرده است."
      />
      <AboutStorySection />
      <TimelineSection />
      <PromiseSection />
      <ContactDock />
    </>
  );
}
