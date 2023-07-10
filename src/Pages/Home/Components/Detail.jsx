import React from 'react'
import { useTranslation } from 'react-i18next'

const Detail = () => {
    // Translation
    const {t} = useTranslation()
  return (
    <>
        <section id='detail'>
        <div className="h-con">
        <h4>{t("detail.0")}</h4>
        <h3>{t("detail.1")}</h3>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-one">
                    <div className="det-card">
                            <div className="item">
                            <img width={300} src="https://webstrot.com/html/cooltown/html/images/e1.png" alt="" />
                            <div className="content-1">
                                <p><span>{t("detail.2")}</span>{t("detail.3")}</p>
                                <p><span>{t("detail.4")}</span>{t("detail.5")}</p>
                            </div>
                            <div className="content-2">
                                <p><span>{t("detail.6")}:</span> example@gmail.com</p>
                                <p><span>{t("detail.7")}:</span> 123456789</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-one">
                    <div className="item2">
                    <h4 >{t("detail.8")}</h4>
                        <p>{t("detail.9")}</p>
                        <div className="owerlay">
                            <h5>{t("detail.10")}</h5>
                            <p>{t("detail.11")}</p>
                            <p>E. : webstrot@gmail.com</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Detail