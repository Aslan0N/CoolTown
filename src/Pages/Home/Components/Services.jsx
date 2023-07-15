import Aos from 'aos'
import React, { useEffect } from 'react'
import {GiCupcake} from 'react-icons/gi'
import {LuIceCream2} from 'react-icons/lu'
import {GiIceCreamScoop} from 'react-icons/gi'
import { useTranslation } from 'react-i18next'

const Services = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
        })
      }, [])
    //   Translation
    const {t} = useTranslation()
  return (
    <><section id='services'>
                <h4 data-aos="fade-up">{t("services.0")}</h4>
                <h3 data-aos="fade-up">{t("services.1")}</h3>
        <div className="container" data-aos="fade-up" >
            <div className="row">
                <div data-aos="fade-up-right" className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiCupcake className='i'/></span>
                    <div className="aft"></div>
                    <h5>{t("services.2")}</h5>
                    <p>{t("services.3")}</p>
                </div>
                <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><LuIceCream2 className='i'/></span>
                    <div className="aft"></div>
                    <h5>{t("services.2")}</h5>
                    <p>{t("services.3")}</p>
                </div>
                <div data-aos="fade-up-left" className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiIceCreamScoop className='i'/></span>
                    <div className="aft"></div>
                    <h5>{t("services.2")}</h5>
                    <p>{t("services.3")}</p>
                </div>
            </div>
        </div>
            <button data-aos="fade-up" >{t("tasty.2")}</button>
    </section></>
  )
}

export default Services