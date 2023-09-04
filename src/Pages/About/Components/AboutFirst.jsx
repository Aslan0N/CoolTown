import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineCheckSquare } from "react-icons/ai";

const AboutFirst = () => {
  // Translation

  const { t } = useTranslation();
  return (
    <>
      <section id="about-first">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <h4>{t("about.0")}</h4>
              <h3>{t("about.1")}</h3>
              <p>
                {t("about.2")}
                <br />
                <br />
                {t("about.3")}
              </p>
              <div className="p-con">
                <AiOutlineCheckSquare className="i" />
                <p>{t("about.4")}</p>
              </div>
              <div className="p-con">
                <AiOutlineCheckSquare className="i" />
                <p>{t("about.4")}</p>
              </div>
              <button>{t("tasty.2")}</button>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 img-col">
              <div className="img">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/abt_in_img2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFirst;
