import Aos from "aos";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="gallery">
        <div className="container">
          <h4 data-aos="fade-up">OUR GALLERY</h4>
          <h3 data-aos="fade-up">Ice Cream Gallery</h3>

          <OwlCarousel
            data-aos="fade-up"
            className="owl-carousel owl-theme"
            loop
            margin={5}
            nav
          >
            <div class="owl-carousel owl-theme owl-loaded">
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item">
                    <img
                      src="https://webstrot.com/html/cooltown/html/images/g3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              
              <div class="owl-dots">
                <div class="owl-dot active">
                  <span></span>
                </div>
               
              </div>
            </div>
          </OwlCarousel>
          <button data-aos="fade-up">Read More</button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
