export const siteConfig = {
  name: "گلستان خراسان",
  brand: "پانسی",
  tagline: "از دل طبیعت",
  description:
    "پانسی — آبمیوه‌های طبیعی، مخمر باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان.",
  url: "https://golestankhorasan.af",
  address: "هرات، ناحیه صنعتی، افغانستان",
  phone: "+93 700 000 000",
  fax: "+93 700 000 001",
  email: "info@pansy.af",
  workingHours: "شنبه تا پنجشنبه، ۸ صبح تا ۵ عصر"
};

export const navLinks: { href: string; label: string; side: "right" | "left" }[] = [
  { href: "/",         label: "صفحه نخست", side: "right" },
  { href: "/products", label: "محصولات",    side: "right" },
  { href: "/blog",     label: "اخبار",      side: "right" },
  { href: "/about",    label: "درباره ما",  side: "left"  },
  { href: "/contact",  label: "تماس با ما", side: "left"  },
];

export const categories = [
  {
    slug:  "orange",
    title: "رانی پرتقال",
    image: "/images/product-1-preview.jpg",
    dotColor: "orange" as const,
  },
  {
    slug:  "peach",
    title: "رانی شفتالو",
    image: "/images/product-2-preview.jpg",
    dotColor: "orange" as const,
  },
  {
    slug:  "yeast",
    title: "خمیرمایه",
    image: "/images/product-3-preview.jpg",
    dotColor: "purple" as const,
  },
  {
    slug:  "packaged",
    title: "بسته‌بندی",
    image: "/images/product-1-preview.jpg",
    dotColor: "blue" as const,
  },
];

export const products = [
  { slug: "orange-rani",  title: "رانی پرتقال",  category: "آبمیوه", image: "/images/product-1-preview.jpg", excerpt: "طعم تازه پرتقال با بسته‌بندی قفسه‌پسند.", popular: true  },
  { slug: "peach-rani",   title: "رانی شفتالو",  category: "آبمیوه", image: "/images/product-2-preview.jpg", excerpt: "نوشیدنی ملایم شفتالو برای خانواده.",     popular: true  },
  { slug: "apple-rani",   title: "رانی سیب",     category: "آبمیوه", image: "/images/product-3-preview.jpg", excerpt: "انتخابی سبک برای سفارش عمده.",          popular: false },
  { slug: "mixed-rani",   title: "رانی مخلوط",   category: "آبمیوه", image: "/images/product-1-preview.jpg", excerpt: "ترکیب چند میوه در یک بسته‌بندی.",       popular: true  },
  { slug: "dry-yeast",    title: "خمیرمایه خشک", category: "مخمر",   image: "/images/product-2-preview.jpg", excerpt: "مخمر فعال برای نانوایی و صنعت.",        popular: true  },
  { slug: "fast-yeast",   title: "خمیرمایه فوری", category: "مخمر",  image: "/images/product-3-preview.jpg", excerpt: "حل‌شونده سریع با کیفیت پایدار.",        popular: false },
];

export const posts = [
  {
    slug:    "company-update",
    title:   "گزارش تازه از مسیر توسعه پانسی",
    category:"اخبار شرکت",
    date:    "۱۵ حمل ۱۴۰۵",
    image:   "/images/product-1-preview.jpg",
    excerpt: "نگاهی کوتاه به برنامه‌های تولید و همکاری‌های فروشگاهی در سال جدید."
  },
  {
    slug:    "new-juice-line",
    title:   "معرفی خط تازه رانی‌های طبیعی",
    category:"محصول جدید",
    date:    "۲۸ حوت ۱۴۰۴",
    image:   "/images/product-2-preview.jpg",
    excerpt: "سری تازه رانی با تمرکز بر طعم‌های آشنا و بسته‌بندی مدرن."
  },
  {
    slug:    "retail-guide",
    title:   "نکات فروشگاهی برای چیدمان محصولات غذایی",
    category:"نکات فروشگاهی",
    date:    "۱۰ دلو ۱۴۰۴",
    image:   "/images/product-3-preview.jpg",
    excerpt: "چطور چیدمان درست و بسته‌بندی خوانا به فروش بیشتر کمک می‌کند."
  }
];
