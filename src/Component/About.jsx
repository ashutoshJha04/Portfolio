import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Keeda from "./Keeda";
import '../Component/comp/Sky.css'
function About() {
  return (
    <div>
      <Hero nav=" About me" />
      <Keeda />
      <center>
        <div className="cla  ">Qualifications</div>
      
      <div className="about_main">
        <div className="qualification">
          <table border={"1px"}>
            <tr>
              <th>Qualifications</th>
              <th>Year</th>
              <th>Organization Body</th>
              <th>Division</th>
            </tr>
            <tr>
            <td>10th</td>
            <td>2019</td>
            <td>C.B.S.E</td>
            <td>Distinction</td>
            </tr>
            <tr>
            <td>12th(Sci.)</td>
            <td>2021</td>
            <td>C.B.S.E</td>
            <td>Ist</td>
            </tr>
            <tr>
            <td>MDCE</td>
            <td>2024</td>
            <td>N.E.I.L.E.T</td>
            <td>Pursuing</td>
            </tr>
            <tr>
            <td>BCA</td>
            <td>2024</td>
            <td>IGNOU</td>
            <td>Pursuing</td>
            </tr>
          </table>
        </div>
      </div>
      <br /><br /></center>

      <Footer />
    </div>
  );
}

export default About;
