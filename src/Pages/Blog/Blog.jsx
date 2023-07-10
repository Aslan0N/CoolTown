import React, { useState } from 'react'

const Blog = () => {
  const [left, setLeft] = useState(false)
  const toggleLeft = () =>{
    setLeft(!left)
  }
  return (
    <>
      <section id='registration'>
        <div className="register-card">
        <div className={left ? "item-owr1 owr tr-0" : "item-owr1 owr"}>
              <h4>Welcome Back!</h4>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={toggleLeft}>Logİn</button>
            </div>
            <div className={!left ? "item-owr2 owr tr-0" : "item-owr2 owr"}>
              <h4>Hello, Friend!</h4>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={toggleLeft}>Sign Up</button>
            </div>
        <div className={left ? "owerlay" : "owerlay right"}></div>
          <div className="sign-in form">
            <div className={!left ? "item" : "item item-hid2"}>
                <h4>Sign İn</h4>
                <form>
                  <input type="text" placeholder='User Name' />
                  <input type="text" placeholder='Password' />
                  <p>Lorem, ipsum dolor.</p>
                  <button>LOGİN</button>
                </form>
            </div>
          </div>
          <div className="log-in form">
            <div className={left ? "item" : "item item-hid1"}>
          <h4>Create <br /> Account</h4>
              <form>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password' />
              <button>SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog