import Link from "next/link";
import { categories } from "@/data/site";

const DOT_CLASS: Record<string, string> = {
  orange: "dot-orange",
  purple: "dot-purple",
  blue:   "dot-blue",
};

export function ProductsSection() {
  const pills = categories.slice(0, 3);

  return (
    <section className="products-section">
      <div className="container products-section-body">
        <h2 className="products-section-title">
          محصولات<br />ما
        </h2>

        <div className="product-pills">
          {pills.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="product-pill"
            >
              <span
                className={`product-pill-dot ${DOT_CLASS[cat.dotColor]}`}
                aria-hidden="true"
              />
              {cat.title}
            </Link>
          ))}
        </div>

        <div className="product-pips" aria-hidden="true">
          {pills.map((_, i) => (
            <span key={i} className={`product-pip${i === 0 ? " product-pip--active" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
