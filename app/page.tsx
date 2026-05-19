import type { Metadata } from "next";
import { Hero }           from "@/components/Hero";
import { Marquee }        from "@/components/Marquee";
import { ProductsSection } from "@/components/Categories";
import { StorySection }   from "@/components/Advantage";
import { PromiseSection } from "@/components/Promise";
import { GallerySection } from "@/components/Gallery";
import { ContactDock }    from "@/components/ContactDock";

export const metadata: Metadata = {
  title: "خانه",
  description: "پانسی — آبمیوه‌های طبیعی، مخمر باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ProductsSection />
      <StorySection />
      <PromiseSection />
      <GallerySection />
      <ContactDock />
    </>
  );
}
