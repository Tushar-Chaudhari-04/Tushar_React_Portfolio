import React, { useState } from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"

const Navbar = () => {
  const navigate=useNavigate();
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const [navBGColor,setNavBGColor]=useState(false);

  const handleHamburgerClick = () => setHamburgerClick(!hamburgerClick);
  const handleBGColor=()=>{
    console.log("scroll",window.scrollY)
    if(window.scrollY>=100){
      setNavBGColor(true);
    }else{
      setNavBGColor(false);
    }
  }

  window.addEventListener("scroll",handleBGColor);
  return (
    <div className={navBGColor?"navbar navbar-bg":"navbar"}>
      <h2 
      className={hamburgerClick ? "nav-header active" : "nav-header"}
      style={{ color: "#f8d90f" }}>
        <Link to="/">Tushar Portfolio.</Link>
      </h2>

      <div className="nav-content">
        <ul className={hamburgerClick ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          {/* <li>
            <Link to="/experience">Work Experience</Link>
          </li> */}
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
          <li> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tushar-chaudhari-0404/" style={{color:"#0e76a8",fontSize:"25px"}}><FaLinkedinIn/></a></li>
          <li> <a target="_blank" rel="noreferrer" href="https://github.com/Tushar-Chaudhari-04" style={{color:"#fff",fontSize:"25px"}}><BsGithub/></a></li>
        </ul>
        <div className="hamburger" onClick={handleHamburgerClick}>
          {hamburgerClick ? (
            <FaTimes fontSize={30} style={{ color: "white" }} />
          ) : (
            <FaBars fontSize={30} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
