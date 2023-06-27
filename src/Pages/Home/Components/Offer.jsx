import React, { useEffect } from "react";
import Aos from "aos";
import { GiCupcake } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";

const Offer = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000, 
    })
  }, [])
  return (
    <>
      <section id="offer">
        <div className="container">
          <div className="row">
            <div data-aos="fade-up" className="col-12 col-sm-12 col-md-12 col-lg-6 col-content">
              <h4>SPECIAL OFFER</h4>
              <h3 className="aft">what we offer</h3>
              <div className="i-con">
                <span><GiCupcake className="i"/></span>
                <div className="content">
                    <h3>Taste From The Good Old Days</h3>
                    <p>We Understant behind every good products, it's also have to be accessi- bleeasily. Our intention is to get you started</p>
                </div>
              </div>
              <div className="i-con">
                <span><GiFoodTruck className="i"/></span>
                <div className="content">
                    <h3>Pink Ice Cream Cupcakes</h3>
                    <p>We Understant behind every good products, it's also have to be accessi- bleeasily. Our intention is to get you started</p>
                </div>
              </div>
              <button>Read More</button>
            </div>
            <div data-aos="fade-up" className="col-12 col-sm-12 col-md-12 col-lg-6 col-img">
                <img src="https://webstrot.com/html/cooltown/html/images/ice5.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
