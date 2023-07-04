import React, { useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Aos from 'aos';




const Partners = () => {
    useEffect(()=>{
    Aos.init()
    },[])
  return (
    <>
        <section id='partners'>
            <h4 data-aos="fade-up">OUR PARTNERS</h4>
            <h3 data-aos="fade-up">Partners Words</h3>
            <div className='slider2 container  mb-5 '>


        <Swiper
         data-aos="fade-up"
        modules={[]}
        loop={true}
        // spaceBetween={10}
        breakpoints={{
          500: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
          992: {
            slidesPerView: 6,
            // spaceBetween: 40,
          },
          1200: {
            slidesPerView: 6,
            // spaceBetween: 40,
          },

        }}
        navigation
        >

         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p3.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p1.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p2.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p4.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p5.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p6.jpg" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p1.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p2.jpg" alt=""  />
        </SwiperSlide>
         <SwiperSlide>
                  <img src="https://webstrot.com/html/cooltown/html/images/p4.jpg" alt=""  />
        </SwiperSlide>


        </Swiper>

    </div>
        </section>
    </>
  )
}

export default Partners