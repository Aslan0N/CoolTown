import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Gallery = () => {
    
  return (
    <>
      <section id="gallery">
        <div className="container">
          <h4>OUR GALLERY</h4>
          <h3>Ice Cream Gallery</h3>

          <OwlCarousel className="owl-carousel owl-theme" loop margin={5} nav >
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g3.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g4.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g6.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g1.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g2.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g5.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g4.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g3.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g1.jpg"
                alt=""
              />
            </div>
            <div class="item">
              <img
                src="https://webstrot.com/html/cooltown/html/images/g2.jpg"
                alt=""
              />
            </div>
          </OwlCarousel>
          <button>Read More</button>
        </div>
      </section>
    </>
  );
};

export default Gallery;
