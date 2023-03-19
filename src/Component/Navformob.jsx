import React,{useState} from "react";
import "./comp/navmob.css";
import {NavLink, Link } from "react-router-dom";

function Navformob() {
    const [state, setstate] = useState(false);
    const op = ()=>{
        setstate(!state);
    }
  return (
    <div className="na">
    <div className="logo1">DIGI</div>
      {state ? (<ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Project">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Service</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>):""}
      {<span onClick={op} className="ha"><ion-icon name="menu-sharp" size="large"></ion-icon></span>}
    </div>

  );
}

export default Navformob;
