import React, { useEffect } from 'react'
import {MdLocationOn} from 'react-icons/md'
import {MdPhoneInTalk} from 'react-icons/md'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import Aos from 'aos'

const ContactCard = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <>
        <section id='contact-card'>
        <h4 data-aos="fade-up">IF ANY QUERY</h4>
        <h3 data-aos="fade-up">Contact Details</h3>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <MdLocationOn className="i loc"/>
                            <div className="p-con">
                                <h4>ADDRESS</h4>
                            <p>
                            110 B Kalani Bag Dewas Madhya Pradesh, India #455001
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <MdPhoneInTalk className="i"/>
                            <div className="p-con">
                                <h4>PHONE NUMBER</h4>
                            <p>
                            +91123456789 <br />
                            +91123456789
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="item">
                        <BsFillEnvelopeFill className="i"/>
                            <div className="p-con">
                                <h4>EMAIL ADDRESS</h4>
                            <p>
                            support@example.com
                            support@example.com
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactCard