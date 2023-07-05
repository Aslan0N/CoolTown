import Aos from 'aos'
import React, { useEffect } from 'react'

const Form = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <>
        <section id='form'>
            <h4 data-aos="fade-up">GET IN TOUCH</h4>
            <h3 data-aos="fade-up">Leave A Message</h3>
            <form>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
                        <div className="input">
                            <input type="text" placeholder='Firs Name*' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
                        <div className="input">
                            <input type="text" placeholder='Last Name*' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
                        <div className="input">
                            <input type="text" placeholder='Email*' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-up">
                        <div className="input">
                            <input type="text" placeholder='Subject' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12" data-aos="fade-up">
                        <div className="input bor">
                            <textarea name="" id="" cols="57" rows="5" className='textarea' placeholder='Message'></textarea>
                        </div>
                    </div>
                </div>
            <button data-aos="fade-up">Send Message!</button>
            </form>
        </section>
    </>
  )
}

export default Form