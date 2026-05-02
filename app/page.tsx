import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { categories, posts, products, stats } from "@/data/site";

export const metadata: Metadata = {
  title: "خانه",
  description: "گلستان خراسان تولیدکننده آبمیوه، مخمر و محصولات غذایی بسته‌بندی شده در هرات."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProducts />
      <About />
      <Categories />
      <Blog />
      <CTA />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero — light, clean, Sunich-style (no video/dark gradient)
───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-blue-50 py-16 md:py-24 lg:py-32">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        {/* Product image */}
        <div className="relative">
          <div
            className="absolute -inset-3 rounded-[2rem] bg-blue-200/40"
            aria-hidden="true"
          />
          <img
            src="/images/product-1-preview.jpg"
            alt="محصولات گلستان خراسان"
            className="relative h-[460px] w-full rounded-3xl object-cover shadow-card"
          />
          <div className="absolute bottom-5 right-5 rounded-2xl border border-blue-100 bg-white/95 p-4 shadow-card">
            <p className="text-sm font-bold text-ink">سبد محصول کامل</p>
            <p className="mt-0.5 text-xs text-slate-500">آبمیوه، مخمر و مواد غذایی</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="eyebrow">تولیدکننده مواد غذایی در هرات</span>
          <h1 className="mt-6 text-5xl font-black leading-[1.3] text-ink md:text-6xl lg:text-7xl">
            طعمی که
            <br />
            <span className="text-blue-700">اعتماد می‌آورد</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-500">
            آبمیوه‌های طبیعی، مخمر باکیفیت و محصولات غذایی بسته‌بندی شده برای بازار
            افغانستان — از هرات برای همه.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className="btn-primary">
              مشاهده محصولات
              <ChevronLeft className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Stats
───────────────────────────────────────────────────────────── */
function Stats() {
  return (
    <div className="border-b border-slate-100 bg-white">
      <div className="container grid grid-cols-2 divide-x divide-x-reverse divide-slate-100 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 text-center">
            <strong className="block text-3xl font-black text-blue-700">{s.value}</strong>
            <span className="mt-1 block text-sm text-slate-500">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Featured Products
───────────────────────────────────────────────────────────── */
function FeaturedProducts() {
  const featured = products.filter((p) => p.popular).slice(0, 3);
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">محصولات برگزیده</span>
            <h2 className="mt-4 text-4xl font-black text-ink md:text-5xl">پرفروش‌ترین محصولات</h2>
            <p className="mt-3 text-slate-500">محصولاتی با بیشترین تقاضا در بازار فروشگاهی و عمده.</p>
          </div>
          <Link href="/products" className="btn-outline shrink-0">
            همه محصولات <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group card block overflow-hidden hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold text-blue-600">{product.category}</span>
                <h3 className="mt-2 text-lg font-black text-ink">{product.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{product.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700">
                  مشاهده <ChevronLeft className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   About Preview
───────────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="section bg-blue-50">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <img
          src="/images/product-2-preview.jpg"
          alt="کارخانه گلستان خراسان"
          className="h-[420px] w-full rounded-3xl object-cover shadow-card"
        />
        <div>
          <span className="eyebrow">درباره ما</span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-ink md:text-5xl">
            برندی ساخته شده<br />بر پایه اعتماد
          </h2>
          <p className="mt-5 leading-8 text-slate-500">
            گلستان خراسان از سال ۱۳۹۵ با تمرکز بر تولید منظم، بسته‌بندی حرفه‌ای و
            همکاری پایدار با بازار هرات فعالیت می‌کند. هدف ما ارائه محصولاتی است که
            در قفسه دیده شوند، فروخته شوند و دوباره خریده شوند.
          </p>
          <ul className="mt-8 grid gap-3">
            {[
              "مواد اولیه باکیفیت با کنترل ورودی دقیق",
              "بسته‌بندی مناسب برای قفسه‌های فروشگاهی",
              "تامین منظم برای فروشگاه‌ها و عمده‌فروشان",
              "پاسخ‌گویی سریع برای درخواست‌های همکاری"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-700 text-xs text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-primary mt-8">
            بیشتر بدانید <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Categories — Sunich-style full image cards with overlay text
───────────────────────────────────────────────────────────── */
function Categories() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center">
          <span className="eyebrow">دسته‌بندی محصولات</span>
          <h2 className="mt-4 text-4xl font-black text-ink md:text-5xl">سبد محصولات ما</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            از آبمیوه‌های طبیعی تا مخمر صنعتی — یک مسیر تامین برای همه نیازها.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group relative block overflow-hidden rounded-2xl shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-black text-white">{cat.title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/70">{cat.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-300 transition group-hover:gap-2">
                  مشاهده <ChevronLeft className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Blog Preview
───────────────────────────────────────────────────────────── */
function Blog() {
  return (
    <section className="section bg-blue-50">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">اخبار و مقالات</span>
            <h2 className="mt-4 text-4xl font-black text-ink md:text-5xl">آخرین مطالب</h2>
          </div>
          <Link href="/blog" className="btn-outline shrink-0">
            مشاهده همه <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card block overflow-hidden hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-blue-600">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-black leading-7 text-ink">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CTA
───────────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="section bg-blue-700">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-bold text-white/80">
            همکاری عمده
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
            برای خرید عمده یا همکاری فروشگاهی با ما در ارتباط باشید
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/80">
            تیم فروش گلستان خراسان آماده پاسخ به درخواست‌های همکاری، قیمت‌گذاری و
            تامین منظم است.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-700 shadow-soft transition hover:bg-blue-50 hover:-translate-y-0.5"
            >
              تماس با ما <ChevronLeft className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost-white">
              درخواست نمونه محصول
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
