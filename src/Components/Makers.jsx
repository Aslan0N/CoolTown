import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const Makers = (props) => {
  return (
    <>
      <section id="makers" style={{background:props.bg}}>
        <h5 style={{color:props.color}}>BEST TEAM</h5>
        <h3 style={{color:props.color}}>Ice Cream Makers</h3>
        <OwlCarousel
          data-aos="fade-up"
          className="owl-carousel owl-theme"
          loop
          margin={5}
          nav
        >
         <div class="item">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/t1.png"
                    alt=""
                  />
                  <div className="my-card" style={{background:props.cardBg , color:props.cardColor}}>
                    <h3>John Smith</h3>
                    <h5>Maker</h5>
                    <div className="i-con" style={{borderTop:props.border}}>
                      <span>
                        <FaFacebookF className="i" />
                      </span>
                      <span>
                        <BsTwitter className="i" />
                      </span>
                      <span>
                        <FaPinterestP className="i" />
                      </span>
                      <span className="border-0">
                        <FaGooglePlusG className="i " />
                      </span>
                    </div>
                  </div>
                </div>
             <div class="item">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/t2.png"
                    alt=""
                  />
                  <div className="my-card" style={{background:props.cardBg, color:props.cardColor}}>
                    <h3>John Smith</h3>
                    <h5>Maker</h5>
                    <div className="i-con" style={{borderTop:props.border}}>
                      <span>
                        <FaFacebookF className="i" />
                      </span>
                      <span>
                        <BsTwitter className="i" />
                      </span>
                      <span>
                        <FaPinterestP className="i" />
                      </span>
                      <span className="border-0">
                        <FaGooglePlusG className="i " />
                      </span>
                    </div>
                  </div>
                </div>
             <div class="item">
                  <img
                    src="https://webstrot.com/html/cooltown/html/images/t3.png"
                    alt=""
                  />
                  <div className="my-card" style={{background:props.cardBg, color:props.cardColor}}>
                    <h3>John Smith</h3>
                    <h5>Maker</h5>
                    <div className="i-con" style={{borderTop:props.border}}>
                      <span>
                        <FaFacebookF className="i" />
                      </span>
                      <span>
                        <BsTwitter className="i" />
                      </span>
                      <span>
                        <FaPinterestP className="i" />
                      </span>
                      <span className="border-0">
                        <FaGooglePlusG className="i " />
                      </span>
                    </div>
                  </div>
                </div>
        </OwlCarousel>
      </section>
    </>
  );
};

export default Makers;
