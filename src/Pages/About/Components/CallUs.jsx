import React from 'react'
import {LiaPhoneVolumeSolid} from 'react-icons/lia'

const CallUs = () => {
  return (
    <>
        <section id='call-us'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <LiaPhoneVolumeSolid className='i'/>
                        <div className="con">
                            <h4>Call Us</h4>
                            <p>+91 907 474 4316</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 my-none">
                        <img src="https://webstrot.com/html/cooltown/html/images/cll_img.png" className='' alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <form>
                            <input type="email" placeholder='Your Email'/>
                            <button>Subcribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CallUs