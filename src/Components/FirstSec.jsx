import React from "react";
import { NavLink } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { RiArrowRightSLine } from "react-icons/ri";

const FirstSec = (props) => {
  // Translation
  const {t} = useTranslation()
  return (
    <>
      <section id="first-sec" style={{background:props.bg}}>
        <div className="item">
          <h4>{props.place}</h4>
          <div className="con">
            <NavLink to={"/"}>
              <p className="home" style={{color:props.pColor1}}>
                {t("header.0")}
                <span>
                  <RiArrowRightSLine className="fs-5" />
                </span>
              </p>
            </NavLink>
            <NavLink to={"/about"}>
              <p className="p" style={{color:props.pColor2}}>{props.current}</p>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSec;
