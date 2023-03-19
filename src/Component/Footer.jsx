import React ,{useEffect} from "react";
 
import "./comp/footer.css";


function Footer() {
  
  return (
    <>
      <div className="container2">
        <div className="container3">
          <div className="about">
            <h2>Welcome</h2>
            <p>
            Our work is showcased on our website and across our social media channels

            We believe that the best way to know us is by checking out our projects on our website, or if you’re more of a visual person, then you can see it all on Instagram!⁣
            
            It’s all about transparency. Check out the links to see what we’ve been up to lately.
            </p>
            <div className="contact-2">
              <div>
                <span className="red">Call me : </span><span className="small">+911234567890</span>
              </div>
              <div>
                <span className="red">Email : </span><span className="small">jha.ashutosh2004@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="contactus">
          <form action="https://formspree.io/f/maykolyo"
          method="POST">
            <input type="email" placeholder="Enter your valid email address" required id="email"
           
            name="email" /><br />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder=" Enter your message" required
            ></textarea><br />
            <input type="submit"  value="Send" /><br />
            </form>
          </div>
        </div>
        <div className="copywrite">
        © Copyright disclaimer 2022
        </div>
      </div>
    </>
  );
}

export default Footer;
