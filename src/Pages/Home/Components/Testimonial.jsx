import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aos from "aos";
const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  // Owl Carousel
  const slider = {
    nav: false,
    responsiveClass: true,
    items: 2,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <section id="testimonial">
        <div className="h-con">
          <h5 data-aos="fade-up">CHECK OUT OUR CLIENT’S</h5>
          <h3 data-aos="fade-up">Testimonial Words</h3>
        </div>
        <div className="container" data-aos="fade-up">
          <OwlCarousel className="slider-part owl-carousel my-4" {...slider}>
            <div className="test-card">
              <img
              className="first"
                src="https://webstrot.com/html/cooltown/html/images/testi_img.jpg"
                alt=""
              />
              <img
                className="second"
                src="https://webstrot.com/html/cooltown/html/images/quote.png"
                alt=""
              />
              <div className="con">
                <h4>
                  Victoria Porter</h4>
                <p>
                  In collaboration with public partners, lBusiness connects
                  local businesses and job-seeking residents withresources. Our
                  range of programs offers every service from talent recruiting
                  and career development to clinical case mancollaboration
                </p>
                <img
                  className="thread"
                  src="https://webstrot.com/html/cooltown/html/images/testi_sig.png"
                  alt=""
                />
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
