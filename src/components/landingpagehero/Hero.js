import React from 'react'
import "./Hero.scss"
import HeroImg from "../../assets/CompBGImg.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return(
    <div className='hero'>
    <div className='hero-img'>
    <img src={HeroImg} alt="Computer Img"/>
    </div>
    <div className='hero-content'>
    <p>Hi, I'm Tushar Chaudhari</p>
    <h1 >Full Stack Developer.</h1>
    
    <div className='btn-area'>
    <Link className='btn' to="/projects">Projects</Link>
    <Link className='btn btn-light' to="/contact">Contact Me</Link>
    </div>
    </div>
    
    </div>
  )
}

export default Hero