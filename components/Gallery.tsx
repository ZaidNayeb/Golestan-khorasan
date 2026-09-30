/* TODO: Replace the two brand-gradient tiles with real factory / orchard photos when available. */
export function GallerySection() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-grid">
          <div className="gallery-tile">
            <img
              src="/images/pansy-story.jpg"
              alt="باغ‌های خراسان و زمین‌های کشاورزی گروه گلستان خراسان"
            />
            <span className="label">باغ‌های خراسان</span>
          </div>
          <div className="gallery-side">
            <div className="gallery-tile" style={{ flex: 1 }}>
              <div
                className="story-placeholder"
                style={{
                  background: "linear-gradient(160deg,#0E4FA3 0%,#1565c0 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <img
                  src="/images/pansy-logo-new.png"
                  alt=""
                  aria-hidden="true"
                  style={{ width: 52, opacity: 0.18, filter: "brightness(10) saturate(0)" }}
                />
              </div>
              <span className="label">خط تولید</span>
            </div>
            <div className="gallery-tile" style={{ flex: 1 }}>
              <div
                className="story-placeholder"
                style={{
                  background: "linear-gradient(160deg,#0a3d7a 0%,#0E4FA3 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <img
                  src="/images/pansy-logo-new.png"
                  alt=""
                  aria-hidden="true"
                  style={{ width: 52, opacity: 0.18, filter: "brightness(10) saturate(0)" }}
                />
              </div>
              <span className="label">کنترل کیفیت</span>
            </div>
          </div>
          <div className="gallery-tile">
            <img src="/images/pansy-orange-blue.jpg" alt="رانی پرتقال پانسی" />
            <span className="label">رانی پرتقال پانسی</span>
          </div>
        </div>
      </div>
    </section>
  );
}
