import React from 'react'
import Footer from './Footer';
import HeroImg2 from './HeroImg2';
import Navbar from './Navbar'
import Pricingcard from './Pricingcard';
import Work from './Work';


const TravelPlan = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Popular Destinations" text=" Tours give you the opportunity to see a lot, within a time frame. "/>
      <Work/>
      <Pricingcard/>
      <Footer/>
    </div>
  )
}

export default TravelPlan;