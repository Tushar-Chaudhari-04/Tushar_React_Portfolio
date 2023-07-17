import React from "react";
import "./Projects.scss"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Hero2 from "../../components/hero2/Hero2";
import ProjectCard from "../../components/projectCard/ProjectCard";
import ProjectData from "../../Portfolio-Database/ProjectData"
const Projects = () => {
  const projectHeroData = {
    heading: "MERN STACK PROJECTS.",
    para: "Some of my most recent works",
  };

  return (
    <div>
      <Navbar />
      <Hero2 props={projectHeroData} />
      <div className="projectcard-area">
      {ProjectData.map(data=>(
        <ProjectCard props={data}/>
      ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
