import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../Assets/react2.webp"
import React2 from "../Assets/react1.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>About Us</h1>
            <p>Welcome to Travello, your go-to destination for all things travel and tourism. Our website is dedicated to helping people explore the world and make unforgettable memories. Thank you for choosing Travello as your trusted travel partner. We look forward to helping you make your travel dreams a reality!</p>
            
            
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <div className="img-stack bottom">
                <img src={React2} className="img" alt="true"/>
                </div>
           

            <div className="img-stack top">
                <img src={React1} className="img" alt="true"/>
                </div>
                
                
            </div>
            
        </div>
        
        </div>
  )
}

export default AboutContent