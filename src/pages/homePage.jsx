import React from 'react'
import Navwithhero from '../components/Navwithhero'
import Footer from '../components/Footer'
import PropertyListing from '../components/PropertyListing'
import PropertyCarousel from '../components/PropertyCarousel'

const Homepage = () => {
  return (
    <div>
        <Navwithhero/>
        <PropertyListing/>
        <PropertyCarousel/>
        <Footer/>
    </div>
  )
}

export default Homepage