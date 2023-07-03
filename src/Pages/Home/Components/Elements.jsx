import Aos from 'aos'
import React, { useEffect } from 'react'
import {AiFillStar} from 'react-icons/ai'

const Elements = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <>
        <section id='elements'>
            <h4>OUR ICE-CREAM</h4>
            <h3>Best ice cream Elements</h3>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                       <div className="item">
                       <h6>$10.00</h6>
                        <img src="https://webstrot.com/html/cooltown/html/images/e3.png" alt="" />
                        <h5>Cherry Vanilla</h5>
                        <div className="i-con">
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                        </div>
                        <p>Aenean sollicitudin, lorem quis</p>
                        <button>Add To Cart</button>
                       </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
                       <div className="item">
                       <h6>$10.00</h6>
                        <img src="https://webstrot.com/html/cooltown/html/images/e3.png" alt="" />
                        <h5>Cherry Vanilla</h5>
                        <div className="i-con">
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                        </div>
                        <p>Aenean sollicitudin, lorem quis</p>
                        <button>Add To Cart</button>
                       </div>
                    </div>
                    <div className="col-none col-sm-none col-md-none col-lg-4 " data-aos="fade-up">
                        <div className="item">
                        <h6>$10.00</h6>
                        <img src="https://webstrot.com/html/cooltown/html/images/e3.png" alt="" />
                        <h5>Cherry Vanilla</h5>
                        <div className="i-con">
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                            <AiFillStar className='i'/>
                        </div>
                        <p>Aenean sollicitudin, lorem quis</p>
                        <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Elements