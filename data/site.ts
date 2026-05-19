export const siteConfig = {
  name:         "گلستان خراسان",
  brand:        "پانسی",
  tagline:      "از دل طبیعت",
  description:  "پانسی — آبمیوه‌های طبیعی، مخمر باکیفیت و محصولات غذایی بسته‌بندی شده از قلب خراسان.",
  url:          "https://golestankhorasan.af",
  address:      "هرات، ناحیه‌ی صنعتی، شاهراه میدان هوایی",
  phone:        "+93 700 000 000",
  fax:          "+93 700 000 001",
  email:        "info@pansy.af",
  workingHours: "شنبه تا پنجشنبه، ۸ صبح تا ۵ عصر",
};

export const navLinks = [
  { href: "/",        label: "صفحه نخست", key: "home"     },
  { href: "/products",label: "محصولات",   key: "products" },
  { href: "/about",   label: "درباره ما", key: "about"    },
  { href: "/news",    label: "اخبار",     key: "news"     },
  { href: "/contact", label: "تماس با ما",key: "contact"  },
];

export const heroSlides = [
  {
    title:  ["پانسی،", "از دل طبیعت"],
    desc:   "از باغ‌های سرسبز خراسان تا سفره‌های شما؛ هر قطره پانسی، حاصل سال‌ها تجربه، گزینش دقیق میوه و باور به طعمی اصیل است.",
    img:    "/images/pansy-orange.png",
    cat:    "رانی پرتقال",
  },
  {
    title:  ["طعمی نرم،", "خاطره‌ای ماندگار"],
    desc:   "رانی شفتالو پانسی، ترکیبی هماهنگ از طعم ملایم میوه‌های رسیده و کیفیت ثابت، برای تمام لحظه‌های کنار هم بودن.",
    img:    "/images/pansy-peach.png",
    cat:    "رانی شفتالو",
  },
  {
    title:  ["نان تازه،", "از دستان شما"],
    desc:   "خمیرمایه پانسی با فعالیت بالا و کیفیتی پایدار، انتخابی مطمئن برای نانوایی‌ها و آشپزخانه‌های خانگی است.",
    img:    "/images/pansy-yeast.png",
    cat:    "خمیرمایه",
  },
];

export const stats = [
  { num: "+25", lbl: "سال تجربه تولید" },
  { num: "12",  lbl: "محصول در سبد"   },
  { num: "100%",lbl: "مواد اولیه طبیعی" },
];

export const homeProductCards = [
  {
    cls:  "product-card-orange",
    cat:  "آبمیوه طبیعی",
    num:  "01",
    name: "رانی پرتقال",
    desc: "طعم تازه و سرشار از ویتامین، در بسته‌بندی مطمئن و قفسه‌پسند.",
    img:  "/images/pansy-orange.png",
  },
  {
    cls:  "product-card-peach",
    cat:  "آبمیوه طبیعی",
    num:  "02",
    name: "رانی شفتالو",
    desc: "نوشیدنی نرم و خوشایند، با عطر شفتالوهای رسیده‌ی خراسان.",
    img:  "/images/pansy-peach.png",
  },
  {
    cls:  "product-card-yeast",
    cat:  "خمیرمایه صنعتی",
    num:  "03",
    name: "خمیرمایه پانسی",
    desc: "پایداری بالا و فعالیت یکنواخت، برای نان‌هایی با بافت دلپذیر.",
    img:  "/images/pansy-yeast.png",
  },
];

export const products = [
  { slug: "orange",     name: "رانی پرتقال",         cat: "juice", catLbl: "آبمیوه",   vol: "۲۴۰ml", img: "/images/pansy-orange.png",       cls: "pp-card-orange" },
  { slug: "peach",      name: "رانی شفتالو",         cat: "juice", catLbl: "آبمیوه",   vol: "۲۴۰ml", img: "/images/pansy-peach.png",        cls: "pp-card-peach"  },
  { slug: "mixed",      name: "رانی مخلوط",          cat: "juice", catLbl: "آبمیوه",   vol: "۲۴۰ml", img: "/images/pansy-orange-3d.png",    cls: "pp-card-blue"   },
  { slug: "orange-pet", name: "رانی پرتقال خانواده", cat: "juice", catLbl: "آبمیوه",   vol: "۱L",    img: "/images/pansy-orange-blue.jpg",  cls: "pp-card-orange" },
  { slug: "peach-pet",  name: "رانی شفتالو ویژه",   cat: "juice", catLbl: "آبمیوه",   vol: "۱L",    img: "/images/pansy-peach-both.png",   cls: "pp-card-peach"  },
  { slug: "orange-mix", name: "رانی پرتقال سبز",     cat: "juice", catLbl: "آبمیوه",   vol: "۲۴۰ml", img: "/images/pansy-orange-green.jpg", cls: "pp-card-mint"   },
  { slug: "yeast",      name: "خمیرمایه پانسی",      cat: "yeast", catLbl: "خمیرمایه", vol: "۵۰۰g",  img: "/images/pansy-yeast.png",        cls: "pp-card-yeast"  },
  { slug: "flower",     name: "خمیرمایه فلاور",      cat: "yeast", catLbl: "خمیرمایه", vol: "۵۰۰g",  img: "/images/flower-yeast.png",       cls: "pp-card-yeast"  },
  { slug: "flower-2",   name: "فلاور صنعتی",         cat: "yeast", catLbl: "خمیرمایه", vol: "۱kg",   img: "/images/flower-yeast-2.png",     cls: "pp-card-yeast"  },
];

