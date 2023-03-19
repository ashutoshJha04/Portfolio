import React  from 'react'
 
import './App.css'
import Home from './Component/Home'
import {
  
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Component/Navbar'
import Navformob from './Component/Navformob'
import Share from './Component/Share'
import Services from './Component/Services';
import News from './Component/News';
import About from './Component/About';
import Contact from './Component/Contact';
import ReactLoading from 'react-loading';
import ScrollToTop from './Component/ScrollToTop';
// import Carousel from './Component/card.jsx' 
 
 

function App() {
  const [done, setdone] = React.useState(undefined);
  React.useEffect(() => {
    setTimeout(
      ()=>{
          setdone(true)
      },4000
    );
  }, [ ])

  return (
    <React.Fragment>
   
    <ScrollToTop/>
      <Navbar/>
    <Navformob/>
    <Share/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Services" element={<Services/>} />
    <Route path="/Project" element={<News/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
  </Routes> 
  
     
    
    
    
   
     
    </React.Fragment>
  )
}

export default App
