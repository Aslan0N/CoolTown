import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // Translation
  const { t } = useTranslation();
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 my-bor">
              <img
                src="https://webstrot.com/html/cooltown/html/images/logo.png"
                alt=""
              />
              <p>
                {t("footer.0")}
                <br />
                <br />

                {t("footer.1")}
              </p>
              <button>
                {t("tasty.2")} <BsArrowRight />
              </button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <h3>{t("footer.2")}</h3>
              <div className="con">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/blg1.jpg"
                  alt=""
                />
                <div className="p">
                  <p>{t("footer.3")}</p>
                  <p className="pink">{t("footer.4")}</p>
                </div>
              </div>
              <div className="con">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/blg3.jpg"
                  alt=""
                />
                <div className="p">
                  <p>{t("footer.5")}</p>
                  <p className="pink">{t("footer.6")}</p>
                </div>
              </div>
              <div className="con">
                <img
                  src="https://webstrot.com/html/cooltown/html/images/blg2.jpg"
                  alt=""
                />
                <div className="p">
                  <p>{t("footer.7")}</p>
                  <p className="pink">{t("footer.8")}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <h3>{t("footer.9")}</h3>
              <form>
                <div>
                  <input type="text" placeholder="Joahn Doe" />
                  <BsFillPersonFill className="i" />
                </div>
                <div>
                  <input type="email" placeholder={t("footer.10")} />
                  <BiSolidMessageRounded className="i" />
                </div>
                <textarea
                  cols="23"
                  rows="5"
                  placeholder={t("footer.11")}
                  className="textarea"
                ></textarea>
              </form>
              <button className="button">{t("footer.12")}</button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3">
              <h3>{t("footer.13")}</h3>
              <div className="p-con">
                <span>{t("footer.14")}:</span>
                <p className="ms-2">{t("footer.15")}</p>
              </div>
              <div className="p-con">
                <span>{t("footer.16")}:</span>
                <p>+1-202-555-0175 +1-202-555-0107</p>
              </div>
              <div className="p-con">
                <span>{t("footer.17")}:</span>
                <p>crorpo@example.com support@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
