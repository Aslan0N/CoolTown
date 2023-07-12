import React, { useContext } from 'react'
import FirstSec from '../../Components/FirstSec'
import { GlobalContext } from '../../Context/GlobalContext'
import CallUs from '../About/Components/CallUs'
import Partners from '../../Components/Partners'
import GalleryFirst from './Components/GalleryFirst'
import { useTranslation } from 'react-i18next'

const GalleryPage = () => {

  // Translation
  const {t} = useTranslation()
  return (
    <>
      <FirstSec  place={t("header.3")} current={t("header.3")} />
      <GalleryFirst/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default GalleryPage