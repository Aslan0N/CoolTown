import React from 'react'
import { NavLink } from 'react-bootstrap'

const FirstSec = (props) => {
  return (
    <>
      <section id='first-sec'>
        <div className="item">
          <h4>About Us</h4>
         <div className="con">
         <NavLink to={'/'}>
          <p>{props.main}</p>
          </NavLink>
          <NavLink to={'/about'} >
          <p>{props.current}</p>
          </NavLink>
         </div>
        </div>
      </section>
    </>
  )
}

export default FirstSec