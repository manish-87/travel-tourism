import './App.css';

import React from 'react';
import "./index.css";
import Home from './Components/Home';

import About from './Components/About';
import Contact from './Components/Contact';
import {Routes,Route} from 'react-router-dom'
import TravelPlan from './Components/TravelPlan';


function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/travelplan' element={<TravelPlan/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
