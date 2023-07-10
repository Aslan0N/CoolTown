import React, { useContext } from 'react'
import FirstSec from '../../Components/FirstSec'
import { GlobalContext } from '../../Context/GlobalContext'
import CallUs from '../About/Components/CallUs'
import Partners from '../../Components/Partners'
import GalleryFirst from './Components/GalleryFirst'
import { useTranslation } from 'react-i18next'

const GalleryPage = () => {
  const {darkMode} = useContext(GlobalContext)

  // Translation
  const {t} = useTranslation()
  return (
    <>
      <FirstSec  place={t("header.3")} current={t("header.3")} pColor1={ darkMode ? "#fff"  : "#141b1d"} pColor2={darkMode ? "#f25221" : "#fff" } bg={darkMode? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')" :"url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"}/>
      <GalleryFirst/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default GalleryPage