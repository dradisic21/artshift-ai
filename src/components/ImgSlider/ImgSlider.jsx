import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/ImgSlider.scss";

export function ImgSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-main">
      <div className="guide-container">
        <h2>Welcome to ArtShift.AI!</h2>
        <p>
          Thank you for using our application. This quick guide will help you
          get started with the features and functionality of ArtShift.AI.
        </p>

        <section>
          <h3>Feature 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed commodo turpis eget dui volutpat, nec rhoncus ex
            sollicitudin.
          </p>
        </section>

        <section>
          <h3>Feature 2</h3>
          <p>
            Vestibulum ultricies nunc sit amet velit egestas, ut hendrerit urna
            feugiat. Sed cursus quam id orci commodo, a efficitur justo
            ullamcorper.
          </p>
        </section>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <img src="../../../assets/phone1.jpg" alt="phone" />

          <img src="../../../assets/phone2.jpg" alt="phone" />

          <img src="../../../assets/phone3.jpg" alt="phone" />

          <img src="../../../assets/phone4.jpg" alt="phone" />

          <img src="../../../assets/phone5.jpg" alt="phone" />
        </Slider>
      </div>
    </div>
  );
}
