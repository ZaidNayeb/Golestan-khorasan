type FeatureCard = {
  title: string;
  text?: string;
  slug?: string;
  image?: string;
};

function DefaultIllustration({ index, title }: { index: number; title: string }) {
  const colors = ["#2563eb", "#0ea5e9", "#6366f1"];
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-2xl"
      style={{ background: colors[index % colors.length] }}
      aria-label={title}
    >
      <span className="text-4xl text-white/30 font-black select-none">
        {title.charAt(0)}
      </span>
    </div>
  );
}

export function Categories({ cards }: { cards: FeatureCard[] }) {
  return (
    <div className="container">
      <div className="section-header reveal">
        <span className="eyebrow">دسته‌های پرفروش</span>
        <h2>محصولاتی که سریع دیده می‌شوند</h2>
        <p>
          از آبمیوه‌های طبیعی تا مخمر صنعتی — یک مسیر تامین برای همه نیازها.
        </p>
      </div>
      <div className="categories-grid">
        {cards.map((card, i) => (
          <div key={card.slug ?? i} className="category-card">
            <div className="category-card-img">
              {card.image ? (
                <img src={card.image} alt={card.title} />
              ) : (
                <DefaultIllustration index={i} title={card.title} />
              )}
            </div>
            <div className="category-card-body">
              <h3>{card.title}</h3>
              {card.text && <p>{card.text}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
