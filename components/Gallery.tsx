export function GallerySection() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-grid">
          <div className="gallery-tile">
            <div className="story-placeholder">باغ‌های خراسان</div>
            <span className="label">باغ‌های خراسان</span>
          </div>
          <div className="gallery-side">
            <div className="gallery-tile" style={{ flex: 1 }}>
              <div className="story-placeholder">خط تولید</div>
              <span className="label">خط تولید</span>
            </div>
            <div className="gallery-tile" style={{ flex: 1 }}>
              <div className="story-placeholder">کنترل کیفیت</div>
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
