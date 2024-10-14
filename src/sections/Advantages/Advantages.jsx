import "../../styles/Advantages.scss";

export function Advantages() {
  return (
    <div className="advantages-container">
      <div className="advantages-desc-content">
        <p className="advantages-tagline">ADVANTAGES</p>
        <h2 className="advantages-title">Why Choose ArtShift?</h2>

        <div className="why-choose-advantages">
          <div className="advantages">
            <img src="/assets/icons/bell.png" alt="icon" />
            <h3>Instant High-Quality Output</h3>
          </div>
          <div className="advantages-description">
            <p>
              ArtShift empowers you to effortlessly create stunning visuals with
              advanced AI technology. Customize your designs, enjoy rapid
              output, and achieve high resolution for digital and print. With a
              user-friendly interface and strong community support, you’ll
              unlock endless creative possibilities. Experience the ArtShift
              difference today!
            </p>
          </div>
        </div>
      </div>

      <div className="advantages-image-content">
        <img src="/assets/web_edit.png" alt="edit" />
      </div>
    </div>
  );
}
