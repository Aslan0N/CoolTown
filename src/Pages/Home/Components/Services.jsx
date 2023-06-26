import React from 'react'
import {GiCupcake} from 'react-icons/gi'

const Services = () => {
  return (
    <><section id='services'>
                <h4>WHY US</h4>
                <h3>Our Services</h3>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiCupcake className='i'/></span>
                    <div className="aft"></div>
                    <h5>Cherry Vanilla</h5>
                    <p>e Understant behind every good products, it's also have to be accessi of your mouse</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiCupcake className='i'/></span>
                    <div className="aft"></div>
                    <h5>Cherry Vanilla</h5>
                    <p>e Understant behind every good products, it's also have to be accessi of your mouse</p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <span><GiCupcake className='i'/></span>
                    <div className="aft"></div>
                    <h5>Mint Chocolate Chip</h5>
                    <p>e Understant behind every good products, it's also have to be accessi of your mouse</p>
                </div>
            </div>
        </div>
            <button>Read More</button>
    </section></>
  )
}

export default Services