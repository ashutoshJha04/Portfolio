import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import './comp/Services.css';

function Services() {
  return (
    <div>
      <Hero nav="Our Services" />
      <center>
        <div className="cla ">Web-Services</div></center>

        <div className="servic">
        <div className="item">
          <div className="price red">$50</div>
          <h2 className="heading red">Mid-level</h2>
          <div className="features">
            <ul>
              <li><h3>Features :-</h3></li>
              <li className="list5 red">Responsive</li>
              <li className="list5 red">Cool animations</li>
            </ul>
          </div>
        </div>
          <div className="item manf">
            <div className="price red">$100</div>
            <h2 className="heading red">Advance UI</h2>
            <div className="features">
              <ul>
                <li><h3>Features :-</h3></li>
                <li className="list5 red">Responsive</li>
                <li className="list5 red">Cool animations</li>
                <li className="list5 red">Using libraries</li>
                <li className="list5 red">Modern UI</li>
                <li className="list5 red">Optimized Codes</li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="price red">$20</div>
            <h2 className="heading red">Normal Design</h2>
            <div className="features">
              <ul>
                <li><h3>Features :-</h3></li>
                <li className="list5 red">Responsive</li>
              </ul>
            </div>
          </div>
        </div>
        <center><div className="cla no-border">Stay tuned with us</div></center>

      <Footer />
    </div>
  );
}

export default Services;
