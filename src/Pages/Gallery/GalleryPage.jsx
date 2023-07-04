import React, { useContext } from 'react'
import FirstSec from '../../Components/FirstSec'
import { GlobalContext } from '../../Context/GlobalContext'
import CallUs from '../About/Components/CallUs'
import Partners from '../../Components/Partners'
import GalleryFirst from './Components/GalleryFirst'

const GalleryPage = () => {
  const {darkMode} = useContext(GlobalContext)
  return (
    <>
      <FirstSec  place={"Gallery"} current={"Gallery"} pColor1={ darkMode ? "#fff"  : "#141b1d"} pColor2={darkMode ? "#f25221" : "#fff" } bg={darkMode? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')" :"url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"}/>
      <GalleryFirst/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default GalleryPage