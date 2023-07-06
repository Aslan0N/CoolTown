import React, { useContext } from "react";
import CallUs from "../About/Components/CallUs";
import Partners from "../../Components/Partners";
import FirstSec from "../../Components/FirstSec";
import { GlobalContext } from "../../Context/GlobalContext";
import FilterPanel from "./Components/FilterPanel";

const Products = () => {
  const { darkMode } = useContext(GlobalContext);
  return (
    <>
      <FirstSec
        place={"Product"}
        current={"Products"}
        pColor1={darkMode ? "#fff" : "#141b1d"}
        pColor2={darkMode ? "#f25221" : "#fff"}
        bg={
          darkMode
            ? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')"
            : "url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"
        }
      />
      <FilterPanel /> 
      <CallUs />
      <Partners />
    </>
  );
};

export default Products;
 {/* <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="my-card">
                    <h5 className="second-none">${item.price}</h5>
                    <img src={item.image} alt="" />
                    <div className="mycard-body">
                      <h3>{item.title}</h3>
                      <h5 className="first-none">${item.price}</h5>
                      <div className="i-con second-none ">
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                      </div>
                      <p>{item.description}</p>
                     <div className="btn-con">
                     <button ><GiBeachBag className="i"/></button>
                      <button><AiOutlineHeart className="i"/></button>
                      <button ><BsArrowsMove className="i"/></button>
                     </div>
                    </div>
                    <div className="i-con first-none ">
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                        <AiFillStar className="i"/>
                      </div>
                  </div>
                </div> */}