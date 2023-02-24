import React from 'react'
import Navbar from './Navbar'
import Heroimage from "../Components/Heroimage"
import Footer  from './Footer'
import Work from "../Components/Work"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage />
      <Work/>
      <Footer/>
      
    </div>
  )
}

export default Home