import React from 'react'
import AboutContent from './AboutContent'
import Footer from './Footer'
import HeroImg2 from './HeroImg2'
import Navbar from './Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About Us"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About