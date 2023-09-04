import Aos from "aos";
import React, { useEffect } from "react";
import { GiCupcake } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const Offer = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  // Translation
  const { t } = useTranslation();
  return (
    <>
      <section id="offer">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up"
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-content"
            >
              <h4>{t("offer.0")}</h4>
              <h3 className="aft">{t("offer.1")}</h3>
              <div className="i-con">
                <span>
                  <GiCupcake className="i" />
                </span>
                <div className="content">
                  <h3>{t("offer.2")}</h3>
                  <p>{t("offer.3")}</p>
                </div>
              </div>
              <div className="i-con">
                <span>
                  <GiFoodTruck className="i" />
                </span>
                <div className="content">
                  <h3>{t("offer.4")}</h3>
                  <p>{t("offer.5")}</p>
                </div>
              </div>
              <button>{t("tasty.2")}</button>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-img"
            >
              <img
                src="https://webstrot.com/html/cooltown/html/images/ice5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
