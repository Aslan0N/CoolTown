import React from 'react'
import ContactCard from './Components/ContactCard'
import Form from './Components/Form'
import CallUs from '../About/Components/CallUs'
import Partners from '../../Components/Partners'

const Contact = () => {
  return (
    <>
      <ContactCard/>
      <Form/>
      <CallUs/>
      <Partners/>
    </>
  )
}

export default Contact