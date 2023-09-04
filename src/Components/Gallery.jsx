import Aos from "aos";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { GoArrowRight } from "react-icons/go";
import { useTranslation } from "react-i18next";
import "owl.carousel/dist/assets/owl.carousel.css";
import GalleryData from "../Data/GalleryData.json";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Gallery = (props) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const slider = {
    nav: false,
    responsiveClass: true,
    items: 7,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };

  // Translation

  const { t } = useTranslation();

  return (
    <>
      <section id="gallery" style={{ background: props.bg }}>
        <div className="container">
          <h4 data-aos="fade-up" style={{ color: props.title1 }}>
            {t("gallery.0")}
          </h4>
          <h3 data-aos="fade-up" style={{ color: props.title2 }}>
            {t("gallery.1")}
          </h3>

          <div className="container">
            <div className="row">
              <div className="slider">
                <div className="slider-all">
                  <OwlCarousel
                    className="slider-part owl-carousel my-4"
                    {...slider}
                    data-aos="fade-up"
                  >
                    {GalleryData.map((item, index) => {
                      return (
                        <div className="my-card-custom" key={index}>
                          <div className="owerlay">
                            <div className="con">
                              <p>{t("gallery.2")}</p>
                              <span>
                                <GoArrowRight />
                              </span>
                            </div>
                          </div>
                          <div className="my-card" key={item.id}>
                            <img
                              src={item.image}
                              alt="..."
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <button
            data-aos="fade-up"
            style={{ background: props.button, color: props.buttonColor }}
          >
            {t("tasty.2")}
          </button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
