import Aos from "aos";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Form = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Translation
  const { t } = useTranslation();
  return (
    <>
      <section id="form">
        <h4 data-aos="fade-up">{t("contact.6")}</h4>
        <h3 data-aos="fade-up">{t("contact.7")}</h3>
        <form>
          <div className="row">
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-up"
            >
              <div className="input">
                <input type="text" placeholder={t("contact.8")} />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-up"
            >
              <div className="input">
                <input type="text" placeholder={t("contact.9")} />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-up"
            >
              <div className="input">
                <input type="text" placeholder={t("contact.10")} />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-up"
            >
              <div className="input">
                <input type="text" placeholder={t("contact.11")} />
              </div>
            </div>
            <div
              className="col-12 col-sm-12 col-md-12 col-lg-12"
              data-aos="fade-up"
            >
              <div className="input bor">
                <textarea
                  name=""
                  id=""
                  cols="57"
                  rows="5"
                  className="textarea"
                  placeholder={t("contact.12")}
                ></textarea>
              </div>
            </div>
          </div>
          <button data-aos="fade-up">{t("contact.13")}</button>
        </form>
      </section>
    </>
  );
};

export default Form;
