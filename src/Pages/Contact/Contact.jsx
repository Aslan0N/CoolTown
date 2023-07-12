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
    <FirstSec  place={t("header.5")} current={t("header.5")} />
      <ContactCard/>
      <Form/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default Contact