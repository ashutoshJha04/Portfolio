import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import '../Component/comp/footer.css'

function Contact() {
  return (
    <div>
      <Hero nav = "Contact Page"/>
      <center>
      <div className="cla">Contact me</div>
       
    </center>
      <br />
     <center> <iframe className='mr_auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0965805840083!2d77.31060991488819!3d28.416342482503595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd3425359799%3A0x2134b7df05f4e9fa!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1664105633875!5m2!1sen!2sin"  height="450" style={{border:'0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center>
       
      <Footer/>
    </div>
  )
}

export default Contact
