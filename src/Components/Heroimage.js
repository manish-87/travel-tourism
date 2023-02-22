import "./HeroimgStyles.css"
import React from 'react'

import BackGround  from '../Assets/background.jpg'
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="background-img" src={BackGround} alt="manish"/>
        </div>
        <div className="content">
            <p>YOUR JOURNEY YOUR STORY</p>
            <h1>Travello.</h1>
            <div>
                <Link to="/travelplan" className="btn">Travel Plan</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage