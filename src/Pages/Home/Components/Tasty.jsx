import Aos from "aos";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Tasty = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  // Translation
  const { t } = useTranslation();
  return (
    <>
      <section id="tasty">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up-right"
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-first"
            >
              <img
                width={120}
                src="https://webstrot.com/html/cooltown/html/images/awe.png"
                alt=""
              />
              <h3>{t("tasty.0")}</h3>
              <p>{t("tasty.1")}</p>
              <div className="buttons">
                <button>{t("tasty.2")}</button>
                <button className="two">{t("tasty.3")}</button>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-second"
            >
              <img
                width={510}
                src="https://webstrot.com/html/cooltown/html/images/ice4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tasty;
