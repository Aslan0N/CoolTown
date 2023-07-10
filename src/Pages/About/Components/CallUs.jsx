import Aos from 'aos'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {LiaPhoneVolumeSolid} from 'react-icons/lia'

const CallUs = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    // Translation
    const {t} = useTranslation()
  return (
    <>
        <section id='call-us'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                        <div className="item">
                        <LiaPhoneVolumeSolid className='i'/>
                        <div className="con">
                            <h4>{t("callus.0")}</h4>
                            <p>+91 907 474 4316</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-none" data-aos="fade-up">
                        <img src="https://webstrot.com/html/cooltown/html/images/cll_img.png" className='' alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                        <form>
                            <input type="email" placeholder={t("callus.1")}/>
                            <button>{t("callus.2")}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CallUs