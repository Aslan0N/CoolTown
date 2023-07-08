import Aos from 'aos'
import React, { useEffect } from 'react'
import {AiFillStar} from 'react-icons/ai'
import OwlCarousel from 'react-owl-carousel';
import MyData from '../../../Data/ProductsData.json'

const Elements = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    const slider = {
        nav: false,
        responsiveClass: true,
        items: 7,
        loop: true,
        dots:false,
        responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }
    }
    };
  return (
    <>
        <section id='elements'>
            <h4>OUR ICE-CREAM</h4>
            <h3>Best ice cream Elements</h3>
            <div className="container">
            <OwlCarousel className="slider-part owl-carousel my-4 ms-2" {...slider} data-aos="fade-up" >
                       {
                        MyData.map(item=>{
                            return (
                                <div className="item">
                       <h6>${item.price}</h6>
                        <img src={item.image} alt="" />
                        <h5>{item.title}</h5>
                        <div className="i-con">
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                        </div>
                        <p>{item.description}</p>
                        <button>Add To Cart</button>
                       </div>
                            )
                        })
                       }
                </OwlCarousel>
            </div>
        </section>
    </>
  )
}

export default Elements