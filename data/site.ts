export const siteConfig = {
  name: "گلستان خراسان",
  tagline: "تولیدکننده مواد غذایی در هرات",
  description:
    "گلستان خراسان تولیدکننده نوشیدنی، آبمیوه و مخمر در هرات؛ آماده همکاری با فروشگاه‌ها، سوپرمارکت‌ها و خریداران عمده.",
  url: "https://golestankhorasan.af",
  address: "هرات، ناحیه صنعتی، افغانستان",
  phone: "+93 700 000 000",
  email: "info@golestankhorasan.af",
  workingHours: "شنبه تا پنجشنبه، ۸ صبح تا ۵ عصر"
};

export const navLinks = [
  { href: "/",         label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/about",    label: "درباره ما" },
  { href: "/blog",     label: "اخبار" },
  { href: "/contact",  label: "تماس با ما" }
];

export const stats = [
  { value: "+۲۰",  label: "محصول فعال" },
  { value: "+۵۰۰", label: "فروشگاه همکار" },
  { value: "هرات", label: "مرکز تولید" },
  { value: "QC",   label: "کیفیت تضمین‌شده" }
];

export const categories = [
  {
    slug:  "juice",
    title: "آبمیوه و نوشیدنی",
    text:  "آبمیوه‌های طبیعی و نوشیدنی‌های آماده با بسته‌بندی قفسه‌پسند.",
    image: "/images/product-1-preview.jpg"
  },
  {
    slug:  "yeast",
    title: "مخمر و محصولات تخمیری",
    text:  "مخمر باکیفیت برای نانوایی‌ها، کارخانه‌ها و مصرف صنعتی.",
    image: "/images/product-2-preview.jpg"
  },
  {
    slug:  "packaged",
    title: "مواد غذایی بسته‌بندی شده",
    text:  "سبد غذایی منظم برای فروشگاه‌ها، سوپرمارکت‌ها و پخش.",
    image: "/images/product-3-preview.jpg"
  }
];

export const products = [
  { slug: "mango-juice",    title: "آبمیوه انبه",        category: "آبمیوه",  image: "/images/product-1-preview.jpg", excerpt: "طعم گرم و شیرین با بسته‌بندی قفسه‌پسند.", popular: true  },
  { slug: "orange-juice",   title: "آبمیوه پرتقال",      category: "آبمیوه",  image: "/images/product-2-preview.jpg", excerpt: "نوشیدنی تازه با رنگ روشن و ظاهر جذاب.", popular: true  },
  { slug: "apple-juice",    title: "آبمیوه سیب",          category: "آبمیوه",  image: "/images/product-3-preview.jpg", excerpt: "انتخابی سبک برای خانواده و سفارش عمده.", popular: false },
  { slug: "mixed-juice",    title: "آبمیوه مخلوط",        category: "آبمیوه",  image: "/images/product-1-preview.jpg", excerpt: "ترکیب چند میوه در یک بسته‌بندی مطمئن.",  popular: true  },
  { slug: "dry-yeast",      title: "مخمر خشک",            category: "مخمر",   image: "/images/product-2-preview.jpg", excerpt: "مخمر فعال برای نانوایی و تولید صنعتی.",  popular: true  },
  { slug: "instant-yeast",  title: "مخمر فوری",           category: "مخمر",   image: "/images/product-3-preview.jpg", excerpt: "حل شونده سریع با کیفیت پایدار در تولید.", popular: false },
];

export const posts = [
  {
    slug:    "company-update",
    title:   "گزارش تازه از مسیر توسعه گلستان خراسان",
    category:"اخبار شرکت",
    date:    "۱۵ حمل ۱۴۰۵",
    image:   "/images/product-1-preview.jpg",
    excerpt: "نگاهی کوتاه به برنامه‌های تولید و همکاری‌های فروشگاهی در سال جدید."
  },
  {
    slug:    "new-juice-line",
    title:   "معرفی خط تازه آبمیوه‌های طبیعی",
    category:"محصول جدید",
    date:    "۲۸ حوت ۱۴۰۴",
    image:   "/images/product-2-preview.jpg",
    excerpt: "سری تازه آبمیوه با تمرکز بر طعم‌های آشنا و بسته‌بندی مدرن آماده معرفی است."
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
