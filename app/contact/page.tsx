import type { Metadata } from "next";
import { PageBanner }    from "@/components/PageBanner";
import { ContactClient } from "./ContactClient";
import { ContactDock }   from "@/components/ContactDock";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "برای همکاری، نمایندگی، پرسش‌های فروشگاهی یا بازخورد محصول، با تیم گروه گلستان خراسان (پانسی) تماس بگیرید.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        crumb="تماس با ما"
        eyebrow="گفت‌وگو با تیم پانسی"
        title="هر زمان، از هر کانالی"
        desc="برای همکاری، نمایندگی، پرسش‌های فروشگاهی یا بازخورد محصول، یکی از روش‌های زیر را انتخاب کنید."
      />
      <ContactClient />
      <ContactDock />
    </>
  );
}
