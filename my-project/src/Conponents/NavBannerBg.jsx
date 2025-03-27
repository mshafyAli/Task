import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
// import bannerImage from '../assets/banner.jpeg';


const NavBannerBg = () => {
  return (
    <div className='w-full banner h-auto relative '>

<div className="absolute inset-0 bg-black opacity-50"></div>
        <Navbar/>
        <Banner/>
    </div>
  )
}

export default NavBannerBg