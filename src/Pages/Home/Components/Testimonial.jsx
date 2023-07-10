import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aos from "aos";
import { useTranslation } from "react-i18next";
const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Owl Carousel
  const slider = {
    nav: false,
    responsiveClass: true,
    items: 2,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  // Translation
  const {t} = useTranslation()


  return (
    <>
      <section id="testimonial">
        <div className="h-con">
          <h5 data-aos="fade-up">{t("testimonials.0")}</h5>
          <h3 data-aos="fade-up">{t("testimonials.1")}</h3>
        </div>
        <div className="container" data-aos="fade-up">
          <OwlCarousel className="slider-part owl-carousel my-4" {...slider}>
            <div className="test-card">
              <img
              className="first"
                src="https://webstrot.com/html/cooltown/html/images/testi_img.jpg"
                alt=""
              />
              <img
                className="second"
                src="https://webstrot.com/html/cooltown/html/images/quote.png"
                alt=""
              />
              <div className="con">
                <h4>
                {t("testimonials.2")}</h4>
                <p>
                {t("testimonials.3")}
                </p>
                <img
                  className="thread"
                  src="https://webstrot.com/html/cooltown/html/images/testi_sig.png"
                  alt=""
                />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
