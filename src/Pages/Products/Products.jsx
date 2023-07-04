import React, { useContext } from 'react'
import CallUs from '../About/Components/CallUs'
import Partners from '../../Components/Partners'
import FirstSec from '../../Components/FirstSec';
import { GlobalContext } from '../../Context/GlobalContext';

const Products = () => {
  const {darkMode} = useContext(GlobalContext)
  return (
    <>
      <FirstSec place={"Product"} current={"Products"} pColor1={ darkMode ? "#fff"  : "#141b1d"} pColor2={darkMode ? "#f25221" : "#fff" } bg={darkMode? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')" :"url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"}/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default Products