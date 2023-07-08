import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import Aos from 'aos';
import PartnersData from '../Data/PartnersData.json'



const Partners = () => {
    useEffect(()=>{
    Aos.init()
    },[])

    const slider = {
      nav: false,
      responsiveClass: true,
      items: 8,
      loop: true,
      dots:false,
      responsive:{
      0:{
          items:2,
      },
      600:{
          items:3,
      },
      1000:{
          items:6
      }
  }
  };


  return (
    <>
        <section id='partners'>
            <h4 data-aos="fade-up">OUR PARTNERS</h4>
            <h3 data-aos="fade-up">Partners Words</h3>
            <div className='slider2 container  mb-5 '>

          <OwlCarousel  className="slider-part owl-carousel my-4 ms-2" {...slider} data-aos="fade-up" >
            {
              PartnersData.map(item=>{
                return (
                  <img src={item.image} key={item.id} alt="" />
                )
              })
            }
          </OwlCarousel>

    </div>
        </section>
    </>
  )
}

export default Partners