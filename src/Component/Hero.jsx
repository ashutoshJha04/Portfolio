import React from "react";
import "./comp/hero.css";
import logo from '../assets/ashu.jpg';
import Typewriter from 'typewriter-effect';

function Hero(props) {
  return (
    <div className="container">
      <div className="top"> {props.nav}</div>
      <div className="hero">
        <div className="con">
          <h2>
            Hi,I am <div><Typewriter
            options={{
              strings: ['Ashutosh Jha', ''],
              autoStart: true,
              loop: true,
              delay:40
            }}
          /></div>
          </h2>
           <h1>
           <Typewriter
  options={{
    strings: ['Frontend developer', 'Tech Enthusiastic','Developer'],
    autoStart: true,
    loop: true,
    delay:40
  }}
/>
           
           </h1>
          <p>
            I am a Web Developer.I have expertise in Web development,regular
            office and many more.
          </p>
        </div>
        <div className="img"><img src={logo} alt="HI" width={'100%'} height={'70%'}/></div>
      </div>
    </div>
  );
}

export default Hero;
