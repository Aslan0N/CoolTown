import Aos from 'aos'
import React, { useEffect } from 'react'
import {AiFillStar} from 'react-icons/ai'
import OwlCarousel from 'react-owl-carousel';
import MyData from '../../../Data/ProductsData.json'
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const Elements = () => {

    const {addItem} = useCart()

    useEffect(()=>{
        Aos.init()
    },[])

    const slider = {
        nav: false,
        responsiveClass: true,
        items: 7,
        loop: true,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
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
    // Translation 
    const {t} = useTranslation()
  return (
    <>
        <section id='elements'>
            <h4>{t("elements.0")}</h4>
            <h3>{t("elements.1")}</h3>
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
                        <button onClick={()=> {
                            addItem(item)
                            toast.success("Add basket")
                        }}>{t("elements.2")}</button>
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