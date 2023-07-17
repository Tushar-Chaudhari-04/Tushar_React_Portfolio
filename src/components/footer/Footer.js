import React from "react";
import "./Footer.scss";
import { IoMdHome } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom"; 

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <span className="footer-area">
            {<IoMdHome className="footer-icons" />} Chalisgaon-424101,MH,Bharat
          </span>
          <span className="footer-area">
            {<FaPhone className="footer-icons" />} +91 9588454481
          </span>
          <span className="footer-area">
            {<BiLogoGmail className="footer-icons" />} tushar.c8942@gmail.com
          </span>
        </div>
        <div className="footer-center">
          <p>
            <b>About Tushar Chaudhari</b>
          </p>
          <p>
            I am a MERN Fullstack Software Developer.I am passionate to develop end to end web
            applications.
          </p>
          <p>You can check my Github and linkedIn for more insigths</p>
        </div>

        <div className="footer-right">
          <Link to="/contact" className="btn">Contact Me</Link> 
          {/* <button className="btn">Contact Me</button> */}
        </div>
      </div>
      <div className="footer-end">
        <p className="foot-end-head">Tushar Portfolio</p>
        <p className="foot-end-tail">Copyright © {currentDate} All rights reserved</p>
        {/* <p className="foot-end-tail">©{currentDate}.All rights reserved.</p> */}
        <div className="foot-end-icons">
        <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/tushar-chaudhari-0404/"
              style={{ color: "#0e76a8", fontSize: "25px",margin:"20px" }}
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Tushar-Chaudhari-04"
              style={{ color: "#fff", fontSize: "25px" }}
            >
              <BsGithub />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
