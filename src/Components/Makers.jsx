import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import MakersData from '../Data/MakersData.json'
import { useTranslation } from "react-i18next";

const Makers = (props) => {
  const slider = {
    nav: false,
    responsiveClass: true,
    items: 3,
    loop: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
    0:{
        items:1,
    },
    700:{
        items:2,
    },
    1000:{
        items:3
    }
}
};

// Translation

const {t} = useTranslation()

  return (
    <>
      <section id="makers" style={{background:props.bg}}>
        <h5 style={{color:props.color}}>{t("makers.0")}</h5>
        <h3 style={{color:props.color}}>{t("makers.1")}</h3>
        <OwlCarousel className="slider-part owl-carousel my-4" {...slider}  >
        {
          MakersData.map(maker=>{
            return(
              <div className="maker-card">
                <div className="maker-img">
                  <img src={maker.image} alt="" />
                </div>
                <div className="title-card" style={{background:props.cardBg , color:props.cardColor}}>
                  <h3>{maker.title}</h3>
                  <h5>{t("makers.2")}</h5>
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
            )
          })
        }
         
        </OwlCarousel>
      </section>
    </>
  );
};

export default Makers;
