import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillCupHotFill} from 'react-icons/bs'
import {GiTrophyCup} from 'react-icons/gi'

const Timer = () => {
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
                                <p>Happy Customers</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <BsFillPersonFill className='i'/>
                            </span>
                                <h3>425</h3>
                                <p>Successfull Project</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <GiTrophyCup className='i'/>
                            </span>
                                <h3>7760</h3>
                                <p>Blog Posts</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-3">
                        <div className="timer-card">
                            <span>
                                <BsFillCupHotFill className='i'/>
                            </span>
                                <h3>2347</h3>
                                <p>Web Pages</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Timer