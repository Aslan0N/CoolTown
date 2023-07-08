import React, { useContext, useState } from "react";
import { BsBag } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { GlobalContext } from "../Context/GlobalContext";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  const [opn, setOpn] = useState(false);
  const toggle = () => {
    setOpn(!opn);
  };
  document.body.style.overflow = opn ? "hidden" : "visible";

  const { changeMood, darkMode } = useContext(GlobalContext);

  // Translate
  const { t } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <header style={{ display: opn ? "none" : "block" }}>
        <div className="item">
          <div className="logo">
            <img
              src="https://webstrot.com/html/cooltown/html/images/logo.png"
              alt=""
            />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"} className={"nav-li"}>
                  {t("header.0")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={"nav-li"}>
                  {t("header.1")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/products"} className={"nav-li"}>
                  {t("header.2")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/gallery"} className={"nav-li"}>
                  {t("header.3")}
                </NavLink>
              </li>
             
              <li>
                <NavLink to={"/blog"} className={"nav-li"}>
                  {t("header.4")}
                </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} className={"nav-li"}>
                  {t("header.5")}
                </NavLink>
              </li>
            </ul>
          </nav>

          {/*  */}
          <div class="btn-group">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {i18n.language}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button onClick={() => handleChange("az")}>Az</button>
              </li>
              <li>
                <button onClick={() => handleChange("en")}>En</button>
              </li>
            </ul>
          </div>
          {/*  */}
          <button
            className={darkMode ? "my-btn rotates" : "my-btn"}
            onClick={changeMood}
          >
            {darkMode ? (
              <BsFillSunFill className="i" />
            ) : (
              <BsFillMoonFill className="i" />
            )}
          </button>

          <div className="i-con">
            <NavLink to={'/basket'}>
            <BsBag className="i" />
            </NavLink>
            <BiLogIn className="i mx-3" />
            <div className="my-bars" onClick={toggle}>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </div>
        </div>
      </header>
      {/* Owerlay */}
      <section id="owerlay" className={opn ? "opn" : ""}>
        <div className={opn ? "my-close" : "my-close d-none"} onClick={toggle}>
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <ul className={!opn ? "" : "opacity"}>
          <li>
            <NavLink className={"my-nav"} to={"/"}>
              {t("header.0")}
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"about"}>
              {t("header.1")}
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"products"}>
              {t("header.2")}
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"gallery"}>
              {t("header.3")}
            </NavLink>
          </li>
          
          <li>
            <NavLink className={"my-nav"} to={"blog"}>
              {t("header.4")}
            </NavLink>
          </li>
          <li>
            <NavLink className={"my-nav"} to={"contact"}>
              {t("header.5")}
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
