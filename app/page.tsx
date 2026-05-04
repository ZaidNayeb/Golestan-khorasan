import type { Metadata } from "next";
import { Hero }           from "@/components/Hero";
import { ProductsSection } from "@/components/Categories";
import { StorySection }   from "@/components/Advantage";

export const metadata: Metadata = {
  title: "خانه",
  description: "پانسی — آبمیوه‌های طبیعی، مخمر باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <StorySection />
    </>
  );
}
