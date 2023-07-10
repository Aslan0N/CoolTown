import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {AiFillStar} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillCupHotFill} from 'react-icons/bs'
import {GiTrophyCup} from 'react-icons/gi'

const Timer = () => {

    // Translation

    const {t} = useTranslation()
    
  return (
    <>
        <section id='timer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <AiFillStar className='i'/>
                            </span>
                                <h3>2846</h3>
                                <p>{t("timer.0")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <BsFillPersonFill className='i'/>
                            </span>
                                <h3>425</h3>
                                <p>{t("timer.1")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <GiTrophyCup className='i'/>
                            </span>
                                <h3>7760</h3>
                                <p>{t("timer.2")}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <BsFillCupHotFill className='i'/>
                            </span>
                                <h3>2347</h3>
                                <p>{t("timer.3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Timer