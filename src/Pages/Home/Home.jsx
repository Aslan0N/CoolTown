import React from 'react'
import Tasty from './Components/Tasty'
import Little from './Components/Little'
import Offer from './Components/Offer'
import Gallery from './Components/Gallery'
import Services from './Components/Services'
import Makers from '../../Components/Makers'
import Testimonial from './Components/Testimonial'

const Home = () => {
  return (
    <>
      <Tasty/>
      <Little/>
      <Offer/>
      <Gallery/>
      <Services/>
      <Makers/>
      <Testimonial/>
    </>
  )
}

export default Home