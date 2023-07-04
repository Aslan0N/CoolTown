import React from 'react'

const Form = () => {
  return (
    <>
        <section id='form'>
            <h4>GET IN TOUCH</h4>
            <h3>Leave A Message</h3>
            <form>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="input">
                            <input type="text" placeholder='Firs Name*' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="input">
                            <input type="text" placeholder='Last Name*' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="input">
                            <input type="text" placeholder='Email*' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="input">
                            <input type="text" placeholder='Subject' />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="input bor">
                            <textarea name="" id="" cols="57" rows="5" className='textarea' placeholder='Message'></textarea>
                        </div>
                    </div>
                </div>
            <button>Send Message!</button>
            </form>
        </section>
    </>
  )
}

export default Form