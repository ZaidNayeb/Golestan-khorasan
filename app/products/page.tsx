import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsClient } from "@/components/ProductsClient";

export const metadata: Metadata = {
  title: "محصولات",
  description: "آبمیوه‌های طبیعی، خمیرمایه‌های باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="products-page-hero">
        <div className="container">
          <div className="products-page-hero-inner">
            <p className="eyebrow">محصولات ما</p>
            <h1 className="products-page-title">همه محصولات پانسی</h1>
            <p className="products-page-subtitle">
              آبمیوه‌های طبیعی، خمیرمایه‌های باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <ProductsClient />
      </Suspense>
    </>
  );
}
