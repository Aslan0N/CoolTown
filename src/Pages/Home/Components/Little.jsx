import Aos from 'aos'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

const Little = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
    //   Translation
      const {t} = useTranslation()

  return (
    <>
        <section id='little'>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-up" className="col-12 col-sm-12 col-md--12 col-lg-6 col-img">
                        <img src="https://webstrot.com/html/cooltown/html/images/ice2.png" alt="" />
                    </div>
                    <div data-aos="fade-up" className="col-12 col-sm-12 col-md--12 col-lg-6 col-content">
                        <h4>{t("little.0")}</h4>
                        <h3>{t("little.1")}</h3>
                        <p>{t("little.2")}</p>
                        <p>{t("little.3")}</p>
                        <img src="https://webstrot.com/html/cooltown/html/images/farhan_shaikh.png" alt="" />
                        <h5>{t("little.4")}</h5>
                        <h6>{t("little.5")}</h6>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Little