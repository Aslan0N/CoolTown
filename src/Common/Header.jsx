import { GlobalContext } from "../Context/GlobalContext";
import React, { useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { BsFillSunFill } from "react-icons/bs";
import AdminBtn from "../Components/AdminBtn";
import { MdLanguage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { BsBag } from "react-icons/bs";
import i18n from "i18next";

const Header = () => {
  const [opn, setOpn] = useState(false);
  const toggle = () => {
    setOpn(!opn);
  };
  document.body.style.overflow = opn ? "hidden" : "visible";

  // Context
  const { changeMood, darkMode, myArray } = useContext(GlobalContext);

  // Translate
  const { t } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };
  // UseCart
  const { totalUniqueItems } = useCart();

  // Language
  const [lang, setLang] = useState(false);

  const toggleLang = () => {
    setLang(!lang);
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
          <div className="lang-dropdown" onClick={toggleLang}>
            <MdLanguage className="my-i" />
            <ul className={lang ? "opn-lang" : ""}>
              <li onClick={() => handleChange("az")}>
                <img
                  width={20}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/1280px-Flag_of_Azerbaijan.svg.png"
                  alt=""
                />
                Az
              </li>
              <li onClick={() => handleChange("en")}>
                <img
                  width={20}
                  src="https://i.natgeofe.com/k/53ffabb7-6e89-4a88-98c9-232ebec8d26e/united-kingdom-flag.gif"
                  alt=""
                />
                En
              </li>
            </ul>
          </div>
          <button
            className={darkMode ? "my-btn rotates md-none" : "my-btn md-none"}
            onClick={changeMood}
          >
            {darkMode ? (
              <BsFillSunFill className="i" />
            ) : (
              <BsFillMoonFill className="i" />
            )}
          </button>

          <div className="icon-nav">
            <NavLink to={"/wishlist"}>
              <span
                className={
                  myArray.length !== 0
                    ? "span span-wish"
                    : "span span-wish w-none"
                }
              >
                {myArray.length !== 0 ? myArray.length : ""}
              </span>
              <AiOutlineHeart className="mx-2 mt-1 i" />
            </NavLink>
            <NavLink to={"/basket"}>
              <span className={totalUniqueItems !== 0 ? " span" : "w-none"}>
                {totalUniqueItems !== 0 ? totalUniqueItems : ""}
              </span>
              <BsBag className="ms-2 i" />
            </NavLink>
          </div>
          <div className="i-con">
            <AdminBtn />
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
        <button
          className={darkMode ? "my-btn rotates md-none" : "my-btn md-none"}
          onClick={changeMood}
        >
          {darkMode ? (
            <BsFillSunFill className="i" />
          ) : (
            <BsFillMoonFill className="i" />
          )}
        </button>
        <div className={opn ? "my-close" : "my-close d-none"} onClick={toggle}>
          <span className="one"></span>
          <span className="two"></span>
        </div>
        <ul className={!opn ? "" : "opacity"}>
          <li onClick={toggle}>
            <NavLink className={"my-nav"} to={"/"}>
              {t("header.0")}
            </NavLink>
          </li>
          <li onClick={toggle}>
            <NavLink className={"my-nav"} to={"/about"}>
              {t("header.1")}
            </NavLink>
          </li>
          <li onClick={toggle}>
            <NavLink className={"my-nav"} to={"/products"}>
              {t("header.2")}
            </NavLink>
          </li>
          <li onClick={toggle}>
            <NavLink className={"my-nav"} to={"/gallery"}>
              {t("header.3")}
            </NavLink>
          </li>

          <li onClick={toggle}>
            <NavLink className={"my-nav"} to={"/blog"}>
              {t("header.4")}
            </NavLink>
          </li>
          <li onClick={toggle}>
            <NavLink className={"my-nav"} to={"/contact"}>
              {t("header.5")}
            </NavLink>
          </li>
          <li className="min-none" onClick={toggle}>
            <NavLink className={"my-nav"} to={"/wishlist"}>
              WishList
            </NavLink>
          </li>
          <li className="min-none" onClick={toggle}>
            <NavLink className={"my-nav"} to={"/basket"}>
              Basket
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Header;
