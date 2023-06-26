import React, { useState } from "react";
import { BsBag } from "react-icons/bs";
import { GrLogin } from "react-icons/gr";
import { NavLink } from 'react-router-dom'


const Header = () => {
  const [opn,setOpn] = useState(false)
  const toggle = () =>{
    setOpn(!opn);
  }
  return (
    <>
      <header>
        <div className="item">
          <div className="logo">
            <img
              src="https://webstrot.com/html/cooltown/html/images/logo.png"
              alt=""
            />
          </div>
          <div className="i-con">
            <BsBag className="i" />
            <GrLogin className="i mx-4" />
            <div className="my-bars" onClick={toggle}>
              <span className="one"></span>
              <span className="two"></span>
              <span className="three"></span>
            </div>
          </div>
        </div>
      </header>
      {/* Owerlay */}
      <section id='owerlay' className={opn ? "opn" : ""} >
    <div className={opn ? "my-close" : "my-close d-none"} onClick={toggle} >
      <span className="one"></span> 
      <span className="two"></span>
    </div>
            <ul className={!opn ? "" : "opacity"}>
                <li><NavLink className={'my-nav'} to={'/'} >Home</NavLink></li>
                <li><NavLink className={'my-nav'} to={'about'} >About Us</NavLink></li>
                <li><NavLink className={'my-nav'} to={'products'} >Products</NavLink></li>
                <li><NavLink className={'my-nav'} to={'gallery'} >Gallery</NavLink></li>
                <li><NavLink className={'my-nav'} to={'pages'} >Pages</NavLink></li>
                <li><NavLink className={'my-nav'} to={'blog'} >Blog</NavLink></li>
                <li><NavLink className={'my-nav'} to={'contact'} >Contact</NavLink></li>
            </ul>
            
        </section>
    </>
  );
};

export default Header;
