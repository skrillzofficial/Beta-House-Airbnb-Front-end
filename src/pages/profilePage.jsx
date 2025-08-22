import React from 'react'
import Footer from '../components/Footer'
import PropertyListing from '../components/PropertyListing'
import PropertyCarousel from '../components/PropertyCarousel'
import NavHeroLoggedin from '../components/NavHeroLoggedin'

const ProfilePage = () => {
  return (
    <div>
        <NavHeroLoggedin/>
        <PropertyListing/>
        <PropertyCarousel/>
        <Footer/>
    </div>
  )
}

export default ProfilePage