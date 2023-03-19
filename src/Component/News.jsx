import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Project from './Project'

function News() {
  return (
    <div>
       <Hero  nav ="Welcome to project section"/>
       <Project/>
       <center><div className="cla no-border"> More projects will be updating soon!👨‍💻
       <div>WORK IN PROGRESS</div></div>
       </center>
       <Footer/>
    </div>
  )
}

export default News
