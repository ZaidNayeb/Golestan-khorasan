import { Suspense } from "react";
import type { Metadata } from "next";
import { PageBanner }     from "@/components/PageBanner";
import { ProductsClient } from "@/components/ProductsClient";
import { ContactDock }    from "@/components/ContactDock";

export const metadata: Metadata = {
  title: "محصولات",
  description: "آبمیوه‌های طبیعی، خمیرمایه‌های باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان.",
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        crumb="محصولات"
        eyebrow="کاتالوگ پانسی"
        title="همه‌ی محصولات ما، یکجا"
        desc="از آبمیوه‌های طبیعی تا خمیرمایه‌ی صنعتی؛ سبد محصولات پانسی برای خانه و کسب‌و‌کار."
      />
      <Suspense fallback={null}>
        <ProductsClient />
      </Suspense>
      <ContactDock />
    </>
  );
}
