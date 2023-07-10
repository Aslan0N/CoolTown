import { GlobalContext } from './Context/GlobalContext'
import React, { useContext, useRef } from 'react'
import {GrFacebookOption} from 'react-icons/gr'
import {BiLogoGoogle} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const {setUser} = useContext(GlobalContext)

    const location = useNavigate()
    const checkForm = (e) =>{
        e.preventDefault()
        if(name && pass !== ''){
           return (    
             setUser({
            userName : name.current.value,
            password: pass.current.value
                })
                )
            }if(name && pass !== ''){
                return location('/login')
            }
             
        
    }

    const name = useRef()
    const pass = useRef()
  return (
    <>
     <section id="signUp">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="login-card">
              <h4>Sign Up</h4>
              <form onClick={checkForm}>
              <label className="label">
                <input type="text" required ref={name}/>
                <span>User Name</span>
              </label>
              <label className="label">
                <input type="password" ref={pass} required/>
                <span>Password</span>
              </label>
              <button>Log In</button>
              </form>
              <p className="or">OR</p>
              <div className="i-con">
                <span className="red"><BiLogoGoogle className="i"/></span>
                <span className="blue"><GrFacebookOption className="i"/></span>
                <span className="light-blue"><FaLinkedinIn className="i"/></span>
              </div>
              <p className="end">
                Already a user? <NavLink to={'/login'}>LOGIN</NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp