import React from 'react'
import NavHeroLoggedin from './NavHeroLoggedin'
import PropertyListing from './PropertyListing'
import PropertyCarousel from './PropertyCarousel'
import Footer from './Footer'

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