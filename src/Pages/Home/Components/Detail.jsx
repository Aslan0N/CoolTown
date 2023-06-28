import React from 'react'

const Detail = () => {
  return (
    <>
        <section id='detail'>
        <div className="h-con">
        <h4>IF ANY QUERY</h4>
        <h3>Contact Details</h3>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-one">
                    <div className="det-card">
                            <div className="item">
                            <img width={300} src="https://webstrot.com/html/cooltown/html/images/e1.png" alt="" />
                            <div className="content-1">
                                <p><span>Head</span> Webstrot Web Company, 5, Lala Lajpath Rai Marg</p>
                                <p><span>Office</span>Dewas, M.P. India 455001</p>
                            </div>
                            <div className="content-2">
                                <p><span>Email:</span> example@gmail.com</p>
                                <p><span>Phone:</span> 123456789</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-one">
                    <div className="item2">
                    <h4 >Oops! Something went wrong.</h4>
                        <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                        <div className="owerlay">
                            <h5>ADDRESS</h5>
                            <p>121 King Street, Melbourne
                            Victoria 3000 Australia
                            ABN 11 119 159 741</p>
                            <p>E. : webstrot@gmail.com</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Detail