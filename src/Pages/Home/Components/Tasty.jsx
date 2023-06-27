import React, { useEffect } from "react";
import Aos from "aos";

const Tasty = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <section id="tasty">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up"
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-first"
            >
              <img
                width={120}
                src="https://webstrot.com/html/cooltown/html/images/awe.png"
                alt=""
              />
              <h3>Tasty ice-cream Party</h3>
              <p>
                Appropriately synthesize interactive opportunities through go
                forward relationships. Competently procrastinate client centered
                services whereas cooperative portals
              </p>
              <div className="buttons">
                <button>Read More</button>
                <button className="two">Shop Now</button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-12 col-sm-12 col-md-12 col-lg-6 col-second"
            >
              <img
                width={510}
                src="https://webstrot.com/html/cooltown/html/images/ice4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tasty;
