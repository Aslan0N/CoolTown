import React, { useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Aos from "aos";

const Cream = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  //   Translation
  const { t } = useTranslation();
  return (
    <>
      <section id="cream">
        <div className="h-con">
          <h5 className="h5" data-aos="fade-up">
            {t("cream.0")}
          </h5>
          <h3 className="h3" data-aos="fade-up">
            {t("cream.1")}
          </h3>
        </div>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-6 margin"
              data-aos="fade-up"
            >
              <div className="del-card">
                <div className="img">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/blog1.jpg"
                    alt=""
                  />
                  <div className="owerlay">
                    <p>
                      {t("cream.6")}{" "}
                      <span>
                        <AiOutlineHeart className="i" />
                      </span>
                    </p>
                    <h4>{t("cream.7")}</h4>
                  </div>
                </div>
                <div className="content">
                  <div className="item">
                    <h4>{t("cream.2")}</h4>
                    <h3>{t("cream.3")}</h3>
                    <h5>{t("cream.4")}</h5>
                    <p>{t("cream.5")}</p>
                    <button>
                      {t("tasty.2")} <MdDoubleArrow className="i" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-6 md-none"
              data-aos="fade-up"
            >
              <div className="del-card">
                <div className="img">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/blog2.jpg"
                    alt=""
                  />
                  <div className="owerlay">
                    <p>
                      {t("cream.6")}
                      <span>
                        <AiOutlineHeart className="i" />
                      </span>
                    </p>

                    <h4>{t("cream.7")}</h4>
                  </div>
                </div>
                <div className="content">
                  <div className="item">
                    <h4>{t("cream.2")}</h4>
                    <h3>{t("cream.3")}</h3>
                    <h5>{t("cream.4")}</h5>
                    <p>{t("cream.5")}</p>
                    <button>
                      {t("tasty.2")} <MdDoubleArrow className="i" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button data-aos="fade-up">{t("tasty.2")}</button>
      </section>
    </>
  );
};

export default Cream;
