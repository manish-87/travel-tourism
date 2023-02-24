import React from 'react'

import Footer from './Footer'
import Form from './Form'
import HeroImg2 from './HeroImg2'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Contact Us" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact