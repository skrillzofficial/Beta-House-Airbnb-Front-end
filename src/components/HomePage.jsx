import React from 'react'
import Navwithhero from './Navwithhero'
import PropertyListing from './PropertyListing'
import PropertyCarousel from './PropertyCarousel'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
        <Navwithhero/>
        <PropertyListing/>
        <PropertyCarousel/>
        <Footer/>
    </div>
  )
}

export default HomePage