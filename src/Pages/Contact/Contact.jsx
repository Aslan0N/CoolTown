import React, { useContext } from 'react'
import ContactCard from './Components/ContactCard'
import Form from './Components/Form'
import CallUs from '../About/Components/CallUs'
import Partners from '../../Components/Partners'
import FirstSec from '../../Components/FirstSec'
import { GlobalContext } from '../../Context/GlobalContext'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {darkMode} = useContext(GlobalContext)

  // Translation

  const {t} = useTranslation()
  return (
    <>
    <FirstSec  place={t("header.5")} current={t("header.5")} pColor1={ darkMode ? "#fff"  : "#141b1d"} pColor2={darkMode ? "#f25221" : "#fff" } bg={darkMode? "url('https://webstrot.com/html/cooltown/html/images/header_bg2.jpg')" :"url('https://webstrot.com/html/cooltown/html/images/header_bg.jpg')"} />
      <ContactCard/>
      <Form/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default Contact