import i18n from "i18next";
import { BsBag } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import AdminBtn from "../Components/AdminBtn";

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
  // UseCart
    const {totalUniqueItems} = useCart()

    // UseWishlist
    const {totalWishlistItems} = useWishlist()

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
           <div class="btn-group md-none">
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
           <NavLink  to={"/wishlist"}>
            <span className="span span-wish">{totalWishlistItems}</span>
              <AiOutlineHeart className="mx-2 mt-1 i" />
            </NavLink>
            <NavLink to={"/basket"}>
              <span className=" span">{totalUniqueItems}</span>
              <BsBag className="ms-2 i" />
            </NavLink>
            {/* <NavLink to={'/login'}>
            <BiLogIn className="i mx-3" />
            </NavLink> */}
            <AdminBtn/>
           </div>
          <div className="i-con">
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
      <div class="btn-group md-none">
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