export const posts = [
  {
    slug: "company-update", cat: "اخبار شرکت", catKey: "company",
    title:   "گزارش تازه از مسیر توسعه گروه گلستان خراسان",
    date:    "۱۵ ثور ۱۴۰۵",  read: "۴ دقیقه",
    img:     "/images/product-1-preview.jpg",
    excerpt: "نگاهی کوتاه به برنامه‌های تولید و همکاری‌های فروشگاهی در سال جدید.",
    featured: true,
  },
  {
    slug: "new-juice-line", cat: "محصول جدید", catKey: "product",
    title:   "معرفی خط تازه‌ی رانی‌های طبیعی پانسی",
    date:    "۲۸ حمل ۱۴۰۵",  read: "۳ دقیقه",
    img:     "/images/product-2-preview.jpg",
    excerpt: "سری تازه‌ی رانی با تمرکز بر طعم‌های آشنا و بسته‌بندی مدرن.",
  },
  {
    slug: "retail-guide", cat: "نکات فروشگاهی", catKey: "retail",
    title:   "نکات فروشگاهی برای چیدمان محصولات غذایی",
    date:    "۱۰ حمل ۱۴۰۵",  read: "۶ دقیقه",
    img:     "/images/product-3-preview.jpg",
    excerpt: "چطور چیدمان درست و بسته‌بندی خوانا به فروش بیشتر کمک می‌کند.",
  },
  {
    slug: "factory-expansion", cat: "اخبار شرکت", catKey: "company",
    title:   "توسعه‌ی خط تولید جدید در ناحیه‌ی صنعتی هرات",
    date:    "۲۲ حوت ۱۴۰۴",  read: "۵ دقیقه",
    img:     null,
    excerpt: "گزارشی از پروژه‌ی توسعه‌ی ظرفیت تولید با تمرکز بر صادرات منطقه‌ای.",
  },
  {
    slug: "yeast-quality", cat: "تکنولوژی", catKey: "tech",
    title:   "چرا خمیرمایه‌ی پانسی برای نان‌های سنتی مناسب است؟",
    date:    "۱۵ حوت ۱۴۰۴",  read: "۷ دقیقه",
    img:     "/images/pansy-yeast.png",
    excerpt: "نگاه فنی به فعالیت میکروبی، پایداری و عملکرد خمیرمایه‌ی پانسی.",
  },
  {
    slug: "team-interview", cat: "اخبار شرکت", catKey: "company",
    title:   "گفت‌وگو با مدیر تولید درباره‌ی استانداردهای کیفیت",
    date:    "۱ حوت ۱۴۰۴",   read: "۸ دقیقه",
    img:     null,
    excerpt: "از فرآیندهای کنترل کیفیت تا فلسفه‌ی برند؛ مصاحبه‌ای صمیمی با تیم پانسی.",
  },
];

export const promises = [
  {
    num:  "اصول ۰۱",
    name: "از دل طبیعت",
    desc: "گزینش میوه‌های رسیده از باغ‌های منطقه و حفظ طعم اصیل تا لحظه‌ی بسته‌بندی.",
  },
  {
    num:  "اصول ۰۲",
    name: "کیفیت پایدار",
    desc: "خط تولید مدرن، آزمایش‌های مرحله‌ای و استانداردهای بین‌المللی در هر بسته.",
  },
  {
    num:  "اصول ۰۳",
    name: "اعتماد چند نسل",
    desc: "ده‌ها سال همراهی با خانواده‌ها؛ نامی شناخته‌شده در هر سفره و هر آشپزخانه.",
  },
];
