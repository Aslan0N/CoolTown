import React, { useEffect } from "react";
import PartnersData from "../Data/PartnersData.json";
import { useTranslation } from "react-i18next";
import OwlCarousel from "react-owl-carousel";
import Aos from "aos";

const Partners = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const slider = {
    nav: false,
    responsiveClass: true,
    items: 6,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
  };

  // Translation
  const { t } = useTranslation();

  return (
    <>
      <section id="partners">
        <h4 data-aos="fade-up">{t("partners.0")}</h4>
        <h3 data-aos="fade-up">{t("partners.1")}</h3>
        <div className="slider2 container  mb-5 ">
          <OwlCarousel
            className="slider-part owl-carousel my-4 ms-2"
            {...slider}
            data-aos="fade-up"
          >
            {PartnersData.map((item) => {
              return <img src={item.image} key={item.id} alt="" />;
            })}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Partners;
