import type { Metadata } from "next";
import { PageBanner } from "@/components/PageBanner";
import { NewsClient } from "./NewsClient";

export const metadata: Metadata = {
  title: "اخبار",
  description: "گزارش از مسیر توسعه‌ی گروه گلستان خراسان، محصولات جدید، رویدادهای صنعت غذا و دیدگاه‌های تیم ما.",
};

export default function NewsPage() {
  return (
    <>
      <PageBanner
        crumb="اخبار"
        eyebrow="گزارش‌ها و رویدادها"
        title="آخرین خبرهای پانسی"
        desc="گزارش از مسیر توسعه‌ی گروه گلستان خراسان، محصولات جدید، رویدادهای صنعت غذا و دیدگاه‌های تیم ما."
      />
      <NewsClient />
    </>
  );
}
