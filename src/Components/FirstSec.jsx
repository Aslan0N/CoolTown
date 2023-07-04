import React from "react";
import { NavLink } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";

const FirstSec = (props) => {
  return (
    <>
      <section id="first-sec" style={{background:props.bg}}>
        <div className="item">
          <h4>{props.place}</h4>
          <div className="con">
            <NavLink to={"/"}>
              <p className="home" style={{color:props.pColor1}}>
                Home
                <span>
                  <RiArrowRightSLine className="fs-5" />
                </span>
              </p>
            </NavLink>
            <NavLink to={"/about"}>
              <p style={{color:props.pColor2}}>{props.current}</p>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSec;
