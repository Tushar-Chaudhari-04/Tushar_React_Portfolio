import React from 'react'
import "./Home.scss"
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/landingpagehero/Hero'
import Footer from '../../components/footer/Footer'
import ProjectCard from '../../components/projectCard/ProjectCard'
import ProjectData from "../../Portfolio-Database/ProjectData"

const Home = () => {

  return (
    <div className='home'>
        <Navbar/>
        <Hero/>
        <div className="projectcard-area">
      {ProjectData.map(data=>(
        <ProjectCard props={data}/>
      ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Home