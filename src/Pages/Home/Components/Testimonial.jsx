import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aos from "aos";
const Testimonial = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <section id="testimonial">
       <div className="h-con">
       <h5 data-aos="fade-up">CHECK OUT OUR CLIENT’S</h5>
        <h3 data-aos="fade-up">Testimonial Words</h3>
       </div>
        {/* <OwlCarousel
          data-aos="fade-up"
          loop
          margin={5}
          nav
        >
          <div class="owl-carousel owl-theme owl-loaded">
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item">
                    <img width={150}
                      src="https://webstrot.com/html/cooltown/html/images/testi_img.jpg"
                      alt=""
                    />
                    <img width={130} src="https://webstrot.com/html/cooltown/html/images/quote.png" alt="" />
                    <div className="con">
                      <h4>Victoria Porter <h6>[Director]</h6></h4>
                      <p>In collaboration with public partners, lBusiness connects local businesses and job-seeking residents withresources. Our range of programs offers every service from talent recruiting and career development to clinical case mancollaboration</p>
                      <img src="https://webstrot.com/html/cooltown/html/images/testi_sig.png" alt="" />

                    </div>
                  </div>
                </div>
              </div>
              
              <div class="owl-dots">
                <div class="owl-dot active">
                  <span></span>
                </div>
               
              </div>
            </div>
        </OwlCarousel> */}
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="test-card">
                  <img src="https://webstrot.com/html/cooltown/html/images/testi_img.jpg" alt="" />
                  <img className="second" src="https://webstrot.com/html/cooltown/html/images/quote.png" alt="" />
                  <div className="con">
                    <h4>Victoria Porter <h6>[Director]</h6></h4>
                    <p>In collaboration with public partners, lBusiness connects local businesses and job-seeking residents withresources. Our range of programs offers every service from talent recruiting and career development to clinical case mancollaboration</p>
                    <img width={150} src="https://webstrot.com/html/cooltown/html/images/testi_sig.png" alt="" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
