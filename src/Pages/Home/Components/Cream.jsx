import React, { useEffect } from 'react'
import {MdDoubleArrow} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import Aos from 'aos';

const Cream = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
  return (
    <>
        <section id='cream'>
        <div className="h-con">
        <h5 className='h5' data-aos="fade-up">CHECK OUT BLOG</h5>
        <h3 className='h3' data-aos="fade-up">Ice Cream Blog</h3>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 margin" data-aos="fade-up">
                    <div className="del-card">
                        <div className="img">
                            <img src="https://webstrot.com/html/cooltown/html/images/blog1.jpg" alt="" />
                            <div className="owerlay">
                                <p>News Delivery <span><AiOutlineHeart className='i'/></span></p>
                                <h4>29-Jan-2022</h4>
                            </div>
                        </div>
                        <div className="content">
                           <div className="item">
                             <h4>News</h4>
                            <h3>SERVICES - 2022</h3>
                            <h5>29-JAN-2022</h5>
                            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                            <button>Read More <MdDoubleArrow className='i'/></button>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 none" data-aos="fade-up">
                    <div className="del-card">
                        <div className="img">
                            <img src="https://webstrot.com/html/cooltown/html/images/blog2.jpg" alt="" />
                            <div className="owerlay">
                                <p>News Delivery <span><AiOutlineHeart className='i'/></span></p>
                                
                                <h4>29-Jan-2022</h4>
                            </div>
                        </div>
                        <div className="content">
                           <div className="item">
                             <h4>News</h4>
                            <h3>SERVICES - 2022</h3>
                            <h5>29-JAN-2022</h5>
                            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                            <button>Read More <MdDoubleArrow className='i'/></button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button data-aos="fade-up">Read More</button>
        </section>
    </>
  )
}

export default Cream