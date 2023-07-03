import React from 'react'
import {AiOutlineCheckSquare} from 'react-icons/ai'

const AboutFirst = () => {
  return (
    <>
        <section id='about-first'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <h4>OUR ABOUT US</h4>
                        <h3>Little About Me</h3>
                        <p>We are focused on giving you what is trending and needful for your online presence and so we focus on building powerful tools, features and plugins that are actually need for your business.
                        <br /><br />
                        These will make you enjoy all the benefits of installing a powerful theme with functional codes through an easy to build WordPress tool kit.
                        </p>
                        <div className="p-con">
                            <AiOutlineCheckSquare className='i'/>
                            <p>We are focused on giving you what is trending and needful for your online presence and so we focus on building</p>
                        </div>
                        <div className="p-con">
                            <AiOutlineCheckSquare className='i'/>
                            <p>We are focused on giving you what is trending and needful for your online presence and so we focus on building</p>
                        </div>
                        <button>Read More</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 img-col">
                        <div className="img">
                            <img src="https://webstrot.com/html/cooltown/html/images/abt_in_img2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutFirst