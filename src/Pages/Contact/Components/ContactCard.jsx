import React, { useEffect } from 'react'
import {MdLocationOn} from 'react-icons/md'
import {MdPhoneInTalk} from 'react-icons/md'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import Aos from 'aos'
import { useTranslation } from 'react-i18next'

const ContactCard = () => {
    useEffect(()=>{
        Aos.init()
    },[])

    // Translation
    const {t} = useTranslation()
  return (
    <>
        <section id='contact-card'>
        <h4 data-aos="fade-up">{t("contact.0")}</h4>
        <h3 data-aos="fade-up">{t("contact.1")}</h3>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <MdLocationOn className="i loc"/>
                            <div className="p-con">
                                <h4>{t("contact.2")}</h4>
                            <p>
                            {t("contact.3")}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <MdPhoneInTalk className="i"/>
                            <div className="p-con">
                                <h4>{t("contact.4")}</h4>
                            <p>
                            +91123456789 <br />
                            +91123456789
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <BsFillEnvelopeFill className="i"/>
                            <div className="p-con">
                                <h4>{t("contact.5")}</h4>
                            <p>
                            support@example.com
                            support@example.com
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactCard