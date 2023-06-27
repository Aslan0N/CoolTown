import Aos from 'aos'
import React, { useEffect } from 'react'
import {GiCupcake} from 'react-icons/gi'
import {LuIceCream2} from 'react-icons/lu'
import {GiIceCreamScoop} from 'react-icons/gi'

const Services = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
        })
      }, [])
  return (
    <><section id='services'>
                <h4 data-aos="fade-up">WHY US</h4>
                <h3 data-aos="fade-up">Our Services</h3>
        <div className="container" data-aos="fade-up" >
            <div className="row">
                <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiCupcake className='i'/></span>
                    <div className="aft"></div>
                    <h5>Cherry Vanilla</h5>
                    <p>e Understant behind every good products, it's also have to be accessi of your mouse</p>
                </div>
                <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><LuIceCream2 className='i'/></span>
                    <div className="aft"></div>
                    <h5>Cherry Vanilla</h5>
                    <p>e Understant behind every good products, it's also have to be accessi of your mouse</p>
                </div>
                <div data-aos="fade-up" className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiIceCreamScoop className='i'/></span>
                    <div className="aft"></div>
                    <h5>Mint Chocolate Chip</h5>
                    <p>e Understant behind every good products, it's also have to be accessi of your mouse</p>
                </div>
            </div>
        </div>
            <button data-aos="fade-up" >Read More</button>
    </section></>
  )
}

export default Services