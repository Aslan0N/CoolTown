import React from 'react'
import { useTranslation } from 'react-i18next'
import {GoArrowRight} from 'react-icons/go'

const GalleryFirst = () => {
    // Translation
    const {t} = useTranslation()
  return (
    <>
        <section id='gallery-first'>
        <h4>{t("gallery.0")}</h4>
        <h3>{t("gallery.1")}</h3>
           <div className="gallery-container">
            <div className="gallery-row">
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g1.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g2.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g3.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g4.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g5.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g6.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g7.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g8.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g2.jpg" alt="" /></div>
                <div className="gallery-col"> <div className="owerlay">
                    <div className="con">
                        <p>{t("gallery.2")}</p>
                        <span><GoArrowRight/></span>
                    </div>
                </div> <img src="https://webstrot.com/html/cooltown/html/images/g1.jpg" alt="" /></div>
            </div>
           <button>{t("tasty.2")}</button>
           </div>
        </section>
    </>
  )
}

export default GalleryFirst