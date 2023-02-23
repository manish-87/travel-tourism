import "./PricingcardStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const Pricingcard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>--Premium--</h3>
                <span className="bar"></span>
                <p className="btc">$ 1000</p>
                <p>- 12 Days -</p>
                <p>- Cruise -</p>
                <p>- Featured -</p>
                
                <Link to="/contact" className="btn">BOOK NOW</Link>
            </div>

            <div className="card">
                <h3>--Bussiness--</h3>
                <span className="bar"></span>
                <p className="btc">$ 1500</p>
                <p>- 12 Days -</p>
                <p>- Flight|Flight -</p>
                
                <p>- Featured  -</p>
                <Link to="/contact" className="btn">BOOK NOW</Link>
            </div>

            <div className="card">
                <h3>--Basic--</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 6 Days -</p>
                <p>- Cruise|Flight -</p>
                <p>- Featured -</p>
                
                <Link to="/contact" className="btn">BOOK NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricingcard