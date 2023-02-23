import React from 'react'
import Footer from './Footer';
import HeroImg2 from './HeroImg2';
import Navbar from './Navbar'
import Pricingcard from './Pricingcard';
import WorkCard from './WorkCard';

const TravelPlan = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Popular Destinations" text=" Tours give you the opportunity to see a lot, within a time frame. "/>
      <WorkCard/>
      <Pricingcard/>
      <Footer/>
    </div>
  )
}

export default TravelPlan;