import React ,{useState} from "react";
import "./comp/nav.css";
import {NavLink, Link } from "react-router-dom";
 


function Navbar() {
  const [menu, setmenu] = useState(false);
  
  const close = () =>{
    setmenu(!menu)
    console.log(menu);
    
  }
  
  
  return (
    <header>
    
      <div className="navhead">
         
      {menu?<span style={{padding:'20px',fontSize:'24px'}}>DIGI</span>     :" "}
        {<span onClick={close} className="ham"><ion-icon name="menu-sharp" size="large"></ion-icon></span>}
      </div>
      <br />
      <ul>
        <li>
          <NavLink to="/">
            <span title="Home">
              <ion-icon name="home-sharp" size="large"></ion-icon>
            </span>
            {menu?(<span className="list">Home</span>):""}
          </NavLink>
        </li>
        <li>
          <NavLink to="/About">
            <span title="About">
            <i className="glyphicon glyphicon-user"></i>
            </span>
            {menu?(<span className="list">About</span>):""}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact">
            <span title="Contact">
            <i className="glyphicon glyphicon-phone-alt"></i>
            </span>
            {menu?(<span className="list" title="Contact">Contact</span>):""}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Project">
            <span title="News">
              <i className="glyphicon glyphicon-bookmark"></i>
            </span>
            {menu?(<span className="list">Project</span>):""}
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services">
            <span title="Log-in" id="Log-in">
             <ion-icon   name="log-in-outline"></ion-icon>
            </span>
            {menu?(<span className="list">Services</span>):""}
          </NavLink>
        </li>
      </ul>
      
       
    </header>
  );
}

export default Navbar;
