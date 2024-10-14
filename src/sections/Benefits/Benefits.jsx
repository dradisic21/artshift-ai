import "../../styles/Benefits.scss";

export function Benefits() {
  return (
    <div className="benefits-container">
      <div className="benefits-image-content">
        <img src="/assets/web_gallery.png" alt="gallery" />
      </div>

      <div className="benefits-desc-content">
        <p className="benefits-tagline">BENEFITS</p>
        <h2 className="benefits-title">High Resolution & Detail</h2>

        <div className="image-creation-benefits">
          <div className="benefits">
            <img src="/assets/icons/circle-star.png" alt="icon" />
            <h3>Fully Customizable</h3>
          </div>
          <div className="benefits-description">
            <p>
              Achieve stunning visuals with unparalleled sharpness and fine
              details. Our technology ensures each image is produced at the
              highest resolution, capturing every nuance with exceptional
              clarity. Perfect for digital displays and professional printing,
              the quality remains consistent across various formats, delivering
              impressive results every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
